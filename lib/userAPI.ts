// This function fetches user data from an API
// and returns the user object.
// You can replace the URL with your own API endpoint.

import { User } from "@/types/users";

// Note: This is a mock API, so the data may not be accurate.
export const fetchUser = async (userId: string): Promise<User | null> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    return data as User;
};