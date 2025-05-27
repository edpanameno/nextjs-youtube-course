/**
 * This file contains functions to fetch user data from a mock API.
 */

import { User } from "@/types/users";

// Ensure this function is only used in server components or server-side code.
// Do not import or call this function from client components.
/**
 * Fetches all users from the remote server.
 *
 * This function retrieves a list of users from the specified API endpoint.
 * It leverages Next.js's `revalidate` option to ensure that the data is
 * automatically refreshed every 60 seconds, keeping the information up-to-date
 * without requiring a manual page refresh. This is especially useful in server
 * components where fresh data is critical.
 *
 * @remarks
 * - Throws an error if the network request fails or the response is not OK.
 * - The returned data is cast to the `User[]` type.
 *
 * @returns A promise that resolves to an array of `User` objects.
 *
 * @throws {Error} If the fetch operation fails or returns a non-OK response.
 *
 * @example
 * ```typescript
 * const users = await fetchAllUsersFromServer();
 * console.log(users);
 * ```
 */
export const fetchAllUsersFromServer = async (): Promise<User[]> => {
    console.log('Fetching users from server...');
   
    // Note that I am using the `next` option to specify revalidation.
    // This is a feature of Next.js that allows you to revalidate the data 
    // at a specified interval, which is useful for keeping the data fresh.
    // This is particularly useful in server components where you want to fetch data
    // from an API and ensure that the data is up-to-date without having to
    // manually refresh the page.
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: {
            revalidate: 60, // Revalidate every 60 seconds
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    return data as User[];
};

// Note: This is a mock API, so the data may not be accurate.
export const fetchUser = async (userId: string): Promise<User | null> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        return null;
    }
    const data = await response.json();
    return data as User;
};