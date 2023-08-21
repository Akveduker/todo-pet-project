import { TaskDate } from "types/task/task";

export const dateInToString = (dates: TaskDate) => {
    const date = dates[1] ? `${dates[0]} - ${dates[1]}` : dates[0]
    return date
}