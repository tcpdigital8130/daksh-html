// Utility to store and retrieve user-uploaded gallery images in IndexedDB
const DB_NAME = 'daksh_gallery_db';
const STORE_NAME = 'photos';

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveImageToStore = async (filename: string, dataUrl: string): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(dataUrl, filename);
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
    // Trigger custom event so all gallery components re-render
    window.dispatchEvent(new CustomEvent('daksh_image_updated', { detail: { filename } }));
  } catch (err) {
    console.warn('Failed to save image to IndexedDB:', err);
  }
};

export const removeImageFromStore = async (filename: string): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(filename);
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
    window.dispatchEvent(new CustomEvent('daksh_image_updated', { detail: { filename } }));
  } catch (err) {
    console.warn('Failed to remove image from IndexedDB:', err);
  }
};

export const clearAllStoredImages = async (): Promise<void> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.clear();
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = reject;
    });
    window.dispatchEvent(new CustomEvent('daksh_image_updated', { detail: { filename: 'all' } }));
  } catch (err) {
    console.warn('Failed to clear images from IndexedDB:', err);
  }
};

export const getImageFromStore = async (filename: string): Promise<string | null> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(filename);
    return new Promise((resolve) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
};

export const getAllStoredImages = async (): Promise<Record<string, string>> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const map: Record<string, string> = {};
    return new Promise((resolve) => {
      const cursorReq = store.openCursor();
      cursorReq.onsuccess = (e) => {
        const cursor = (e.target as IDBRequest<IDBCursorWithValue>).result;
        if (cursor) {
          map[cursor.key as string] = cursor.value;
          cursor.continue();
        } else {
          resolve(map);
        }
      };
      cursorReq.onerror = () => resolve({});
    });
  } catch {
    return {};
  }
};
