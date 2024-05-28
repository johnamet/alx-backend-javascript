# ES6 Basics

## Overview
This project focuses on learning the basics of ECMAScript 6 (ES6) and its new features. You will be working on various tasks to understand and implement ES6 concepts such as constants, block-scoped variables, arrow functions, template literals, and more.

## Learning Objectives
By the end of this project, you should be able to:
- Understand what ES6 is and its new features.
- Differentiate between a constant and a variable.
- Use block-scoped variables.
- Implement arrow functions and use function parameters with default values.
- Utilize rest and spread function parameters.
- Apply string templating in ES6.
- Create objects and their properties in ES6.
- Use iterators and for-of loops.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Use allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file at the root of the project is mandatory.
- Code should use the `.js` extension.
- Code will be tested using the Jest Testing Framework.
- Code will be analyzed using the linter ESLint with specific rules provided.
- All functions must be exported.

## Setup
To set up the project, follow these steps:
1. Install NodeJS 12.11.x:
    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```
2. Verify the installation:
    ```bash
    nodejs -v
    npm -v
    ```
3. In your project directory, install Jest, Babel, and ESLint using the supplied `package.json` and run `npm install`.

## Tasks

### 0. Const or let?
- Modify `taskFirst` to instantiate variables using `const`.
- Modify `taskNext` to instantiate variables using `let`.

### 1. Block Scope
- Modify the variables inside the function `taskBlock` to avoid them being overwritten inside the conditional block.

### 2. Arrow functions
- Rewrite the function to use ES6’s arrow syntax.

### 3. Parameter defaults
- Condense the function to one line using default parameter values.

### 4. Rest parameter syntax for functions
- Modify the function to return the number of arguments passed using the rest parameter syntax.

### 5. The wonders of spread syntax
- Use spread syntax to concatenate two arrays and each character of a string in one line.

### 6. Take advantage of template literals
- Rewrite the return statement to use a template literal.

### 7. Object property value shorthand syntax
- Modify the `budget` object to use shorthand property names.

### 8. No need to create empty objects before adding in properties
- Use ES6 computed property names in the `budget` object.

### 9. ES6 method properties
- Rewrite `getFullBudgetObject` to use ES6 method properties.

### 10. For...of Loops
- Rewrite the function to use ES6’s for...of operator.

### 11. Iterator
- Write a function `createEmployeesObject` that returns an object with the department name and employees.

### 12. Let's create a report object
- Write a function `createReportObject` that returns an object with `allEmployees` and a method `getNumberOfDepartments`.

## Author
- GitHub repository: `alx-backend-javascript`
- Directory: `0x00-ES6_basic`

Ensure you have completed all tasks and your code is properly formatted and linted before submission.

