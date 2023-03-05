const students = [
  {
    id: 1,
    firstname: "John",
    lastname: "Doe",
    age: 20,
    major: "History",
    avg_grade: 4.5,
  },
  {
    id: 2,
    firstname: "Jane",
    lastname: "Doe",
    age: 21,
    major: "Mathematics",
    avg_grade: 3.8,
  },
  {
    id: 3,
    firstname: "Bob",
    lastname: "Smith",
    age: 22,
    major: "Physics",
    avg_grade: 3.2,
  },
  {
    id: 4,
    firstname: "Alice",
    lastname: "Johnson",
    age: 19,
    major: "Chemistry",
    avg_grade: 4.0,
  },
  {
    id: 5,
    firstname: "Mike",
    lastname: "Davis",
    age: 23,
    major: "Computer Science",
    avg_grade: 3.7,
  },
  {
    id: 6,
    firstname: "Mary",
    lastname: "Wilson",
    age: 20,
    major: "History",
    avg_grade: 2.9,
  },
  {
    id: 7,
    firstname: "David",
    lastname: "Brown",
    age: 21,
    major: "Mathematics",
    avg_grade: 3.5,
  },
  {
    id: 8,
    firstname: "Emily",
    lastname: "Taylor",
    age: 24,
    major: "Physics",
    avg_grade: 3.1,
  },
  {
    id: 9,
    firstname: "Brian",
    lastname: "Miller",
    age: 22,
    major: "Chemistry",
    avg_grade: 4.2,
  },
  {
    id: 10,
    firstname: "Jessica",
    lastname: "Anderson",
    age: 19,
    major: "Computer Science",
    avg_grade: 3.6,
  },
  {
    id: 11,
    firstname: "Steven",
    lastname: "Lee",
    age: 23,
    major: "History",
    avg_grade: 4.1,
  },
  {
    id: 12,
    firstname: "Sarah",
    lastname: "Johnson",
    age: 20,
    major: "Mathematics",
    avg_grade: 3.9,
  },
  {
    id: 13,
    firstname: "Daniel",
    lastname: "Williams",
    age: 21,
    major: "Physics",
    avg_grade: 3.4,
  },
  {
    id: 14,
    firstname: "Amanda",
    lastname: "Garcia",
    age: 22,
    major: "Chemistry",
    avg_grade: 3.3,
  },
  {
    id: 15,
    firstname: "Jason",
    lastname: "Davis",
    age: 19,
    major: "Computer Science",
    avg_grade: 3.0,
  },
];
// 1. Создайте новый массив, который содержит только имена студентов.
const students_names = students.map(({ firstname }) => firstname);

console.log(students_names);
// 2. Создайте новый массив, который содержит студентов, у которых средний балл больше 3.5
const good_students = students.filter(({ avg_grade }) => avg_grade > 3.5);

console.log(good_students);
// 3. Создайте новый массив, который содержит только имена и фамилии студентов.
const students_firstname_and_lastname = students.map(
  ({ firstname, lastname }) => `${firstname} ${lastname}`
);

console.log(students_firstname_and_lastname);
// 4. Создайте новый массив, где студенты будут отсортированны по возрасту (по возрастанию)
const students_sorted_byAge = [...students];
students_sorted_byAge.sort((a, b) => a.age - b.age);

console.log(students_sorted_byAge);
// 5. Создайте новый массив, который содержит только имена студентов, чья фамилия начинается на букву "S".
const students_nameStartingWith_S = students
  .filter(({ lastname }) => lastname[0] === "S")
  .map(({ firstname }) => firstname);

console.log(students_nameStartingWith_S);
// 6. Создайте новый массив, который содержит информацию о студентах в следующем формате: { name: "John Doe", major: "Computer Science" }.
const pick = (obj) => Object.fromEntries([["name", `${obj.firstname} ${obj.lastname}`], ["major", `${obj.major}`]]);
const student_major1 = students.map(el => pick(el));

console.log(student_major1);
// 7. Создайте новый массив, где студенты будут отсортированны по среднему баллу (по убыванию)
const students_sorted_by_avgGrade = [...students];
students_sorted_by_avgGrade.sort((a, b) => b.avg_grade - a.avg_grade);

console.log(students_sorted_by_avgGrade);

