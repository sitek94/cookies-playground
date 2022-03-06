# 🍪 Cookies Playground

A simple playground project, where I explore and experiment with [HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

## Why?

In my [other project](https://github.com/sitek94/jwt-refresh-token-demo) I wanted to implement JWT authentication, 
with Refresh Token stored in HTTP only cookie. However, when I started working on that, I realized that I don't know
that much about cookies, not to mention HTTP only cookies 🙊

## What?

- `/client` - simple React app, with visualization of cookies and ability to set them.
- `/server` - simple Express server, which allows us to see HTTP only cookies.

## How?

```bash
# Clone the repository
git clone https://github.com/sitek94/cookies-playground.git

# Install dependencies
cd cookies-playground
npm install

# Start the server
npm run start:server 

# Start the client
npm run start:client
```

### Server

The server is listening on port 3333:
[http://localhost:3333](http://localhost:3333)

### Client

The app is running on port 3000:
[http://localhost:3000](http://localhost:3000)

## Create React App

Client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

