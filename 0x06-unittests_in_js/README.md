Sure! Here's a `README.md` for your project:

```markdown
# Payment API Testing Project

This project demonstrates how to test various aspects of a Node.js application using Mocha, Chai, Sinon, and Supertest. The project includes unit tests for simple arithmetic functions, stubbing and spying on functions, and integration testing with an Express server.

## Project Structure

```
project/
├── app.js
├── server.js
├── utils.js
├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── app.test.js
├── package.json
```

### Files Description

- `app.js`: Express application setup.
- `server.js`: Entry point to start the Express server.
- `utils.js`: Utility functions used across the project.
- `0-calcul.js`: Basic arithmetic operations.
- `0-calcul.test.js`: Unit tests for `0-calcul.js` using Mocha and Chai.
- `1-calcul.js`: Slightly more complex arithmetic operations.
- `1-calcul.test.js`: Unit tests for `1-calcul.js` using Mocha and Chai.
- `2-calcul_chai.js`: Arithmetic operations with Chai assertions.
- `2-calcul_chai.test.js`: Unit tests for `2-calcul_chai.js` using Chai assertions.
- `3-payment.js`: Function that uses `utils.js` for payment calculations.
- `3-payment.test.js`: Tests for `3-payment.js` using Sinon spies.
- `4-payment.js`: Function that uses `utils.js` for payment calculations with stubbing.
- `4-payment.test.js`: Tests for `4-payment.js` using Sinon stubs.
- `app.test.js`: Integration tests for the Express server using Supertest.

## Installation

To install the necessary dependencies, run:

```sh
npm install
```

## Running the Tests

To run the test suite, use:

```sh
npm test
```

## Testing Overview

### Unit Tests

- **Arithmetic Functions**: 
  - `0-calcul.test.js`: Tests basic arithmetic functions.
  - `1-calcul.test.js`: Tests slightly more complex arithmetic functions.
  - `2-calcul_chai.test.js`: Tests arithmetic functions with Chai assertions.

- **Payment Calculations**: 
  - `3-payment.test.js`: Uses Sinon spies to test if `Utils.calculateNumber` is called correctly.
  - `4-payment.test.js`: Uses Sinon stubs to test the return value of `Utils.calculateNumber`.

### Integration Tests

- **Express Server**:
  - `app.test.js`: Tests the `/payment` endpoint of the Express server, ensuring it returns the correct total and calls the utility function with the correct arguments.

## Usage

1. **Start the Server**:
   ```sh
   node server.js
   ```

2. **Access the Payment Endpoint**:
   Navigate to `http://localhost:3000/payment` to see the payment total calculated.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Supertest](https://github.com/visionmedia/supertest)

```

This `README.md` provides an overview of the project, including its structure, installation instructions, how to run tests, and a brief description of each file and its purpose. Feel free to customize it further to suit your needs!
