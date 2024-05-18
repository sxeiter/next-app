import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode;
    apperance: "primary" | "ghost";
    arrow?: 'right' | 'down' | 'none';
}