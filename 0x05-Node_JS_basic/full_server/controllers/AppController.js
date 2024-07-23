class AppController {
  static getHomepage(requests, response) {
    // response.statusCode = 200;
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
