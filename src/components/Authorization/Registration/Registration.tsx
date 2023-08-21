import WithLoader from '@components/Providers/WithLoader/WithLoader';
import { regEndpoint } from 'api/api';
import WithValidationContext from 'context/InputValidationContext/InputValidationContext';
import { useFetchData } from 'hooks/dataFetch/useFetchData';
import { useCreateValidationState } from 'hooks/inputValidation/useCreateValidationState/useCreateValidationState';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import BaseInputWithValidators from '@components/Ui/BaseInputWithValidators/BaseInputWithValidators';
import { VAL_LOADING, VAL_ERROR } from 'utils/constants/validationTypes/validationTypes';
import s from '../LogIn/LogIn.module.scss'
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import PrimaryLink from 'ui/links/PrimaryLink/PrimaryLink';
import { routes } from 'utils/constants/routes/routes';
import { inputValidators } from 'utils/constants/validators/validators';
import { useCreateSubmitWithVal } from 'hooks/authorization/useCreateSubmitWithVal';
import { useSetAuthState } from 'hooks/authorization/useSetAuthState';
import { User } from 'types/user/user';
import BaseInputPassword from '@components/Ui/BaseInputPassword/BaseInputPassword';
import { generateColorForUser } from 'utils/helpers/color/generateColorForUser';
import { valObjectReg } from 'utils/constants/valObjects/valObjectReg';
import { AuthReturnType } from 'types/auth/auth';

const Registration = () => {

    const [validationState, dispatch] = useCreateValidationState(valObjectReg)

    const [data, getData, setDataFetchState] = useFetchData<AuthReturnType>()

    useSetAuthState(data)

    const { name, password, email, isValid } = validationState
    const { fetchStatus } = data

    const sendData = () => {
        const requestBody = regEndpoint({
            email: email.value,
            password: password.value,
            name: name.value,
            userColor: generateColorForUser(),
        })
        getData(requestBody)

    }

    const onSubmit = useCreateSubmitWithVal(
        isValid,
        fetchStatus,
        dispatch,
        sendData,
        setDataFetchState
    )

    return (
        <WithLoader
            condition={fetchStatus === VAL_LOADING}
        >
            <h2 className={s['title']}>Регистрация</h2>
            <WithValidationContext
                state={validationState}
                dispatch={dispatch}
            >
                <form onSubmit={onSubmit}>
                    <div className={s['item']}>
                        <BaseInputWithValidators
                            inputTitle='Имя'
                            validationItem={name}
                        />
                    </div>
                    <div className={s['item']}>
                        <BaseInputWithValidators
                            inputTitle='Email'
                            validationItem={email}
                            type='text'
                        />
                    </div>
                    <div className={s['item']}>
                        <BaseInputPassword
                            inputTitle='Пароль'
                            validationItem={password}
                        />
                    </div>

                    <PrimaryButton>
                        Зарегестрироваться
                    </PrimaryButton>
                </form>
                {fetchStatus === VAL_ERROR &&
                    <ErrorMessage>
                        {data.errorBody}
                    </ErrorMessage>
                }
            </WithValidationContext>
            <p className={s['text']}>
                Есть аккаунт? <PrimaryLink type='button' to={`/${routes.auth}`}>Войти</PrimaryLink>
            </p>
        </WithLoader>
    );
};

export default Registration;