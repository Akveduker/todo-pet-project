import { TaskDate } from "types/task/task";
import { RangePickerState } from "types/ui/datePicker/datePicker";

export type DatePickerContextType = {
    value: TaskDate;
    setPickerState: React.Dispatch<React.SetStateAction<TaskDate>>
} | null