const users = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      salary: 500
    },
  
    {
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 12,
      salary: 250
    },
  
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      salary: 1500
    },
  
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 30,
      salary: 760
    }
];
// 1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
users.forEach(el => console.log(el));
// 2. Получите из всех объектов значения last_name и сформируйте из этих имен массив
const users_lastNames = users.map(el => el.last_name);
console.log(users_lastNames);
// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной
const user_Olga = users.find(el => el.first_name === "Olga")
console.log(user_Olga);
// 5. Добавьте в конец нового массива объект со значениями:
    // {
    //   first_name: 'Anton',
    //   last_name: 'Gribov',
    //   age: 36,
    //   salary: 1760
    // }
const user_Anton = {
    first_name: 'Anton',
    last_name: 'Gribov',
    age: 36,
    salary: 1760
}
users.push(user_Anton);
console.log(users);
// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// => ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']
const adult_users = users.filter(el => el.age >= 18);
adult_users.forEach(el => console.log(`${el.first_name} ${el.last_name} (${el.age}): ${el.salary}`));