import { notFound } from "next/navigation";

/**
 * Note that this is a server component, so you can use async/await directly.
 * @returns 
 */
const UserPage = async ({ params }: {params: Promise<{ userId: string }>}) => {

    // You can use params.userId here if needed
    const {userId}  = await params;
    const user = await fetchUser(userId);

    if(!user){
        notFound();
    }

    return (
        <>
            <div>User page for {user.name}</div>
            <div>
                {user.email} - {user.phone}
            </div>
        </>
    )
}

export default UserPage;

// This function fetches user data from an API
// and returns the user object.
// You can replace the URL with your own API endpoint.
// Note: This is a mock API, so the data may not be accurate.
const fetchUser = async (userId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        return null;
    }
    return response.json();
};
