export interface Content {
  type: string;
  /*
     checkbox, timer, number, text, date, 
     link, icon, title, subtitle, code, 
     table, list, graph, map, variable
    */
  value: string;
  active: boolean;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
}; //This is a row of body content.
