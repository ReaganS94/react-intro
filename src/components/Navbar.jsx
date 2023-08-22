import Searchbar from "../components/Searchbar";

export default function Navbar({ myArr, myVar }) {
  //   console.log(turkey.chicken[0].name);
  console.log("HELLO FROM THE NAVBAR", myArr);
  console.log("HELLO FROM THE NAVBAR", myVar);

  //   console.log("Hello I am the navbar");
  return (
    <div>
      <h1>I am the navbar</h1>
      <Searchbar myArr={myArr} />
    </div>
  );
}
