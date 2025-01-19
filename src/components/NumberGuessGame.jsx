import { useRecoilState } from "recoil";
import {
  attemptsAtom,
  boxscoreAtom,
  highScoreAtom,
  randomAtom,
  scoreAtom,
  valueAtom,
} from "../context/numberState";
import { useEffect, useState } from "react";

const NumberGuessGame = () => {
  const [value, setValue] = useRecoilState(valueAtom);
  const [score, setScore] = useRecoilState(scoreAtom);
  const [highscore, setHighScore] = useRecoilState(highScoreAtom);
  const [attempts, setAttempts] = useRecoilState(attemptsAtom);
  const [random, setRandom] = useRecoilState(randomAtom);
  const [boxscore, setBoxScore] = useRecoilState(boxscoreAtom);
  const [screen, setScreen] = useState("Display Screen");
  const [visibility, setVisibility] = useState("visible");
  const [color, setColor] = useState("#3281a8");

  useEffect(() => {
    if (highscore < score) setHighScore(score);
  }, [score]);

  return (
    <div style={{backgroundColor: `${color}`}} className="w-full h-screen text-white font-mono">
      <div className="p-2 w-full h-1/3 border-b-2 border-white relative">
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              setScore(0);
              setScreen("Display Screen");
              setAttempts(10);
              setBoxScore("?");
              setRandom(Math.floor(Math.random() * 50) + 1);
              setVisibility("visible");
              setColor('#3281a8')
            }}
            className="w-32 h-12 active:bg-black active:text-white bg-white text-black text-xl rounded font-semibold"
          >
            Again!
          </button>
          <h5 className="font-semibold text-lg">Between 1 to 50</h5>
        </div>
        <h3 className="absolute w-full text-center font-extrabold top-2/4 left-1/2 text-5xl transform -translate-x-1/2 -translate-y-1/2">
          Guess My Number!
        </h3>
        <div className="w-16 absolute -bottom-8 left-2/4 transform -translate-x-8 h-16 border-2 text-center border-white p-3 text-red-500 text-4xl rounded bg-white ">
          {boxscore}
        </div>
      </div>
      <div className="p-2 h-1/2 flex gap-3">
        <div className="flex w-1/2 flex-col justify-center items-center gap-3">
          <input
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
            style={{backgroundColor: `${color}`}}
            className="w-2/4 font-extrabold rounded border-2 text-4xl p-2 text-white text-center"
            type="number"
            placeholder="Enter ?"
          />

          <button
            onClick={() => {
              if (attempts != 0) {
                setAttempts((prev) => prev - 1);
                if (value === random) {
                  setScore(attempts * 10);
                  setBoxScore(random);
                  setScreen("Hurrah you Won!");
                  setColor('#1bc25e')
                  setVisibility("hidden");
                } else {
                  if (value < random)
                    setScreen(`Please guess more than ${value}`);
                  else setScreen(`Please guess less than ${value}`);
                }
              } else {
                setVisibility('hidden')
                setColor('#c2211b');
                setScreen("You don't have any attempts ❌");
              }
            }}
            style={{ visibility: `${visibility}` }}
            className="w-28 h-11 active:bg-black active:text-white bg-white text-black text-xl rounded font-semibold"
          >
            Check!
          </button>
        </div>
        <div className="flex font-semibold w-1/2 flex-col justify-center items-center gap-3">
          <h1 className="text-xl text-yellow-200">
            You have {attempts} attempts left
          </h1>
          <h2 className="text-3xl">❤️</h2>
          <div className="p-2">
            <h3>Score: {score}</h3>
            <h3>Highscore: {highscore}</h3>
          </div>
        </div>
      </div>
      <div className="w-full h-1/6 flex items-center justify-center text-cyan-200 text-4xl font-extrabold">
        {screen}
      </div>
    </div>
  );
};

export default NumberGuessGame;
