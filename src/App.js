import Logo from "./images/logo.png";
import Button from "./Components/Button";
import { useState } from "react";
import Score from "./Components/Score";

const randomNum = () => {
  return Math.ceil(Math.random() * 6);
};

function App() {
  //history State훅 생성
  const [myHistory, SetmyHistory] = useState([]);
  const [otherHistory, SetotherHistory] = useState([]);

  //onClick 함수 생성
  const handleRollClick = () => {
    const nextNum = randomNum();
    const otherNextNum = randomNum();

    SetmyHistory([...myHistory, nextNum]);
    SetotherHistory([...otherHistory, otherNextNum]);
  };
  //reduce를 이용한 배열 활용, 초기값은 빈 배열
  const handleClearClick = () => {
    SetmyHistory([]);
    SetotherHistory([]);
  };
  return (
    <div className="App">
      <h1 className="Logo">
        <img src={Logo} alt="주사위게임 로고"></img>
      </h1>
      <div className="ButtonWrap">
        <Button onClick={handleRollClick} color='blue'>굴리기</Button>
        <Button onClick={handleClearClick} color='red'>초기화</Button>
      </div>
      <div className="DiceWrap">
        <Score user="나" color="blue" history={myHistory} />
        <Score user="상대방" color="red" history={otherHistory} />
      </div>
    </div>
  );
}

export default App;
