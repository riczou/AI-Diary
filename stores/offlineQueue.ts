import { create } from 'zustand';
import { saveEntry } from '@/lib/storage';

type QueueItem = { id: string; type: string; payload: any };

type OfflineQueueState = {
  pendingItems: QueueItem[];
  enqueue: (item: QueueItem) => void;
  clear: () => void;
};

export const useOfflineQueue = create<OfflineQueueState>((set) => ({
  pendingItems: [],
  enqueue: (item) => {
    saveEntry(item.id, item.type, item.payload);
    set((state) => ({ pendingItems: [...state.pendingItems, item] }));
  },
  clear: () => set({ pendingItems: [] }),
}));

export function queueOfflineItem(item: QueueItem) {
  useOfflineQueue.getState().enqueue(item);
}
