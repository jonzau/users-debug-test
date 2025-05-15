import { type User } from "../types/user";

export const fetchRandomUser = async (): Promise<User> => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  return { ...user, userID: crypto.randomUUID() };
};
