export type Badge = 'early bird' | 'standard' | 'sold out';

export function getBadgeClassName(badge: Badge): string {
  return `badge-${badge.replace(' ', '-')}`;
}

export function getBadgeMultiplier(badge: Badge): number {
  if (badge === 'early bird') return 0.85;
  if (badge === 'sold out') return 0.01;
  return 1;
}
