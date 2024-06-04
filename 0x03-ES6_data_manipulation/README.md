# 0x03. ES6 Data Manipulation

## Description
This project covers various JavaScript ES6 data manipulation techniques including the use of arrays, typed arrays, sets, maps, and weak maps. The goal is to enhance your ability to handle data structures efficiently using ES6 features such as `map`, `filter`, `reduce`, and other methods.

## Learning Objectives
By the end of this project, you should be able to:
- Use `map`, `filter`, and `reduce` on arrays.
- Understand and use typed arrays.
- Utilize Set, Map, and WeakMap data structures.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file at the root of the folder of the project is mandatory.
- Your code should use the `.js` extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`.
- All of your functions must be exported.

## Setup
### Install NodeJS 12.11.x
Run the following commands in your home directory:
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

### Configuration Files
Add the following files to your project directory:

#### package.json
```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/cli": "^7.8.4",
    "@babel/core": "^7.8.4",
    "@babel/node": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.20.1",
    "jest": "^25.1.0"
  }
}
```

#### babel.config.js
```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### .eslintrc.js
```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
```

Run `npm install` after adding the `package.json` file.

## Tasks

### 0. Basic list of objects
Create a function named `getListStudents` that returns an array of objects.

### 1. More mapping
Create a function `getListStudentIds` that returns an array of ids from a list of objects.

### 2. Filter
Create a function `getStudentsByLocation` that returns an array of objects who are located in a specific city.

### 3. Reduce
Create a function `getStudentIdsSum` that returns the sum of all the student ids.

### 4. Combine
Create a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.

### 5. Typed Arrays
Create a function named `createInt8TypedArray` that returns a new ArrayBuffer with an Int8 value at a specific position.

### 6. Set data structure
Create a function named `setFromArray` that returns a Set from an array.

### 7. More set data structure
Create a function named `hasValuesFromArray` that returns a boolean if all the elements in the array exist within the set.

### 8. Clean set
Create a function named `cleanSet` that returns a string of all the set values that start with a specific string.

### 9. Map data structure
Create a function named `groceriesList` that returns a map of groceries with specific items and quantities.

### 10. More map data structure
Create a function named `updateUniqueItems` that returns an updated map for all items with initial quantity at 1.

### 11. Weak link data structure
Export a const instance of `WeakMap` and name it `weakMap`. Export a new function named `queryAPI`.

## Repository
- GitHub repository: `alx-backend-javascript`
- Directory: `0x03-ES6_data_manipulation`

Make sure to follow the requirements and complete the tasks as specified. Good luck!
