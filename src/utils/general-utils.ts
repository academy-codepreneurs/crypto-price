export function decimateArray<T>(arr: T[], n = 2): T[] {
  if (n <= 1) {
    throw new Error("Invalid decimation factor. It should be greater than 1.");
  }

  return arr.filter((_, index) => (index + 1) % n !== 0);
}

export function formatAsCurrency(amount: number, currencyCode = "usd"): string {
  const formatter = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
  });

  return formatter.format(amount);
}

const COLOR_PALETTE = ["green", "blue", "red", "yellow", "orange", "purple"];

export function getRandomColor(): string {
  return COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
}
