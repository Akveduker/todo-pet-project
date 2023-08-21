import React, { ReactNode } from "react";

export interface DropdownProps {
    header: ReactNode;
    body: ReactNode;
    bodyClassname?: string;
    headerClassname?: string;
    containerClassname?: string;
}