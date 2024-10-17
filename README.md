<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# University Based Comprehensive Digital Platform - dusk

## Overview
This platform allows students from the university to connect with each other based on shared interests, facilitating better communication and collaboration within the student community. Users can create posts, interact through likes and comments, and access a dynamic events page displaying details of upcoming university events. The events data is scraped from the *Resonanz NSUT* website using *BeautifulSoup* and *bs4* for dynamic display.

## Features
- *Home Page*: View posts from fellow students, with options to like and comment on each post.
- *Notifications*: A notifications tab to check interactions such as new likes and comments on your posts.
- *Create Post*: Students can create posts with text and images, engaging in discussions based on shared interests.
- *Events Page: A button redirects users to a dynamically generated events page, where event details are scraped from the **Resonanz NSUT* website and displayed in a responsive layout.

## Tech Stack
- *Frontend*: React (JavaScript)
- *Backend*: Node.js with Express
- *Database*: MongoDB
- *Web Scraping*: BeautifulSoup, bs4
- *Styling*: Tailwind CSS

## Project Structure
```bash
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Home.js           # Home page component
│   │   ├── Notifications.js  # Notifications page component
│   │   ├── CreatePost.js     # Post creation form
│   │   ├── Events.js         # Event page component
│   │   └── Post.js           # Single post component (with like & comment functionality)
│   ├── utils
│   │   └── scraper.js        # Script for scraping data using BeautifulSoup
│   ├── App.js                # Main app component
│   ├── index.js              # Entry point
│   └── ...
├── server
│   ├── server.js             # Backend server setup with Express
├── tailwind.config.js        # Tailwind configuration file
├── package.json              # Project dependencies
└── README.md                 # You're here!