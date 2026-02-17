import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  amount: number | string | null | undefined,
  options: {
    currency?: string;          // por defecto "$"
    decimals?: number;          // 0 o 2 normalmente
    showSymbol?: boolean;       // mostrar $ o no
    locale?: string;            // 'es-AR' por defecto
  } = {}
): string {
  const {
    currency = '$',
    decimals = 0,
    showSymbol = true,
    locale = 'es-AR',
  } = options;

  // Normalizamos el valor
  const numericAmount = typeof amount === 'string' 
    ? parseFloat(amount.replace(/[^0-9.-]+/g, '')) 
    : Number(amount) || 0;

  if (isNaN(numericAmount)) return showSymbol ? '$0' : '0';

  const formatter = new Intl.NumberFormat(locale, {
    style: 'decimal',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  const formatted = formatter.format(numericAmount);

  return showSymbol ? `${currency}${formatted}` : formatted;
}