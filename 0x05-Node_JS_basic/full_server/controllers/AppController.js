class AppController{

    getHomepage(requests, response) {
        // response.statusCode = 200; 
        response.send("Hello Holberton School!");
    }
}

export default AppController;