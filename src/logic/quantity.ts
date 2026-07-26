export function decrementQuantity(quantity: number, minimum = 1): number {
  return Math.max(minimum, quantity - 1);
}

export function incrementQuantity(quantity: number): number {
  return quantity + 1;
}
