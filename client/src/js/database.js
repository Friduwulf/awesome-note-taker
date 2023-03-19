import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.error('putDb not implemented');
  console.log('PUT to db');
  const request = await openDB('jate', 1)
  .transaction('jate', 'readwrite')
  .objectStore('jate')
  .put({ id: id, text: content });
  const result = await request;
  console.log('Text saved to DB', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  console.log('getting db');
  const request = await openDB('jate', 1)
  .transaction('jate', 'readonly')
  .objectStore('jate')
  .getAll()
  const result = await request;
  return result;
};

initdb();