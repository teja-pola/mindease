import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { nanoid } from 'nanoid';
import prisma from '@/db/db';
import { auth } from '@/auth';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateUsername = async (email: string) => {
  let username = email.split('@').at(0);
  const count = await prisma.user.count({ where: { email } });
  if (count > 0) {
    return (username += nanoid(5));
  }
  return username;
};

export const getSessionUser = async () => {
  const session = await auth();
  const user = session?.user;
  return user;
};

export const convertDate = (
  dateString: Date,
  formatString: string = 'dd MMMM'
): string => {
  return format(new Date(dateString), formatString);
};

export const toSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, '-') // to replace spaces with dashes
    .replace(/[^\w-]+/g, ''); // to replace multiple spaces with a single space
};
