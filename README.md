# Transnode AI Company Website

This repository contains the source code for the official [Transnode AI, LLC](https://www.transnode.ai/) company website. It presents the company, focus areas, products, team, and contact information in multiple languages.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Edit with Google AI Studio

The website can also be opened in [Google AI Studio](https://ai.studio/apps/687e79c9-6a7d-4f6b-951e-8a48210c8570), which provides a direct and easy way to edit the application in a browser. To publish changes made there, make sure they are committed and pushed to the `main` branch so AWS Amplify can deploy them.

## Local development

### Prerequisites

- Node.js
- npm

### Setup

1. Install the dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local` and add any required environment variables, such as:

   ```env
   GEMINI_API_KEY=your_api_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Create a production build:

   ```bash
   npm run build
   ```

## Deployment

The website is deployed through AWS Amplify using the CEO's AWS account (`qq2388115736@gmail.com`).

AWS Amplify is connected to the `main` branch of this repository. Every change pushed or merged into `main` should automatically trigger a new production build and deployment. Deployment progress and build logs can be reviewed in the AWS Amplify console.

Before pushing to `main`, verify that the application builds successfully and that the intended changes are ready for production.
