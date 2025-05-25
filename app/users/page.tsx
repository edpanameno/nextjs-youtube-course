import UserList from "@/components/UsersList";

/**
 * Note that this is a server component, so you can use async/await directly.
 * @returns 
 */
const UsersPage = async () => {
    
    // Note: This is a very common pattern in Next.js (App Directory).
    // Data is fetched in a server component and passed as props to a client component.
    // This leverages server-side data fetching and client-side interactivity.
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-cache',  // Disable caching for this request
    });
   
    const users = await response.json();
    
    return (
        <div style={{ padding: "2rem" }}>
            <UserList users={users} />
        </div>
    )
}

export default UsersPage;
