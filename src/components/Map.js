import React from "react";

// Sample data
const names = ["Alice", "Bob", "Charlie"];
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
];

// Custom UserCard component
const UserCard = ({ name, age }) => (
  <div className="border p-2 mb-2">
    <h2>{name}</h2>
    <p>Age: {age}</p>
  </div>
);

const Map = () => {
  return (
    <div>
      <h1>Names List</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      <h1>User Cards</h1>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} name={user.name} age={user.age} />
        ))}
      </div>

      <h1>Conditional Rendering with Age</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
            {user.age >= 18 && (
              <button className="ml-2 p-1 bg-blue-500 text-white rounded">
                Adult
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Map;
