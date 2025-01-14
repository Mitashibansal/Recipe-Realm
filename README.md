# Recipe Realm

## Table of Contents
1. [App](#app)
2. [Overview](#overview)
3. [Motivation](#motivation)
4. [Installation](#installation)
5. [Directory Tree](#directory-tree)
6. [Technology Used](#technology-used)
7. [Future Scope](#future-scope)

---

## App

![Recipe Realm](https://github.com/user-attachments/assets/0c2eadbd-9fb7-4cb7-9cb5-cb646979ef2f)

---

## Overview
Recipe Realm is a web application that allows users to search for recipes based on various filters such as diet, cuisine, meal type, and calorie range. Users can sort recipes by popularity, time, or healthiness and navigate through results using a pagination system.

---

## Motivation
The aim of this project was to create an intuitive and user-friendly recipe search tool using modern frontend technologies. It demonstrates the integration of APIs, state management with Redux, and responsive UI design for real-world applications.An exceptional recipe app that reigns supreme on the internet. No pesky ads, no hidden costs—just mouthwatering dishes for everyone to savor

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-realm.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-realm
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Directory Tree

```
recipe-realm/
├── public/
│   └── index.html
├── src/
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── store.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
└── package.json
```

- All Redux-related files (actions, reducer, and store) are located under the `redux/` folder.
- The main entry point is `App.js`, which imports `App.css` for styling.

---

## Technology Used

- **Frontend**: React, Redux
- **Styling**: CSS
- **API**: [Spoonacular API](https://spoonacular.com/food-api)
- **Build Tool**: Webpack
- **Package Manager**: npm

---

## Future Scope

1. **Advanced Filters**: Additional filters like cooking time, ingredient exclusions, and dietary restrictions.
2. **User Authentication**: Allow users to save their favorite recipes.
3. **Responsive Design Enhancements**: Improve mobile compatibility and design.
4. **Enhanced Pagination**: Support infinite scrolling.
5. **Multi-Language Support**: Translate the app into multiple languages to cater to a global audience.

---

