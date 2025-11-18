import { create } from 'zustand';
import { atom } from 'jotai';

type UserState = {
  userId?: string;
  hasCompletedOnboarding: boolean;
  trialEndsAt?: string;
  completeOnboarding: () => void;
  setTrialEnd: (date: string) => void;
};

export const useUserState = create<UserState>((set) => ({
  userId: undefined,
  hasCompletedOnboarding: false,
  trialEndsAt: undefined,
  completeOnboarding: () => set({ hasCompletedOnboarding: true }),
  setTrialEnd: (date) => set({ trialEndsAt: date }),
}));

export const trialActiveAtom = atom((get) => {
  const trialEndsAt = getTrialDate(get);
  if (!trialEndsAt) return true;
  return new Date(trialEndsAt) > new Date();
});

function getTrialDate(get: (atom: any) => any) {
  try {
    return get({
      toString: () => 'userStore.trialEndsAt',
      read: () => useUserState.getState().trialEndsAt,
    } as any);
  } catch {
    return useUserState.getState().trialEndsAt;
  }
}
