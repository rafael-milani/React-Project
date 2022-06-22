import { useState, useEffect } from "react";

const App3 = () => {
  const [resourceType, setResourceType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };
  return (
    <div>
      <h1>Resource Changer</h1>
      <h2>{resourceType}</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
};
export default App3;
