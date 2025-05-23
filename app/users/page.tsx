/**
 * Note that this is a server component, so you can use async/await directly.
 * @returns 
 */
const UsersPage = async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return (
        <>
            <div>Welcome to the users page</div>
            <div>
                {users.map((user: { id: number; name: string; }) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </div>
        </>
    )
}

export default UsersPage;
