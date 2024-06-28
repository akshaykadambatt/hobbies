import { Body } from "./body";
import { Label } from "./label";

export type Page = {
    id: string;
    name: string;
    color: string;
    labels: Label[];
    body: Body[];
    collection: string;
    createdAt: Date;
    updatedAt: Date;
};