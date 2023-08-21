import Dropdown from '@components/Dropdown/Dropdown';
import WithColorPickerAndValCtx from '@components/Providers/WithColorPickerAndValCtx/WithColorPickerAndValCtx';
import s from './ChooseColorForGroup.module.scss'
import { FC } from 'react';
import { WithValidationContext } from 'types/input/baseInput/baseInput';
import PrimaryButtonWithValCtx from 'ui/buttons/PrimaryButtonWithValCtx/PrimaryButtonWithValCtx';
import ErrorMessage from 'ui/helpers/ErrorMessage/ErrorMessage';
import { VAL_ERROR } from 'utils/constants/validationTypes/validationTypes';
import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';

const ChooseColorForGroup: FC<Pick<WithValidationContext, 'validationItem'>> = ({ validationItem }) => {
    const { validation } = validationItem
    return (
        <div>
            <FormValidationSingleItemContext.Provider
                value={validationItem}
            >
                <Dropdown
                    header={
                        <PrimaryButtonWithValCtx
                            type={'button'}
                        >
                            Выбрать цвет
                        </PrimaryButtonWithValCtx>
                    }
                    body={
                        <div className={s['picker']}>
                            <WithColorPickerAndValCtx
                            />
                        </div>
                    }
                />
                {validation.validationType === VAL_ERROR &&
                    <ErrorMessage>
                        {validation.errorMessage}
                    </ErrorMessage>
                }
            </FormValidationSingleItemContext.Provider>
        </div>
    );
};

export default ChooseColorForGroup;