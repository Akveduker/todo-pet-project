import { FC } from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
import s from './AppDatePicker.module.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppDatePicker: FC<ReactDatePickerProps<string, boolean>> = (props) => {
    return (
        <>
            <DatePicker
                wrapperClassName={s['picker']}
                {...props}
                dateFormat={'dd/MM/yyyy'}
            />
        </>
    );
};

export default AppDatePicker;