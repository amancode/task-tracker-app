# task-tracker-app
Task tracker application using React. Server side is also available in code repo (JSON mock server).

Follow below steps to make it working in your system.

Step 1 - Node and npm should be installed in system, if not installed then install it according to your OS and computer specification.

Download Node - https://nodejs.org/en/download/
Download NPM  - https://www.npmjs.com/package/download

Step 2 - Open your favourite IDE - In my case it is VS Code.. Open terminal inside IDE or directly open your terminal and install react starter pack i.e. create react app.

Run below commands in terminal one by one:

      npx create-react-app task-tracker-app
      cd task-tracker-app
   
Step 3 - This project using Font Awesome react icons, Routing, JSON server so there are some dependencies. You can install these dependencies one by one using below commands.
      
      npm install react-icons
      
      npm i react-router-dom
    
      npm i json-server - After installing of JSON Server, open package.json file and inside scripts put this line - "server": "json-server --watch db.json --port 5000". It will prepare your configurable DB file having name db.json and run your server at port 5000.

Step 4 - Run your JSON Server using below command.

      npm run server
    This above command runs your JSON Server.
    
Step 5 - After running step 4 command, it creates db.json file in your project directory, open it and replace the contents from db.json which is present in github project repository (task-tracker-app).

Step 6 - Now, replace public folder and src folder from github project repository (task-tracker-app).

Step 7 - Run your dev server using below command.

      npm start
      
Step 8 - Are you excited to see your awesome React Application, open your favourite web browser and type http://localhost:3000/

                      Hurrah! Congratulations :)
