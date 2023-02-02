// viewed
import localForage from "localforage";
import storage from "redux-persist/lib/storage";

/**
 * Persist you redux state using IndexedDB
 */
function IndexedDBStorage(dbName: string) {
  if (typeof window !== "undefined") {
    const db = localForage.createInstance({
      name: dbName,
    });
    return {
      db,
      getItem: db.getItem,
      setItem: db.setItem,
      removeItem: db.removeItem,
    };
  }
  return storage;
}
export default IndexedDBStorage;
