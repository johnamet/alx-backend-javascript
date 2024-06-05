## Project Overview

This project focuses on working with TypeScript to create interfaces, classes, and functions, manipulate the DOM, and utilize advanced TypeScript features like namespaces and ambient declarations.

## Learning Objectives

By the end of this project, you should be able to:
- Understand basic types in TypeScript.
- Work with interfaces, classes, and functions.
- Interact with the DOM using TypeScript.
- Use generic types.
- Implement and use namespaces.
- Merge declarations.
- Use ambient namespaces to import external libraries.
- Apply nominal typing with TypeScript.

## Tasks Breakdown

### Task 0: Creating an Interface for a Student

1. **Setup Configuration Files:**
   - Copy the provided `package.json`, `.eslintrc.js`, `tsconfig.json`, and `webpack.config.js` files into the `task_0` directory.

2. **Write Code in `main.ts`:**
   - Define an interface `Student` with the required properties: `firstName`, `lastName`, `age`, and `location`.
   - Create two student objects and store them in an array called `studentsList`.
   - Use Vanilla JavaScript to render a table that displays the `firstName` and `location` of each student.

### Task 1: Building a Teacher Interface

1. **Setup Configuration Files:**
   - Create a directory `task_1` and copy the configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) into this folder.

2. **Write Code in `main.ts`:**
   - Define an interface `Teacher` with properties: `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience` (optional), and `location`.
   - Allow the interface to accept additional properties using index signatures.
   - Create an example `Teacher` object and log it to the console.

### Task 2: Extending the Teacher Interface

1. **Write Code in `main.ts`:**
   - Define an interface `Directors` that extends `Teacher` and includes an additional property `numberOfReports`.
   - Create an example `Directors` object and log it to the console.

### Task 3: Printing Teachers

1. **Write Code in `main.ts`:**
   - Write a function `printTeacher` that accepts `firstName` and `lastName`, returning the first initial of `firstName` followed by the full `lastName`.
   - Define an interface `printTeacherFunction` to describe this function.

### Task 4: Writing a Class

1. **Write Code in `main.ts`:**
   - Define an interface for the constructor and class of `StudentClass`.
   - Implement `StudentClass` with a constructor accepting `firstName` and `lastName`, and methods `workOnHomework` and `displayName`.

### Task 5: Advanced Types Part 1

1. **Write Code in `main.ts`:**
   - Define interfaces `DirectorInterface` and `TeacherInterface` with the required methods.
   - Implement classes `Director` and `Teacher` based on these interfaces.
   - Create a function `createEmployee` that returns either a `Director` or a `Teacher` based on the salary.

### Task 6: Creating Functions Specific to Employees

1. **Write Code in `main.ts`:**
   - Write a function `isDirector` that checks if an employee is a director.
   - Write a function `executeWork` that calls the appropriate work method based on the type of employee.

### Task 7: String Literal Types

1. **Write Code in `main.ts`:**
   - Define a string literal type `Subjects` with values `Math` and `History`.
   - Write a function `teachClass` that returns the appropriate teaching message based on the subject.

### Task 8: Ambient Namespaces

1. **Setup Configuration Files:**
   - Create a directory `task_3` and copy the necessary configuration files into it.

2. **Write Code:**
   - In `interface.ts`, define a type `RowID` and an interface `RowElement`.
   - In `crud.d.ts`, write ambient type declarations for functions in `crud.js`.
   - In `main.ts`, use these types and call the functions from `crud.js`.

### Task 9: Namespace & Declaration Merging

1. **Setup Configuration Files:**
   - Create a directory `task_4` and copy the configuration files into it.

2. **Write Code in `js/subjects`:**
   - Define interfaces and classes in `Teacher.ts`, `Subject.ts`, `Cpp.ts`, `React.ts`, and `Java.ts` using namespaces and declaration merging.
   - Implement the required methods for each class.

### Task 10: Updating `main.ts`

1. **Write Code in `main.ts`:**
   - Export constants for each subject and a `Teacher` object.
   - Log the required information to the console.

### Task 11: Brand Convention & Nominal Typing

1. **Setup Configuration Files:**
   - Create a directory `task_5` and copy the configuration files into it.

2. **Write Code in `main.ts`:**
   - Define interfaces `MajorCredits` and `MinorCredits` with a `brand` property.
   - Write functions `sumMajorCredits` and `sumMinorCredits` to sum the credits of two subjects.

## How to Use

1. **Clone the repository:**

```sh
git clone https://github.com/<your_username>/alx-backend-javascript.git
```

2. **Navigate to the project directory:**

```sh
cd alx-backend-javascript/0x04-TypeScript
```

3. **Install dependencies:**

```sh
npm install
```

4. **Compile and run the TypeScript code:**

```sh
npm run build
```

5. **Run the test scripts (if applicable):**

```sh
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
