import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformLanguageAbbrevation = (abbreviation: string) => {
  switch (abbreviation) {
    case 'en':
      return 'English';
    case 'de':
      return 'Deutsch';
    case 'ar':
      return 'عربي';
    case 'tr':
      return 'Türkçe';
    case 'fa':
      return 'فارسی';

    default:
      break;
  }
};

export const combinedArr = (arr1: any, arr2: any) => {
  const combinedData = [];

  for (let i = 0; i < arr1.length; i++) {
    combinedData.push({ ...arr1[i], ...arr2[i] });
  }

  return combinedData;
};

export enum Role {
  ADMIN = 1,
  VIEWER = 2,
  CLEANER = 3,
  RISK_MANAGER = 4,
}
