# Lama Dev School Management Dashboard

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Lama Dev Youtube Channel](https://youtube.com/lamadev) 
- [Next.js](https://nextjs.org/learn)

using the liberary Recharts 
https://recharts.org/en-US/examples  -- npm install recharts

completed the design of the dashboard

rename my repo and update the remote version name

to reset the database using prisma
1- edit the schema.prisma
2- in terminal use the command npx prisma db push --force-reset
3- use the seed again by the command npx prisma db seed
4- open the studio by the command npx prisma studio -> navigate to the link localhost 5555

##for the updated code along 
link : https://www.youtube.com/watch?v=6sfiAyKy8Jo&t=4682s
3 April: 2:00:00 - 2:06-11

user authentication using clerk
version 5.4.1
clerk elements Beta
npm install @clerk/elements@0.14.6

4 April 2:31:00 - protecting routes
4 April 2:31- using createRouteMatcher()

5 april - the user role is dynamic according to the login role coming from publicmetadata
5 april - 2:44
10 April - role conditions and data fetching 2.58.00 Announcements