import { FC } from 'react';
import DatePickerWithValidationCtx from '../DatePickerWithValidationCtx/DatePickerWithValidationCtx';
import { WithValidationContext } from 'types/input/baseInput/baseInput';
import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';
import WithTitleForInputs from '@components/Providers/WithTitleForInputs/WithTitleForInputs';

const DatePickerWithTitle: FC<Pick<WithValidationContext, 'validationItem'>> = ({ validationItem }) => {
    return (
        <>
            <FormValidationSingleItemContext.Provider
                value={validationItem}
            >
                <WithTitleForInputs
                    title='Выберете дату'
                >
                    <DatePickerWithValidationCtx
                    />
                </WithTitleForInputs>

            </FormValidationSingleItemContext.Provider>
        </>
    );
};

export default DatePickerWithTitle;