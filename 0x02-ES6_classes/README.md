# 0x02. ES6 Classes

## Table of Contents
- [Project Overview](#project-overview)
- [Resources](#resources)
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Setup](#setup)
- [Tasks](#tasks)
  - [0. You used to attend a place like this at some point](#0-you-used-to-attend-a-place-like-this-at-some-point)
  - [1. Let's make some classrooms](#1-lets-make-some-classrooms)
  - [2. A Course, Getters, and Setters](#2-a-course-getters-and-setters)
  - [3. Methods, static methods, computed methods names..... MONEY](#3-methods-static-methods-computed-methods-names-money)
  - [4. Pricing](#4-pricing)
  - [5. A Building](#5-a-building)
  - [6. Inheritance](#6-inheritance)
  - [7. Airport](#7-airport)
  - [8. Primitive - Holberton Class](#8-primitive---holberton-class)
  - [9. Hoisting](#9-hoisting)
  - [10. Vroom](#10-vroom)
  - [11. EVCar](#11-evcar)

## Project Overview
This project covers ES6 classes and object-oriented programming in JavaScript. It includes defining classes, adding methods, using static methods, extending classes, and more advanced concepts like metaprogramming and symbols.

## Resources
Read or watch:
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)

## Learning Objectives
By the end of this project, you should be able to:
- Define a class in JavaScript
- Add methods to a class
- Add static methods to a class
- Extend a class from another class
- Understand metaprogramming and symbols

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Use allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file is mandatory
- Use the `.js` extension for your files
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code must pass all tests and lint checks (`npm run full-test`)

## Setup
### Install NodeJS 12.11.x
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```
### Verify installation
```bash
nodejs -v
# v12.11.1
npm -v
# 6.11.3
```
### Install Jest, Babel, and ESLint
In your project directory:
```bash
npm install
```

## Tasks

### 0. You used to attend a place like this at some point
Implement a class named `ClassRoom`:
- Accepts one attribute `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`.

```javascript
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
```

### 1. Let's make some classrooms
Import `ClassRoom` and implement a function named `initializeRooms`. Return an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

```javascript
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
```

### 2. A Course, Getters, and Setters
Implement a class named `HolbertonCourse` with attributes `name` (String), `length` (Number), `students` (array of Strings). Implement getters and setters for each attribute.

```javascript
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students) || students.some(s => typeof s !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('Name must be a string');
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw new TypeError('Length must be a number');
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.some(s => typeof s !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
```

### 3. Methods, static methods, computed methods names..... MONEY
Implement a class named `Currency` with attributes `code` (String) and `name` (String). Implement a method `displayFullCurrency` that returns the attributes in the format `name (code)`.

```javascript
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
```

### 4. Pricing
Implement a class named `Pricing` with attributes `amount` (Number) and `currency` (Currency). Implement a method `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`. Implement a static method `convertPrice`.

```javascript
import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
```

### 5. A Building
Implement a class named `Building` with attribute `sqft` (Number). Make it an abstract class and ensure any extending class implements a method `evacuationWarningMessage`.

```javascript
export default class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
```

### 6. Inheritance
Implement a class `SkyHighBuilding` that extends `Building` with attributes `sqft` and `floors` (Number). Override `evacuationWarningMessage`.

```javascript
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
```

### 7. Airport
Implement a class named `Airport` with attributes `name` (String) and `code` (String). The default string description should return the airport code.

```javascript
export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
```

### 8. Primitive - Holberton Class
Implement a class named `HolbertonClass` with attributes `size` (Number) and `location` (String). When cast into a Number, it should return the size. When cast into a String, it should return the location.

```javascript
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return
