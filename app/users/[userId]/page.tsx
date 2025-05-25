import { notFound } from "next/navigation";
import { fetchUser } from "@/lib/userAPI";

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