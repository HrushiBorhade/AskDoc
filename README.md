# [AskDoc 🚀](https://askdoc-ai.vercel.app/)

## <p align="center"> Ask Questions and Chat with your Pdf Documents. </p>

<img width="1420" alt="Screenshot 2023-10-27 at 7 11 14 PM" src="https://github.com/HrushiBorhade/AskDoc/assets/89704093/a0823b12-7919-43d8-8b82-81c67ebb3126">

## <p align="center">Engaging & Productive Document Experience.</p>

### <p align="center"><img width="1357" alt="thumbnail2" src="https://github.com/HrushiBorhade/AskDoc/assets/89704093/3315f52e-614b-4872-9485-08ad06ea531a"></p>

## Tech stack

## Semantic Querying

### Some ai magic✨ with langchain , pinecone and OpenAI

![semantic_query](https://github.com/HrushiBorhade/AskDoc/assets/89704093/c28e19a2-ebb6-4a8d-8238-e642b3c149d1)

## Architechtural and Code Overview

### Authentication-Flow

![auth-flow](https://github.com/HrushiBorhade/AskDoc/assets/89704093/3ee0fa13-3ab3-4073-907e-9df700c63ad4)

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
PINECONE_API_KEY=bae1f286-e692-4686-802f-151f1af5905e


#OPENAI
OPENAI_API_KEY=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

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
