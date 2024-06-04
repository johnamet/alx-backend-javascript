export default function getStudentsByLocation(studentArray, city) {
  return studentArray.filter((std) => std.location === city);
}
