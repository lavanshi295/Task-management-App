Task Management App
This is a simple Task Management Application built with Next.js and React that allows users to manage tasks with functionalities like adding, editing, deleting, and marking tasks as completed. The tasks can be sorted dynamically by priority (high, medium, low). It also features server-side rendering (SSR) for initial task loading and a responsive user interface.

Features
Add a New Task: Users can add tasks with a title, description, and priority (high, medium, low).
Edit Task: Modify the task's title, description, and priority.
Mark as Completed: Toggle between completed and pending states for tasks.
Delete Task: Remove tasks from the list.
Sort by Priority: Dynamically sort tasks based on priority, displaying high priority tasks at the top, followed by medium, and then low.
Responsive Design: The layout is fully responsive for all device sizes.
Server-Side Rendering (SSR): The initial list of tasks is loaded server-side using getServerSideProps.
Enhanced UI: Buttons styled using React Bootstrap for a polished look.
Table of Contents
Features
Demo
Technologies
Getting Started
Installation
Run the App
Folder Structure
Task Sorting Approach
Contributing
License
Demo
Here’s a live demo link (if deployed). If not, follow the instructions below to run the app locally.

Technologies Used
Next.js - For server-side rendering (SSR).
React - Front-end framework.
React Bootstrap - For enhanced UI components (buttons).
CSS - For custom styling and responsive design.
Getting Started
Installation
Follow the steps below to get the app running locally:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/task-management-app.git
Navigate to the project folder:

bash
Copy code
cd task-management-app
Install dependencies:

bash
Copy code
npm install
Install React Bootstrap:

Run the following command to add React Bootstrap:

bash
Copy code
npm install react-bootstrap bootstrap
Add Bootstrap CSS:

In the _app.js file, import Bootstrap CSS:

javascript
Copy code
import 'bootstrap/dist/css/bootstrap.min.css';
Run the App
Start the development server:

bash
Copy code
npm run dev
Open the app in your browser:

Visit http://localhost:3000 to see the app in action.

Folder Structure
bash
Copy code
task-management-app/
│
├── components/
│   ├── Task.js          # Single Task component
│   ├── TaskList.js      # Task List component (renders all tasks)
├── pages/
│   ├── index.js         # Main page rendering TaskList with SSR
│   ├── _app.js          # Global CSS and component wrapper
├── public/
├── styles/
│   ├── globals.css      # Global styles
│   ├── Task.module.css  # Custom CSS for tasks
├── README.md            # Project description and instructions
├── package.json         # Project dependencies and scripts
└── ...
Task Sorting Approach
The tasks in this application are sorted based on their priority (High, Medium, Low). Here’s how the sorting works:

Priority Field: Each task has a priority field with one of three values: "High", "Medium", or "Low".

Sorting Logic: In the component, tasks are sorted using JavaScript's sort() method, where:

"High" priority tasks are displayed at the top.
"Medium" tasks come in the middle.
"Low" priority tasks are at the bottom.
The completed tasks are always shown at the bottom of the list, regardless of priority.

Here’s a basic example of how the sorting is implemented:

javascript
Copy code
const sortedTasks = tasks.sort((a, b) => {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  if (a.completed !== b.completed) {
    return a.completed ? 1 : -1;
  }
  return priorityOrder[a.priority] - priorityOrder[b.priority];
});
This ensures that tasks are dynamically sorted as they are added or modified.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.