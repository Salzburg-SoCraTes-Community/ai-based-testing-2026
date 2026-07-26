import { type Badge, getBadgeMultiplier } from './badge';
import { isPromoCodeAccepted } from './promoCode';

export function calculatePrice(options: {
  basePrice: number;
  quantity: number;
  promoCode: string;
  badge: Badge;
}): number {
  const promoMultiplier = isPromoCodeAccepted(options.promoCode) ? 0.9 : 1;
  const badgeMultiplier = getBadgeMultiplier(options.badge);

  return Math.round(options.basePrice * options.quantity * promoMultiplier * badgeMultiplier * 100) / 100;
}
