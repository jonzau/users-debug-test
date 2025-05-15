# User Management App - Debug Challenge

## Overview

This is a simple React + TypeScript application that manages a list of users. The app allows you to:

- Add random users fetched from [randomuser.me API](https://randomuser.me/)
- Display user information including profile picture, name, and email
- Remove users from the list

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

## Debug Challenge

This application contains a bug that prevents it from working correctly. As part of our interview process, we'd like you to:

1. Run the application
2. Identify the bug(s)
3. Explain:
   - What is causing the issue
   - How you identified it
   - How you would fix it
   - What steps you would take to prevent similar issues

### Expected Behavior

- Users should be added to the list when clicking "Add Random User"
- Each user should have a unique identifier
- Users should be removable by clicking their respective "Remove" button
- The user list should update correctly after removals

## Technical Stack

- React 18
- TypeScript
- Vite
- CSS Modules
