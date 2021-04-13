create a folder
open terminal
npm init
npm i express passport  passport-oauth2 ejs nodemon cookie-session dotenv
code .
// open package.json and change scprit
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
    } 

    to

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon app.js"
    }

// create app.js file

// now we need to require export in aap.js 


//create .env file and make following cradintial
GOOGLE_CLIENT_ID=ab653430840574-5h55q1n0h5q0m73u430dmvv48vmd3tip.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=f-abST138vvnke4KgfN8StajtL
callbackURL=http://localhost:3000/google/callback