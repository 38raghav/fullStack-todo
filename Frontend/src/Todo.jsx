export default function Todo() {
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter your task"/>&nbsp;&nbsp;
      <button>Add</button>

      <ul>
        <li>
          <button>Edit</button>&nbsp;&nbsp;
          <button>Delete</button>
        </li>
      </ul>
    </>
  );
}
