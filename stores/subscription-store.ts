import { create } from 'zustand';
import type { Plan, Subscription, CoinBalance, CoinTransaction } from '../types/subscription';
import { subscriptionService } from '../services/subscription-service';

interface SubscriptionState {
  plans: Plan[];
  currentSubscription: Subscription | null;
  coinBalance: CoinBalance | null;
  transactions: CoinTransaction[];
  
  isLoading: boolean;
  error: string | null;

  fetchPlans: () => Promise<void>;
  fetchSubscription: () => Promise<void>;
  fetchCoinBalance: () => Promise<void>;
  fetchTransactions: () => Promise<void>;
  subscribe: (planId: string, billingCycle: string) => Promise<void>;
  cancelSubscription: () => Promise<void>;
  buyCoins: (packageId: string) => Promise<void>;
  unlockChapter: (chapterId: string) => Promise<void>;
  clearError: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>()((set) => ({
  plans: [],
  currentSubscription: null,
  coinBalance: null,
  transactions: [],
  isLoading: false,
  error: null,

  fetchPlans: async () => {
    try {
      const plans = await subscriptionService.getPlans();
      set({ plans });
    } catch (error) {
      console.error('Error fetching plans:', error);
    }
  },

  fetchSubscription: async () => {
    set({ isLoading: true });
    try {
      const subscription = await subscriptionService.getMySubscription();
      set({ currentSubscription: subscription, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cargar suscripción',
        isLoading: false,
      });
    }
  },

  fetchCoinBalance: async () => {
    try {
      const balance = await subscriptionService.getCoinBalance();
      set({ coinBalance: balance });
    } catch (error) {
      console.error('Error fetching coin balance:', error);
    }
  },

  fetchTransactions: async () => {
    try {
      const transactions = await subscriptionService.getTransactionHistory();
      set({ transactions });
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  },

  subscribe: async (planId, billingCycle) => {
    set({ isLoading: true, error: null });
    try {
      const subscription = await subscriptionService.subscribe(planId, billingCycle);
      set({ currentSubscription: subscription, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al suscribirse',
        isLoading: false,
      });
      throw error;
    }
  },

  cancelSubscription: async () => {
    set({ isLoading: true, error: null });
    try {
      await subscriptionService.cancelSubscription();
      set({ currentSubscription: null, isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al cancelar suscripción',
        isLoading: false,
      });
      throw error;
    }
  },

  buyCoins: async (packageId) => {
    set({ isLoading: true, error: null });
    try {
      await subscriptionService.buyCoins(packageId);
      await subscriptionService.getCoinBalance().then((balance) => {
        set({ coinBalance: balance });
      });
      set({ isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al comprar monedas',
        isLoading: false,
      });
      throw error;
    }
  },

  unlockChapter: async (chapterId) => {
    set({ isLoading: true, error: null });
    try {
      await subscriptionService.unlockChapter(chapterId);
      set({ isLoading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Error al desbloquear capítulo',
        isLoading: false,
      });
      throw error;
    }
  },

  clearError: () => set({ error: null }),
}));

export const hasPremiumAccess = (subscription: Subscription | null): boolean => {
  if (!subscription || !subscription.isActive) return false;
  return ['FAN', 'PRO'].includes(subscription.plan.type);
};

export const hasProAccess = (subscription: Subscription | null): boolean => {
  if (!subscription) return false;
  return subscription.isActive && subscription.plan.type === 'PRO';
};