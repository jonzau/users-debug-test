import { type User } from "../types/user";
import { generateRandomUserFakeApiResponse } from "./mockApi";

const fetchUserApiUrl = "https://randomuser.me/api/";

let isUseMock = false;

const fetchRandomUser = async() => isUseMock ? generateRandomUserFakeApiResponse() : fetch(fetchUserApiUrl).catch(() => {
    console.log(`Error fetching random user from ${fetchUserApiUrl}. Using mock API instead.`);
    isUseMock = true;
    return generateRandomUserFakeApiResponse();
  });

export const fetchUser = async (): Promise<User> => {
  const response = await fetchRandomUser();
  const data = await response.json();
  const user = data.results[0];
  return { ...user, userID: crypto.randomUUID() };
};
