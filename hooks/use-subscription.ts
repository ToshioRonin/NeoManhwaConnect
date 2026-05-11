import { useSubscriptionStore, hasPremiumAccess, hasProAccess } from '../stores/subscription-store';

export const useSubscription = () => {
  const {
    plans,
    currentSubscription,
    coinBalance,
    transactions,
    isLoading,
    error,
    fetchPlans,
    fetchSubscription,
    fetchCoinBalance,
    fetchTransactions,
    subscribe,
    cancelSubscription,
    buyCoins,
    unlockChapter,
    clearError,
  } = useSubscriptionStore();

  return {
    plans,
    currentSubscription,
    coinBalance,
    transactions,
    isLoading,
    error,
    fetchPlans,
    fetchSubscription,
    fetchCoinBalance,
    fetchTransactions,
    subscribe,
    cancelSubscription,
    buyCoins,
    unlockChapter,
    clearError,
    hasPremiumAccess: () => hasPremiumAccess(currentSubscription),
    hasProAccess: () => hasProAccess(currentSubscription),
    isFree: () => !currentSubscription,
  };
};

export const useCoins = () => {
  const { coinBalance, fetchCoinBalance, buyCoins, isLoading, error } = useSubscriptionStore();
  return { coinBalance, fetchCoinBalance, buyCoins, isLoading, error };
};