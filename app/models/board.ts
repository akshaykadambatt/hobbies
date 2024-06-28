import { Collection } from "./collection";
import { Page } from "./page";
import { User } from "./user";

export interface Board {
    id: string;
    name: string;
    color: string;
    pages: Page[];
    collections: Collection[];
    variables: string[];
    dashExpanded: boolean;
    public: boolean; //false by default, if true copy link to share
    createdAt: Date;
    updatedAt: Date;
    owner: string | User;
  }