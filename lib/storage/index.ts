import * as SQLite from 'expo-sqlite';
import { MMKVLoader } from '@react-native-mmkv/async';

const database = SQLite.openDatabase('diary.db');
const mmkv = new MMKVLoader().initialize();

database.transaction((tx) => {
  tx.executeSql('CREATE TABLE IF NOT EXISTS entries (id TEXT PRIMARY KEY NOT NULL, type TEXT, payload TEXT)');
});

export function saveEntry(id: string, type: string, payload: object) {
  database.transaction((tx) => {
    tx.executeSql('INSERT OR REPLACE INTO entries (id, type, payload) values (?, ?, ?)', [id, type, JSON.stringify(payload)]);
  });
}

export function getEntries(): Promise<{ id: string; type: string; payload: any }[]> {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM entries',
        [],
        (_, { rows }) => resolve(rows._array.map((row) => ({ ...row, payload: JSON.parse(row.payload) }))),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function setPreference(key: string, value: string) {
  return mmkv.setItem(key, value);
}

export async function getPreference(key: string) {
  return mmkv.getItem(key);
}
