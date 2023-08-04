import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home";
import TodoPage from "../pages/Todo";
/* 
export default 한다면 내보내는 기본 값이 해당 객체이기 때문에
import 시 내가 원하는 이름으로 수정 가능

export만 되어있다면, 객체로 해당 데이터를 가지고오기 때문에 key값과 일치해야하므로
import { export한 이름 }으로 가지고 와야함
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/todo",
    // path: "/todo/:todoId",
    element: <TodoPage />,
  },
]);
export default router;
