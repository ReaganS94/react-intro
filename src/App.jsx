import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const myVar = "hellooo";

  const myArr = [
    {
      id: 1,
      name: "Darrell",
    },
    {
      id: 2,
      name: "Hari",
    },
    {
      id: 3,
      name: "Kate",
    },
  ];

  function sayHi(name) {
    console.log(`Good morning, ${name}`);
  }
  const loading = false;

  return (
    <div>
      <Navbar myArr={myArr} myVar={myVar} />
      {/* {myArr.map((student) => (
        <>
          <h1 key={student.id}>{student.name}</h1>
        </>
      ))} */}
      {loading
        ? "Loading..."
        : myArr.map((student) => (
            <>
              <h1 onClick={() => sayHi(student.name)} key={student.id}>
                {student.name}
              </h1>
            </>
          ))}
      {/* {!loading &&
        myArr.map((student) => (
          <>
            <h1 key={student.id}>{student.name}</h1>
          </>
        ))} */}
    </div>
  );
}
