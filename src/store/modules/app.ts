import { defineStore } from 'pinia';
import { store } from '@/store';

export interface AppStore {
  APP_ID: string;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppStore => ({
    APP_ID: 'wx8d64466dcb6b3334'
  }),
  getters: {
  },
  actions: {
   
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}


