import { Board } from "./board";
import { Label } from "./label";
import { OtherUser } from "./otheruser";

/*
  Dexie logic
  - In dexie only one main store is created: User
  - This user store has internal data that runs the application.
  - All the sync with the database is done through this store's changes.
  - If the user is not online, the changes are store to a queue store.
*/

export interface User {
    id: string;
    name: string;
    email: string;
    img: string;
    labels: Label[];
    boards: Board[];
    users: OtherUser[]; //friends, connected users
    color: string;
    createdAt: Date;
    updatedAt: Date;
  }
