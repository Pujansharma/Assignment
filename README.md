

#Project Name: Assignment

Setup and Run Instructions:

This is a simple MERN (MongoDB, Express.js, React.js, Node.js) CRUD application that allows you to manage users. The backend is built using Node.js and Express.js, and the frontend is built using React.js. The data is stored in a MongoDB database, and passwords are hashed using bcrypt for security.

Follow the steps below to set up and run the project:

1. Prerequisites:

Node.js and npm should be installed on your machine. You can download them from https://nodejs.org/.
MongoDB should be installed and running. You can download it from https://www.mongodb.com/try/download/community.
2. Clone the Repository:
Open your terminal or command prompt and clone this repository using the following command:

bash
Copy code
git clone https://github.com/your-username/mern-crud-app.git
3. Backend Setup:

Move into the project folder:
bash
Copy code
cd mern-crud-app
Install backend dependencies:
Copy code
npm install
Create a .env file in the root of the project and set your MongoDB connection string and a secret for JWT token (optional for authentication).
makefile
Copy code
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
Run the backend server:
sql
Copy code
npm start
The backend server will start running on http://localhost:5000.

4. Frontend Setup:

Move into the frontend folder:
bash
Copy code
cd frontend
Install frontend dependencies:
Copy code
npm install
Run the frontend development server:
sql
Copy code
npm start
The frontend development server will start on http://localhost:3000.

5. Access the Application:
Open your web browser and navigate to http://localhost:3000 to access the MERN CRUD App.

6. Usage:

You will see a list of users retrieved from the backend API on the homepage.
To add a new user, click on the "Add User" button, fill in the required information, and click "Add User".
To update a user's information, click on the "Edit" button next to the user's name, make the necessary changes, and click "Update User".
To delete a user, click on the "Delete" button next to the user's name.
7. Optional Features:

The project includes optional features like user authentication using JSON Web Tokens (JWT), pagination, sorting, and searching users based on specific criteria. You can explore these features by referring to the code in the project.
8. Submission:
Once you've completed the project and made any additional changes, you can push your code to your public repository on GitHub or any other version control platform. If you want to share your project with others or submit it for evaluation, provide them with the repository URL.