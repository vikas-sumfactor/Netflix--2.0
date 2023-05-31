This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Section 13
NEXT JS

BASIC SETUP

              npx create-next-app

Setup fonts CSS Variables:

https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

# Section 14
* Netflix Component Architecture
 1) work on banner component


2) navbar 

 * Route done for navbar:

 https://nextjs.org/docs/pages/api-reference/functions/use-router
 
 * Dropdown done for navbar:
 
  using use state hook and update setter function with respect to dropdown 
  
  
  3) card component:
  
 * card img error handling using usestate hook
  
 * framer motion used for hovering effect in card img
  
         npm install framer-motion
  
  
 * also install classnames
  
          npm install classnames
 
 4) section card

  * wrap card into section card
  
  
  5) Youtube Api 
  
  *  get response and put into json file then fetch data

 # Data Fetching
 
* https://nextjs.org/docs/pages/building-your-application/data-fetching


* https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props#caching-with-server-side-rendering-ssr


# Youtube api 

* get api key and save into env local file

* made different card section for differnt videos view


# Section 15

* sign in page functionality done

* styling done

* email validation done

* use magic for passwordless signin


* use NEXT_PUBLIC as a prefix to save api key in env local file

  like NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY = our api key data


        npm install --save magic-sdk

* done loading state and routing

* done sign out functionality

* done username with eamil using useEffect hook

* done login and home page combined if we click on home


# Section 16

* done dynamic route

* implementation of modal page 


       npm install --save react-modal
       
       
       
  * data fetching
  
      https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration
      
   # Section 17
   
     * GRAPHQL
     
     https://graphql.org/
     
     
     * HASURA
     
       https://hasura.io/
       
       
       * get secret key and url  and put in env file 
       
       
       * done table in hasura with neon and updated the data with mutation in explorer and by using code exporter get the code
      
     * JWT

            https://jwt.io/
         
         
     * Authentication Using JWTs
       
            https://hasura.io/docs/latest/auth/authentication/jwt/
            
            
    # Section 18
    
    * What is Postman?

        It is a tool to invoke your API's. Since you can invoke only GET requests in the browser, you need a client like POSTMAN. Postman enables you to create and send API requests. Send         a request to an endpoint, retrieve data from a data source, or test an API's functionality. You don't need to enter commands in a terminal or write any code. Create a new request           and select Send, and the API response appears right inside Postman.

  * How to use it:

       You can invoke the URL directly to use Postman. You don't need to configure any environment to use this. Take a look at the docs to see how to use it:
              
              https://learning.postman.com/docs/getting-started/sending-the-first-request/
  
  
  
