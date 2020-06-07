# MERN todo app with Authentication
It a todo app build on MERN(Mongodb, Express, React, Nodejs) stack which also provides authentication e.g. register/login/logout. 

## How to Install(locally)
1. Clone this repository into your local machine
2. In the console type `npm install` when in the main directory to install the server dependencies. 
3. Now change directory to `cd client` and type `npm install` to install the client dependencies.

## How to run
1. Type `npm run dev` in the main directory to run both server and client. 
2. You can also type `npm run server` to run the server only. 

### Important Note
You need to configure `config/default.json` before running the app.
To do this you need to:
1. Create an account on `https://mlab.com/`
2. Enter `username` `password` `clustername` for `mongoURI` and also your `jwtSecret`

  `{
    "mongoURI": "mongodb+srv://<username>:<password>@<clustername>-rgnfq.mongodb.net/test?retryWrites=true",
    "jwtSecret": "your_jwt_secret"
    }`
    

## Help/Hire
If you need help in installation/running the app or want to hire me for your next project as a remote freelancer then contact me via gmail and my gmail id is my github id/username.  
