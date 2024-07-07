import { User } from "./user";

export interface Collection {
    id: string;
    name: string;
    description?: string;
    view: string; 
    /* 
      compact, headings only, cards, big cards, list, 
      */
    expand: string;
    /* 
      expand some, expand all (shows links as icons or shows everything in all pages)
      */
    createdAt: Date;
    updatedAt: Date;
    owner: string | User;
}