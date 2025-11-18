import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((items) => (
        <TodoItem key={items.name} name={items.name} dueDate={items.dueDate} />
      ))}
    </>
  );
};
export default TodoItems;
