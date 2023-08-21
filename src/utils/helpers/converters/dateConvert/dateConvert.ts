import dateFormat from "dateformat"
import { useState } from "react"
import { TaskDate } from "types/task/task"
import { APP_DATE_FORMAT } from "utils/constants/appDateFormate/appDateFormat"

export const dateConvert = (str: string): TaskDate => {
    const [firstDate, secondDate] = str.split('-')
    return [dateFormat(firstDate, APP_DATE_FORMAT), secondDate ? dateFormat(secondDate, APP_DATE_FORMAT) : null]
}