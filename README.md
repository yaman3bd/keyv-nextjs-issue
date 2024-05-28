**Describe the bug**
when I use keyv in next 14 app  it throws this error:

![image](https://github.com/jaredwray/keyv/assets/58285821/6ca00a1a-e8ad-46df-bf7f-8c9ca17ab2c1)

however, when I was on nextjs 13 I did not have any errors and everything works as expected. 
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
https://github.com/yaman3bd/keyv-nextjs-issue

1. clone the repo
2. npm install
3. npm run dev

open the project and it will throw the error
