import { useState, useEffect } from "react";
import db, { UserData, MyDexieDB } from "../app/store/db"; // Assuming you have a 'db.ts' file with the Dexie DB instance
import { Table } from "dexie";

export const useDexieDB = <T>(
  tableName: keyof MyDexieDB,
  key: string | number
) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const table = db[tableName] as Table<T, any>;
      const storedData = await table.get(key);
      setData(storedData || null);
      console.log("useDexieDB", tableName, key, storedData);
    };
    loadData();
  }, [tableName, key]);

  return data;
};
