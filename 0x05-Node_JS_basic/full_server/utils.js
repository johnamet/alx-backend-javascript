const fs = require('fs');

function readDatabase(path="database.csv") {
  return new Promise((resolve, reject) => {
    fs.promises.readFile(path, 'utf8')
      .then(data => {
        const lines = data.split('\n').filter(Boolean); // Remove empty lines

        if (lines.length === 0) {
          throw new Error('Cannot load the database');
        }

        let isFirstLine = true;
        let numStudents = 0;
        let numCS = 0;
        let numSWE = 0;
        const csStudents = [];
        const sweStudents = [];

        lines.forEach(line => {
          if (isFirstLine) {
            isFirstLine = false; // Skip the first line (header)
          } else {
            const [firstname, , , field] = line.split(',');

            if (field === 'CS') {
              numCS += 1;
              csStudents.push(firstname);
            } else if (field === 'SWE') {
              numSWE += 1;
              sweStudents.push(firstname);
            }

            numStudents += 1;
          }
        });

        // let result = `Number of students: ${numStudents}\n`;
        // result += `Number of students in CS: ${numCS}. List: ${csStudents.join(', ')}\n`;
        // result += `Number of students in SWE: ${numSWE}. List: ${sweStudents.join(', ')}`;
        
        resolve({
            "SWE": sweStudents,
            "CS": csStudents
        });
      })
      .catch(err => {
        reject(new Error('Cannot load the database'));
      });
  });
}


export default readDatabase;
