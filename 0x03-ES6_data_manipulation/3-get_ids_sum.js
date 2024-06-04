function sumIds(acc, student) {
  return acc + student.id;
}
export default function getStudentIdsSum(studentsArray) {
  return studentsArray.reduce(sumIds, 0);
}
