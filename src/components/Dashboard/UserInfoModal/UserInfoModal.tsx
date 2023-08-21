import ModalMain from '@components/Modal/ModalMain/ModalMain';
import WithValidationContext from 'context/InputValidationContext/InputValidationContext';
import { useCreateValidationState } from 'hooks/inputValidation/useCreateValidationState/useCreateValidationState';
import { useSetModalState } from 'hooks/modal/useSetModalState';
import s from './UserInfoModal.module.scss'
import { useAppSelector } from 'store/store';
import { inputValidators } from 'utils/constants/validators/validators';
import { userSelector } from 'utils/helpers/selectors/userSelector/userSelector';
import InfoInput from '@components/Ui/InfoInput/InfoInput';

const UserInfoModal = () => {
    const [isOpen, closeModal, openModal] = useSetModalState()
    const { name, password, email } = useAppSelector(userSelector)

    const valObject = {
        email: {
            validators: inputValidators.email,
            defaultValue: email,
        },
        password: {
            validators: inputValidators.password,
            defaultValue: password,
        },
        name: {
            validators: inputValidators.name,
            defaultValue: name,
        }
    }
    const [validationState, dispatch] = useCreateValidationState(valObject)
    return (
        <>
            <ModalMain
                isOpen={isOpen}
                closeModal={closeModal}
            >
                <WithValidationContext
                    state={validationState}
                    dispatch={dispatch}
                >
                    <h3 className={s['title']}>Ваши данные</h3>
                    <div className={s['item']}>
                        <InfoInput
                            inputTitle={'Имя'}
                            validationItem={validationState['name']}
                        />
                    </div>
                    <div className={s['item']}>
                        <InfoInput
                            inputTitle={'Электронная почта'}
                            validationItem={validationState['email']}
                        />
                    </div>
                    <div className={s['item']}>
                        <InfoInput
                            inputTitle={'Пароль'}
                            validationItem={validationState['password']}
                        />
                    </div>
                </WithValidationContext>
            </ModalMain>
            <button onClick={openModal}>
                Настройки
            </button>
        </>
    );
};

export default UserInfoModal;