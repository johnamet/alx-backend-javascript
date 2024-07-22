const fs = require('fs');

async function countStudents(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
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

    lines.forEach((line) => {
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

    console.log(`Number of students: ${numStudents}`);
    console.log(`Number of students in CS: ${numCS}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${numSWE}. List: ${sweStudents.join(', ')}`);
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
