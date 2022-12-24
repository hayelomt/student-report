import { BrowserStorage } from './browser-storage';
import { StorageLocalImpl } from './storage-local-impl';

export class StorageFactory {
  private static storage: StorageLocalImpl | null = null;

  private constructor() {}

  static getInstance(): BrowserStorage {
    if (StorageFactory.storage === null) {
      StorageFactory.storage = new StorageLocalImpl();
    }

    return StorageFactory.storage;
  }
}
