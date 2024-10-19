
# Task Management App

This is a simple Task Management Application built with Next.js and React that allows users to manage tasks with functionalities like adding, editing, deleting, and marking tasks as completed. The tasks can be sorted dynamically by priority (high, medium, low). It also features server-side rendering (SSR) for initial task loading and a responsive user interface.


### Technologies Used

- Next.js - For server-side rendering (SSR).
- React - Front-end framework.
- CSS - For custom styling and responsive design.









## Features

1. Add a New Task: Users can add tasks with a title, description, and priority (high, medium, low).
2. Edit Task: Modify the task's title, description, and priority.
3. Mark as Completed: Toggle between completed and pending states for tasks.
4. Delete Task: Remove tasks from the list.
5. Sort by Priority: Dynamically sort tasks based on priority, displaying high priority tasks at the top, followed by medium, and then low.
6. Responsive Design: The layout is fully responsive for all device sizes.
7. Server-Side Rendering (SSR): The initial list of tasks is loaded server-side using getServerSideProps.
Enhanced UI: Buttons styled using React Bootstrap for a polished look.


## Task Sorting Approach
The tasks in this application are sorted based on their priority (High, Medium, Low). Here’s how the sorting works:

Priority Field: Each task has a priority field with one of three values: "High", "Medium", or "Low".

Sorting Logic: In the component, tasks are sorted using JavaScript's sort() method, where:

"High" priority tasks are displayed at the top.
"Medium" tasks come in the middle.
"Low" priority tasks are at the bottom.
The completed tasks are always shown at the bottom of the list, regardless of priority.

## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## License

[MIT](https://choosealicense.com/licenses/mit/)

