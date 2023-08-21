import { useState } from "react";
import { SwitchItem } from "types/components/switch/switch";

export const useCreateSwitchFc = <T extends SwitchItem>(swithItems: T[]) => {
    const [switchItemsState, setNamesArr] = useState<SwitchItem[]>(swithItems)

    const changeFc = (switchName: string) => {
        const isRightName = swithItems.find(({ name }) => name === switchName)
        if (!isRightName) throw new Error('Wrong name')
        const result = swithItems.map((item) => {
            const newItem: SwitchItem = {
                ...item,
                isActive: item.name === switchName ? true : false
            }
            return newItem
        })
        setNamesArr(result)
    }
    return [switchItemsState, changeFc] as const
}