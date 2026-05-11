import api from './api';
import type { Plan, Subscription, CoinBalance, CoinTransaction, CoinPackage } from '../types/subscription';

export const subscriptionService = {
  getPlans: async (): Promise<Plan[]> => {
    const response = await api.get('/subscription/plans');
    return response.data;
  },

  getMySubscription: async (): Promise<Subscription | null> => {
    const response = await api.get('/subscription/me');
    return response.data;
  },

  subscribe: async (planId: string, billingCycle: string): Promise<Subscription> => {
    const response = await api.post('/subscription/subscribe', { planId, billingCycle });
    return response.data;
  },

  cancelSubscription: async (): Promise<void> => {
    await api.delete('/subscription/cancel');
  },

  getCoinBalance: async (): Promise<CoinBalance> => {
    const response = await api.get('/subscription/coins/balance');
    return response.data;
  },

  getCoinPackages: async (): Promise<CoinPackage[]> => {
    const response = await api.get('/subscription/coins/packages');
    return response.data;
  },

  buyCoins: async (packageId: string): Promise<{ transactionId: string }> => {
    const response = await api.post('/subscription/coins/buy', { packageId });
    return response.data;
  },

  unlockChapter: async (chapterId: string): Promise<void> => {
    await api.post(`/subscription/coins/unlock/${chapterId}`);
  },

  getTransactionHistory: async (page = 1, limit = 20): Promise<CoinTransaction[]> => {
    const response = await api.get('/subscription/coins/history', { params: { page, limit } });
    return response.data;
  },
};