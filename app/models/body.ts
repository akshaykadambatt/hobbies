import { Content } from "./content";

export interface Body {
    id: string;
    name: string;
    content: Content[]; //cells
    calendarView: boolean;
    calendarSize: string; //compact, wide, full, with summary (graph)
    showGraph: boolean; 
    /*
      If content list has first item checkboxes, show summary
      If content list has first item number, show total
      If content list has first item number & calendar view, show timeline graph
      If content list has first item checkboxes & calendar view, show squares
      */
    createdAt: Date;
    updatedAt: Date;
  }