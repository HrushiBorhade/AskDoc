# [AskDoc 🚀](https://askdoc-ai.vercel.app/)

> # <p align="center"> Ask Questions and Chat with your Pdf Documents. </p>







https://github.com/HrushiBorhade/AskDoc/assets/89704093/330fca34-e2e7-4bd2-b495-74bcfb50739c



<img width="1420" alt="Screenshot 2023-10-27 at 7 11 14 PM" src="https://github.com/HrushiBorhade/AskDoc/assets/89704093/a0823b12-7919-43d8-8b82-81c67ebb3126">

## Tech stack

> ### 🛠️ Nextjs 13 | Typescript | tRPC (T3 Stack)
>
> ### 🤖 Langchain | Pinecone | OpenAI
>
> ### ✦ Postgresql | Prisma
>
> ### 👨🏻‍💻 React-query | Zod | UploadThing

## Features

> ### ✨ End-to-End type safety , scalable and Modular Code
>
> ### ✨ Context aware ai response with semantic query/search.
>
> ### ✨ Intuitive Drag n Drop uploads
>
> ### ✨ Infinite querying for message fetching
>
> ### ✨ Real time message streaming & Optimistic updates
>
> ### ✨ Interactive and functional PDF viewer
>
> ### ✨ Feedback error and success toast notifications

> # <p >Get Started🔥.</p>

### <p align="center"><img width="1357" alt="thumbnail2" src="https://github.com/HrushiBorhade/AskDoc/assets/89704093/3315f52e-614b-4872-9485-08ad06ea531a"></p>

## Semantic Querying

> ### Some ai magic✨ with langchain , pinecone and OpenAI

![semantic_query](https://github.com/HrushiBorhade/AskDoc/assets/89704093/c28e19a2-ebb6-4a8d-8238-e642b3c149d1)

> # Architechtural and Code Overview👨🏻‍💻

### Authentication-Flow

![auth-flow](https://github.com/HrushiBorhade/AskDoc/assets/89704093/3ee0fa13-3ab3-4073-907e-9df700c63ad4)

### Dashboard

![dashboard](https://github.com/HrushiBorhade/AskDoc/assets/89704093/c9baa9a2-50be-479d-b437-c367f2eb15a2)

### File Upload

![file-upload](https://github.com/HrushiBorhade/AskDoc/assets/89704093/a7f85c61-4697-4df2-8103-558dd69ddf47)

### Document Page View

![document-view](https://github.com/HrushiBorhade/AskDoc/assets/89704093/8f6270e3-5489-414b-be56-9fcf184a7b7d)

### Infinite Message Querying

![infinite-query](https://github.com/HrushiBorhade/AskDoc/assets/89704093/66520f28-1ed9-442a-9d68-411bcce32352)

### Optimistic Updates & Real-time Message Streaming

![message-streaming   Optimistic-updates](https://github.com/HrushiBorhade/AskDoc/assets/89704093/08cf9e0c-fb92-4152-8364-b7823c0ab993)

## Instructions

To get started with this project, run

```bash
  git clone https://github.com/HrushiBorhade/AskDoc.git
```

Install all the packages

```
npm install
```

create .env file with these variables:

```bash

#PRISMA
DATABASE_URL=
DIRECT_DATABASE_URL=

#AWS S3
NEXT_PUBLIC_S3_ACCESS_KEY_ID=
NEXT_PUBLIC_S3_SECRET_ACCESS_KEY=
NEXT_PUBLIC_S3_BUCKET_NAME=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#PINECONE
PINECONE_API_KEY=


#OPENAI
OPENAI_API_KEY=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

#KINDE
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

Run the app

```
 `npm run dev`
```
