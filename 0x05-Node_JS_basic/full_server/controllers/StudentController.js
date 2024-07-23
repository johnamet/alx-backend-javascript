import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase();
      let result = 'This is the list of our students\n';
      result += `Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`;
      result += `Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`;
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    console.log(major);

    if (!major.includes('CS') && !major.includes('SWE')) {
      response.status(400).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase();
      const students = data[major];
      const result = `List: ${students.join(', ')}`;
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
