**Describe the bug**
I want to use `keyv` in my nextjs middleware to store/access some values from my app cache, I have set everything up
as it was explained here: https://github.com/jaredwray/keyv/issues/1065
it is working fine for all my server pages, except it throws an error when I import `keyv` in the middleware. 
the error only shows when I import `keyv` in the middleware or in a file I import it to use it in my middleware for example, import `keyv` in a helper file and import any helper func in the middleware it shows the same error
the error:
![Screenshot 2024-06-27 at 10 49 34 PM](https://github.com/jaredwray/keyv/assets/58285821/25ff85ad-9975-45e4-9317-35ab2fd37bed)

my deps:
```json
"dependencies": {
    "@keyv/sqlite": "^3.6.7",
    "keyv": "^4.5.4",
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18"
  },
```

**How To Reproduce (best to provide workable code or tests!)**

1. clone the repo
2. npm install
3. npm run dev

open the project and it will throw the error
