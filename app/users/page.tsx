import UserList from "@/components/UsersList";

import { fetchAllUsersFromServer } from "@/lib/userAPI";
import { User } from "@/types/users";

/**
 * Note that this is a server component, so you can use async/await directly.
 * @returns 
 */
const UsersPage = async () => {
    
    // Note: This is a very common pattern in Next.js (App Directory).
    // Data is fetched in a server component and passed as props to a client component.
    // This leverages server-side data fetching and client-side interactivity.
    let users:User[] = [];
    try {
        users = await fetchAllUsersFromServer();
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
    
    return (
        <div style={{ padding: "2rem" }}>
            <UserList users={users} />
        </div>
    )
}

export default UsersPage;
