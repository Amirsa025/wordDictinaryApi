import {Path, UseFormRegister} from "react-hook-form";

export interface IFormValues {
    "search": string;
}
export type InputProps = {
    register: UseFormRegister<IFormValues>;
    required: boolean   ;
    search: Path<IFormValues>;
};
