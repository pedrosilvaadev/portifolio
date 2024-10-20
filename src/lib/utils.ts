import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedPhoneNumber = (phoneNumber: string) => {
  const input = phoneNumber.replace(/\D/g, ""); // Remove all non-digit characters
  let formattedPhone = input;

  if (input.length > 10) {
    // Format for mobile (XX) XXXXX-XXXX
    formattedPhone = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(
      7,
      11
    )}`;
  } else if (input.length > 6) {
    // Format for landline (XX) XXXX-XXXX
    formattedPhone = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(
      6,
      10
    )}`;
  } else if (input.length > 2) {
    // Format partial (XX) XXXX
    formattedPhone = `(${input.slice(0, 2)}) ${input.slice(2)}`;
  } else if (input.length > 0) {
    // Format partial (XX
    formattedPhone = `(${input}`;
  }

  return formattedPhone;
};
