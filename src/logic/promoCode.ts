export function getPromoMessage(promoCode: string, showHelper: boolean): string {
  const code = promoCode.trim().toUpperCase();

  if (!code) return showHelper ? 'Try a code like SAVE10.' : '';
  if (code === 'SAVE10') return 'Code accepted.';
  return 'That code is not valid.';
}

export function isPromoCodeAccepted(promoCode: string): boolean {
  return promoCode.trim().toUpperCase() === 'SAVE10';
}
