import React from 'react'

/**
 * This is the page that will be shown when a user is not found.
 * It is a server component, so you can use async/await directly.
 * @returns 
 */
const UserNotFoundPage = () => {
  return (
    <div>
        <p>User has was not found with the ID provided.</p>
    </div>
  )
}

export default UserNotFoundPage;
