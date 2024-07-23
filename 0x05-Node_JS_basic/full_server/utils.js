const fs = require('fs');

function readDatabase(path = 'database.csv') {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(path, 'utf8')
      .then((data) => {
        const lines = data.split('\n').filter(Boolean); // Remove empty lines

        if (lines.length === 0) {
          throw new Error('Cannot load the database');
        }

        let isFirstLine = true;
        const csStudents = [];
        const sweStudents = [];

        lines.forEach((line) => {
          if (isFirstLine) {
            isFirstLine = false; // Skip the first line (header)
          } else {
            const [firstname, , , field] = line.split(',');

            if (field === 'CS') {
              csStudents.push(firstname);
            } else if (field === 'SWE') {
              sweStudents.push(firstname);
            }
          }
        });

        // let result = `Number of students: ${numStudents}\n`;
        // result += `Number of students in CS: ${numCS}. List: ${csStudents.join(', ')}\n`;
        // result += `Number of students in SWE: ${numSWE}. List: ${sweStudents.join(', ')}`;

        resolve({
          SWE: sweStudents,
          CS: csStudents,
        });
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

export default readDatabase;
