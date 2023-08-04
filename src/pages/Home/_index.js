import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const name = "HOME-PAGE";
  const navigation = useNavigate();

  const onClickLocationBtn = (e) => {
    console.log(e.target);
    window.location.href = "/todo";
  };

  const onClickLinkBtn = () => {
    navigation("/todo?page=3&todoId=2");
    // navigation(-1)// 뒤로가기
  };

  return (
    <React.Fragment>
      {" "}
      {/** <> </> */}
      <div>{name}입니다</div>
      {/* <a href="/todo"><button>location</button></a>
    <Link to={"/todo"}><button>router</button></Link> */}
      <button onClick={onClickLocationBtn}>location</button>
      <button onClick={onClickLinkBtn}>router</button>
    </React.Fragment>
  );
}
export default HomePage;
// 기본값으로 내보내다
