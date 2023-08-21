import { FC, useState } from 'react';
import AppDatePicker from '../../../ui/datePicker/AppDatePicker/AppDatePicker';
import { RangePickerState } from 'types/ui/datePicker/datePicker';
import { useAppContext } from 'hooks/context/useAppContext';
import { useCreateInputValidationEvents } from 'hooks/inputValidation/useCreateInputValidationEvents/useCreateInputValidationEvents';
import { FormValidationSingleItemContext } from 'context/FormValidationSingleItemContext/FormSingleItemValidationContext';
import { addYears } from 'utils/helpers/date/addYears/addYears';
import { removeYears } from 'utils/helpers/date/removeYears/removeYears';
import { parseDateFromValue } from 'utils/helpers/date/parseDateFromValue/parseDateFromValue';
import CustomDatePickerInput from '../DatePickerInputForValidation/DatePickerInputForValidation';


const DatePickerWithValidationCtx: FC = () => {
    const { value, name } = useAppContext(FormValidationSingleItemContext)

    const [validateValue, setValue] = useCreateInputValidationEvents(name)

    const currentValue = parseDateFromValue(value)

    const [dateRange, setDateRange] = useState<RangePickerState>(currentValue);

    const [startDate, endDate] = dateRange

    return (
        <>
            <AppDatePicker
                startDate={startDate}
                endDate={endDate}
                maxDate={addYears(new Date(), 100)}
                minDate={removeYears(new Date(), 10)}
                onChange={(update) => {
                    const dateRange = update as RangePickerState
                    setDateRange(dateRange)
                    setValue(dateRange.join('-'))
                }}
                onCalendarClose={validateValue}
                selectsRange={true}
                customInput={
                    <CustomDatePickerInput />
                }
            />
        </>
    );
};

export default DatePickerWithValidationCtx;