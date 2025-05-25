'use client';

import { User } from "@/types/users";
import Link from "next/link";

export type UserListProps = {
  users: User[]
}

const UserList = ({ users }: UserListProps) => {
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Users List</h2>
        <ul className="list-disc pl-5">
            {users.map((user) => (
            <li key={user.id} className="mb-2">
              <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
                <span className="font-semibold">{user.name}</span>
              </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList;