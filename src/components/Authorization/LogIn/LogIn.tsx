import BaseInputWithValidators from '@components/Ui/BaseInputWithValidators/BaseInputWithValidators';
import s from './LogIn.module.scss'
import WithValidationContext from 'context/InputValidationContext/InputValidationContext';
import { useCreateValidationState } from 'hooks/inputValidation/useCreateValidationState/useCreateValidationState';
import { useFetchData } from 'hooks/dataFetch/useFetchData';
import { authEndpoint } from 'api/api';
import { VAL_ERROR, VAL_LOADING } from 'utils/constants/validationTypes/validationTypes';
import WithLoader from '@components/Providers/WithLoader/WithLoader';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import PrimaryButton from 'ui/buttons/PrimaryButton/PrimaryButton';
import PrimaryLink from 'ui/links/PrimaryLink/PrimaryLink';
import { routes } from 'utils/constants/routes/routes';
import { useCreateSubmitWithVal } from 'hooks/authorization/useCreateSubmitWithVal';
import { User } from 'types/user/user';
import { useSetAuthState } from 'hooks/authorization/useSetAuthState';
import BaseInputPassword from '@components/Ui/BaseInputPassword/BaseInputPassword';
import { valObjectCreateAuth } from 'utils/constants/valObjects/valObjectCreateAuth';

const LogIn = () => {

    const [validationState, dispatch] = useCreateValidationState(valObjectCreateAuth)

    const [data, getData, setDataFetchState] = useFetchData<User>()

    const { email, password, isValid } = validationState

    const { fetchStatus } = data

    useSetAuthState(data)

    const sendData = () => {
        const requestBody = authEndpoint({
            email: email.value,
            password: password.value,
        })
        getData(requestBody)

    }

    const onSubmit = useCreateSubmitWithVal(isValid,
        fetchStatus,
        dispatch,
        sendData,
        setDataFetchState
    )

    return (
        <WithLoader
            condition={data.fetchStatus === VAL_LOADING}
        >
            <div className={s['container']}>
                <h2 className={s['title']}>Авторизация</h2>
                <WithValidationContext
                    state={validationState}
                    dispatch={dispatch}
                >
                    <form onSubmit={onSubmit}>
                        <div className={s['item']}>
                            <BaseInputWithValidators
                                inputTitle='Email'
                                validationItem={email}
                            />
                        </div>
                        <div className={s['item']}>
                            <BaseInputPassword
                                inputTitle='Пароль'
                                validationItem={password}
                            />
                        </div>
                        <PrimaryButton>
                            Войти
                        </PrimaryButton>
                    </form>
                    {fetchStatus === VAL_ERROR &&
                        <ErrorMessage>
                            {data.errorBody}
                        </ErrorMessage>
                    }
                </WithValidationContext>
            </div>
            <p className={s['text']}>Нужен аккаунт? <PrimaryLink to={`/${routes.auth}/${routes.reg}`}>Регистрация</PrimaryLink></p>
        </WithLoader>
    );
};

export default LogIn;