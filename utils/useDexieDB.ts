import { useState, useEffect } from "react";
import db, { UserData, MyDexieDB } from "../app/store/db"; // Assuming you have a 'db.ts' file with the Dexie DB instance
import { Table } from "dexie";

export const useGetDexieDB = <T>(
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

export const useSetDexieDB = <T>(
    tableName: keyof MyDexieDB,
    payload: any
  ) => {
    const [data, setData] = useState<T | null>(null);
  
    useEffect(() => {
      const loadData = async () => {
        const table = db[tableName] as Table;
        const storedData = await table.put(payload);
        setData(storedData || null);
        console.log("useDexieDB", tableName, payload, storedData);
      };
      loadData();
    }, [tableName, payload]);
  
    return data;
  };
  