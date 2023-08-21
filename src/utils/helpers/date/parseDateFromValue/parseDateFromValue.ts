import { RangePickerState } from "types/ui/datePicker/datePicker"

export const parseDateFromValue = (str: string): RangePickerState => {
    const [firstDate, secondDate] = str.split('-')
    if (!firstDate) return [null, null]
    if (!secondDate) return [new Date(firstDate), null]
    return [new Date(firstDate), new Date(secondDate)]
}