// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = { firstName: 'John', lastName: 'Ametepe', age: 43, location: 'Kumasi' };
const student2: Student = { firstName: 'Rosemond', lastName: 'Payine', age: 55, location: 'Accra' };

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable(): void {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    
    // Create the table header
    const headerRow = document.createElement('tr');
    const headers = ['First Name', 'Location'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        const textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    // Create the table body
    studentsList.forEach(student => {
        const row = document.createElement('tr');
        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.appendChild(document.createTextNode(student.firstName));
        locationCell.appendChild(document.createTextNode(student.location));

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

renderTable();
