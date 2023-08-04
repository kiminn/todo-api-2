import { useParams, useSearchParams } from "react-router-dom";

const TodoPage = () => {
  const name = "TODO-PAGE";
  const [param, setParam] = useSearchParams();
  // url의 부가정보를 URLSearchParams 형태로
  const params = useParams();
  // url path 정보를 객체로

  console.log(param.get("page"), param.get("todoId")); // get
  console.log(params.todoId); // 객체 접근 방식

  // url로 전달된 데이터에 접근하기 위한 방식
  const onClickChangedParams = () => {
    setParam({
      page: 5,
      toid: 10,
      sort: "created",
    });
  };

  return (
    <div>
      {name}입니다
      <button onClick={onClickChangedParams}>param 변경</button>
    </div>
  );
};
export default TodoPage;
// 기본값으로 내보내다
