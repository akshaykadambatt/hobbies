import { Page } from "./page";

export interface OtherUser {
  id: string;
  name: string;
  email: string;
  img: string;
  pages: Page[];
  color: string;
  createdAt: Date;
  updatedAt: Date;
};

