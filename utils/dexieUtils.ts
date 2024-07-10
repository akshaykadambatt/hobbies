import db, { UserData, MyDexieDB } from '../app/store/db';
import Dexie, { Table } from 'dexie';

export const getUser = async (id: string) => {
  const userData = await fetchData<UserData, string>('users', id);
  //if no hit, check mongodb and call set
  //get user from mongodb as well and if changes exist merge with dexie again
  return userData;
};

export const setUser = async (data: UserData) => {
  const userData = await createData<UserData, string>('users', data.id, data);
  //do in mongodb as well
  return userData;
};

//Getting and setting
//getOrganization
//getOrganizations
//setOrganization
//deleteOrganization
//getPages
//getPage
//setPage
//deletePage

//Quries
//search
//modifyUserSettings
//modifyOrganizationSettings
//modifyPageSettings


// Function to fetch data from a Dexie DB table
export const fetchData = async <T, K extends string | number>(tableName: keyof MyDexieDB, key: K) => {
  const table = db[tableName] as Table<T, K>;
  const storedData = await table.get(key);
  return storedData || null;
};

// Function to update data in a Dexie DB table
export const updateData = async <T, K extends string | number>(tableName: keyof MyDexieDB, key: K, data: T) => {
  const table = db[tableName] as Table<T, K>;
  try {
    await table.put(data, key);
    return true;
  } catch (error) {
    console.error('Error updating data:', error);
    return false;
  }
};

// Function to create a new record in a Dexie DB table
export const createData = async <T, K extends string | number>(tableName: keyof MyDexieDB, key: K, data: T) => {
  const table = db[tableName] as Table<T, K>;
  try {
    await table.put(data, key);
    
    return true;
  } catch (error) {
  // } catch (error: Error | unknown) {
    // console.log("ConstraintError", error);
    // if(error instanceof Error && error.name === "ConstraintError"){
    //   return false;
    // }
    console.error('Error creating data:', error);

    return false;
  }
};

// Function to delete a record from a Dexie DB table
export const deleteData = async <T, K extends string | number>(tableName: keyof MyDexieDB, key: K) => {
  const table = db[tableName] as Table<T, K>;
  try {
    await table.delete(key);
    return true;
  } catch (error) {
    console.error('Error deleting data:', error);
    return false;
  }
};
