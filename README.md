# NextJS-Course
## NextJS Caching (App Directory)

Next.js provides powerful caching mechanisms in the app directory to optimize performance, reduce server load, and improve user experience. Here’s what you need to know:

### 1. Data Fetching and Caching

- **Server Components**: By default, data fetched in Server Components is cached and reused across requests, unless you opt out.
- **`fetch` Caching**: The built-in `fetch` API in the app directory supports caching options via the `cache` and `next` options:
    - `cache: 'force-cache'` (default): Caches the response indefinitely until the deployment is invalidated.
    - `cache: 'no-store'`: Disables caching; fetches fresh data on every request.
    - `next: { revalidate: seconds }`: Enables Incremental Static Regeneration (ISR), revalidating the cache after the specified number of seconds.

    ```js
    // Example: ISR with 60 seconds revalidation
    export default async function Page() {
        const res = await fetch('https://api.example.com/data', {
            next: { revalidate: 60 }
        });
        const data = await res.json();
        // ...
    }
    ```

### 2. Route Segment Caching

- Each route segment in the app directory can have its own caching and revalidation strategy.
- You can use the `revalidate` export in a route or layout to control how often the content is regenerated.

    ```js
    // app/page.js
    export const revalidate = 300; // Revalidate every 5 minutes
    ```

### 3. Static and Dynamic Rendering

- **Static Rendering**: Pages and components without dynamic data are statically generated and cached at build time.
- **Dynamic Rendering**: Use `cache: 'no-store'` or dynamic route parameters to opt out of static caching and always render on the server.

### 4. On-Demand Revalidation

- You can trigger cache revalidation manually using the [On-Demand Revalidation API](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating#on-demand-revalidation), useful for updating content after CMS changes or webhooks.

### 5. HTTP Caching Headers

- Next.js automatically sets HTTP caching headers for statically generated assets.
- You can customize headers using the `headers` config in `next.config.js` for advanced scenarios.

### 6. Client Components

- Client Components do not have built-in caching for data fetching; you should use client-side state management or libraries like SWR or React Query for caching on the client.

### 7. Best Practices

- Prefer static or ISR caching for public, non-user-specific data.
- Use `no-store` for user-specific or frequently changing data.
- Use revalidation to balance freshness and performance.
- Avoid sensitive data in cached responses.

**References:**
- [Next.js Data Fetching and Caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching)
- [Incremental Static Regeneration (ISR)](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)

## Other stuff
- metadata can only be done in server components not client components
### 8. Server Actions in Next.js (App Router)

- **Server Actions** are asynchronous functions that run on the server and can be invoked directly from Client Components or forms in the app directory.
- They enable secure data mutations (like creating, updating, or deleting data) without exposing sensitive logic to the client.
- Server Actions are defined using the `async` keyword and must be exported from Server Components or route handlers.

    ```js
    // app/actions.js
    'use server';

    export async function createPost(formData) {
      // Perform server-side logic, e.g., database write
    }
    ```

- You can call Server Actions from forms using the `action` prop or directly from Client Components with the `useTransition` or `useOptimistic` hooks.

    ```jsx
    // app/page.js (Client Component)
    import { createPost } from './actions';

    export default function Page() {
      return (
        <form action={createPost}>
          <input name="title" />
          <button type="submit">Create Post</button>
        </form>
      );
    }
    ```

- **Benefits:**
  - Simplifies data mutations by keeping logic on the server.
  - Reduces API boilerplate and improves security.
  - Integrates seamlessly with React Server Components and the App Router.

**References:**
- [Next.js Server Actions Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)

---

## 📚 Next.js App Directory: Top-Level Features for Beginners

If you're just starting with the Next.js App Directory, here are the most important features to know:

1. **File-Based Routing**
   - Pages and layouts are created by adding files and folders inside the `app` directory.
   - Nested folders = nested routes.

2. **Server and Client Components**
   - By default, components are Server Components (run on the server).
   - Use `'use client'` at the top of a file to make it a Client Component.

3. **Data Fetching**
   - Fetch data directly in Server Components using async/await.
   - Built-in support for caching, ISR, and SSR with `fetch` options.

4. **Layouts and Templates**
   - `layout.js` files define persistent layouts for route segments.
   - `template.js` files create new instances per navigation.

5. **Loading and Error UI**
   - `loading.js` for loading states.
   - `error.js` for error boundaries at any route level.

6. **Metadata**
   - Export `metadata` in Server Components to set page titles, descriptions, and Open Graph tags.

7. **API Routes (Route Handlers)**
   - Create API endpoints using `route.js` files inside the `app` directory.

8. **Server Actions**
   - Mutate data securely on the server, directly from forms or Client Components.

9. **Static and Dynamic Rendering**
   - Choose between static, dynamic, or incremental rendering per route or fetch.

10. **Built-in Caching and Revalidation**
    - Control caching with `fetch` options and `revalidate` exports.

11. **Parallel and Intercepting Routes**
    - Advanced routing patterns for complex layouts and modals.

12. **TypeScript Support**
    - First-class TypeScript support out of the box.

13. **Built-in CSS and CSS Modules**
    - Import CSS files or use CSS Modules for scoped styles.

14. **Image and Font Optimization**
    - Use the `next/image` and `next/font` components for performance.

15. **Environment Variables**
    - Use `.env.local` for secrets and configuration.

**Learn more:**  
- [Next.js App Directory Documentation](https://nextjs.org/docs/app)
- [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
- [Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Layouts and Templates](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

---

