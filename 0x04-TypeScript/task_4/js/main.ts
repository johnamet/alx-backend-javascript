import { Subjects } from './subjects';

const cpp = new Subjects.Cpp();
const java = new Subjects.Java();
const react = new Subjects.React();

const cTeacher: Subjects.Teacher = {
    firstName: 'John',
    lastName: 'Doe',
};

cpp.setTeacher(cTeacher);
java.setTeacher(cTeacher);
react.setTeacher(cTeacher);

console.log('C++:');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
console.log('\nJava:');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());
console.log('\nReact:');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
