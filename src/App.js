import './App.css';
import Students from "./Students";


function App() {
  // console.log(Date.now() + Math.random() + Math.random())
  const students = [
    {
      'id': Date.now() + Math.random() * 500,
      'name': 'John',
      'lastName': 'Doe',
      'indexNumber': `IND${Math.ceil(Math.random() * 100000)}`,
      'userName': 'johnDoe',
      'password': Date.now() * Math.random(),
      
    },
    {
      'id': Date.now() + Math.random() * 500,
      'name': 'Jack',
      'lastName': 'Doe',
      'indexNumber': `IND${Math.ceil(Math.random() * 100000)}`,
      'userName': 'jackDoe',
      'password': Date.now() * Math.random(),
      
    },
    {
      'id': Date.now() + Math.random() * 500,
      'name': 'Tom',
      'lastName': 'Doe',
      'indexNumber': `IND${Math.ceil(Math.random() * 100000)}`,
      'userName': 'tomDoe',
      'password': Date.now() * Math.random(),
      
    },
    {
      'id': Date.now() + Math.random() * 500,
      // 'name': 'Jane',
      'name': 4,
      'lastName': 'Doe',
      'indexNumber': `IND${Math.ceil(Math.random() * 100000)}`,
      'userName': 'janeDoe',
      'password': Date.now() * Math.random(),
      
    },
    {
      'id': Date.now() + Math.random() * 500,
      'name': 'Emily',
      'lastName': 'Doe',
      'indexNumber': `IND${Math.ceil(Math.random() * 100000)}`,
      'userName': 'emilyDoe',
      'password': Date.now() * Math.random(),
      
    },
    {
      'id': Date.now() + Math.random() * 500,
      'name': 'Lucy',
      // 'name': 4,
      'lastName': 'Doe',
      'indexNumber': `IND${Math.ceil(Math.random() * 100000)}`,
      'userName': 'lucyDoe',
      'password': Date.now() * Math.random(),
      
    }
  
  ]
  console.log(students);
  return (
    <div className="App">
    <Students students={students}/>
    </div>
  );
}


/* Homework 04
    1. Create multiple variables (at least six) that represent some student information. 
    2. Create Student component that will show the student information.
    3. Pass the variables as parameters of the Student component.
    4. Implement typechecking for the parameters in the Student component.  
    5. Missmatch some of the types and see what happens.
    * Practice excercises from previous classes and homeworks.
  */
export default App;
