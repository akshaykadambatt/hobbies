# Hobbies1

An app that lets you save your logs. A unique way of interacting with logging and viewing the history. Gain large contexts and insights of your logs using timeframes to view. Instantaneous loads and interactions on browser. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). This app uses Replicache to cache data locally. This app uses MongoDB Atlas database. The server functions are stored in Vercel serverless functions in Node.js.

## Getting Started

Goto the url [hobbies1](https://hobbies1.vercel.app/)  to access the live application. Create an account to start. Fully functional and free forever.

Run Locally, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Directory Structure

HOBBIES/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signup/
│   │   │   │   └── route.ts
│   │   │   └── login/
│   │   │       └── route.ts
│   │   ├── collections/
│   │   │   ├── [collectionId]/
│   │   │   │   ├── items/
│   │   │   │   │   ├── [itemId]/
│   │   │   │   │   │   └── route.ts
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   └── protected/
│   │       └── route.ts
│   ├── components/
│   │   ├── Layout.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── CollectionList.tsx
│   │   ├── CollectionDetails.tsx
│   │   ├── ItemList.tsx
│   │   ├── ItemDetails.tsx
│   │   └── ItemForm.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   └── mongodb.ts
│   ├── signup/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── collections/
│   │   ├── [collectionId]/
│   │   │   ├── page.tsx
│   │   │   ├── items/
│   │   │   │   ├── [itemId]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   └── page.tsx
│   └── layout.tsx
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
