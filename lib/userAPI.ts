/**
 * This file contains functions to fetch user data from a mock API.
 */

import { User } from "@/types/users";

// Ensure this function is only used in server components or server-side code.
// Do not import or call this function from client components.
export const fetchAllUsersFromServer = async (): Promise<User[]> => {
    console.log('Fetching users from server...');
    
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