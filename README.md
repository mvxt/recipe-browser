# Recipe Browser

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Uses [Bulma](https://bulma.io/) for styling & [Edamam APIs](https://www.edamam.com/).

## Getting Started

### Required
- Node.js (developed on Node v16.10.0)
- NPM or Yarn (tested w/ Yarn v1.22.17)
- An Edamam Account & the following set variables in `.env`:

Env Variable Name     | Description
----------------------|-------------------------
EDAMAM_APP_ID         | Your Edamam app ID
EDAMAM_APP_KEY        | Your Edamam secret key
EDAMAM_BASE_URL       | For now, set to `https://api.edamam.com/api/recipes/v2`

### Steps

First, configure the above env variables as needed.

Then, after cloning and installing modules, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

