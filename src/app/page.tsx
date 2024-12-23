import { getTodos } from "../actions/todo-actions";
import Todos from "../components/todos";

export default async function Home() {
  const todos = await getTodos();
  console.log(todos);

  return (
    <div className="p-4">
      <Todos todos={todos} />
    </div>
  );
}
