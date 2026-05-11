export type PlanType = 'FREE' | 'STANDARD' | 'FAN' | 'PRO';

export type BillingCycle = 'WEEKLY' | 'MONTHLY' | 'ANNUAL';

export interface Plan {
  id: string;
  type: PlanType;
  name: string;
  description: string;
  price: number;
  billingCycle: BillingCycle;
  features: string[];
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  plan: Plan;
  startDate: string;
  endDate: string;
  isActive: boolean;
  autoRenew: boolean;
}

export interface CoinBalance {
  userId: string;
  balance: number;
}

export interface CoinTransaction {
  id: string;
  userId: string;
  type: 'PURCHASE' | 'SPEND' | 'REFUND';
  amount: number;
  description: string;
  chapterId?: string;
  createdAt: string;
}

export interface CoinPackage {
  id: string;
  name: string;
  coins: number;
  price: number;
  bonusCoins?: number;
}