import {MONTH, TAX, MAX_TAX_FREE} from "./const";

export const getTaxFree = (item: string): number => {
  return Math.floor((Number(item) * MONTH) * TAX)
}

export const getAllTaxes = (item: string) => {
  let taxes = [];
  let maxTaxFree = MAX_TAX_FREE;
  const tax = getTaxFree(item)

  while (maxTaxFree > 0) {
    if (maxTaxFree > 0 && maxTaxFree < tax) {
      taxes.push(maxTaxFree);
      maxTaxFree = 0;
    } else {
      taxes.push(tax);
      maxTaxFree = maxTaxFree - tax;
    }
  }
  return taxes;
}

export const getEnding = (item: number): string => {
  let ending = `ый`;
  if (item === 3) {
    ending = `ий`;
  } else if (item === 2 || item === 6 || item === 7 || item === 8) {
    ending = `ой`
  }
  return ending;
}
