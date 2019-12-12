# Plantly
This is a Node.js application that utilizes a ORM and a MongoDB back-end to look up and save plant-care info on a React.js UI.

## Feature Overview
Log-in and look up plants from a house-made database, then save your favorite plant-info to your account.

## Motivation
This game is part of the University of Minnesota's Web Application Development program in which students utilize their ORM, REST API, and React.js capabilities. 

## Result
The result is an aesthetically simple design that users can use to quickly look up and save plant info.

## Downloading This Application
To use this application:

1. Ensure that Node.js, npm, and MongoDB are installed on your machine. For instructions, see the Technologies Used section below.

2. Next, clone this repo to your local machine:
```
git git@github.com:iangacek/plantly.git
```
3. Open the repo and execute the following in the bash terminal. Doing so should install the application's dependencies:
```
npm i
```
4. Run the application from the command line:
```
node server.js
```
or
```
npm start
```

## Technologies Used
- [Node.js and npm](https://nodejs.org/en/download/ "Download Node.js and npm"). First, this application relies on both Node.js and npm to download Node packages and to run the application. Users can download the latest versions of both using the link to the left.
- [MongoDB](https://www.mongodb.com/ "MongoDB") - This application assumes users have already installed MongoDB. Installation instructions should be found on the MongoDB website.
- [Passport.js](http://www.passportjs.org/ "Passport") - A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
- [React.js](https://reactjs.org/ "React") - A JavaScript library for building user interfaces.

### NPM Packages
This application utilizes the following NPM packages:
- [express](https://www.npmjs.com/package/express "express")
- [mongoose](https://www.npmjs.com/package/mongoose "mongoose")
- [body-parser](https://www.npmjs.com/package/body-parser "body-parser")
- [request](https://www.npmjs.com/package/request "request")



