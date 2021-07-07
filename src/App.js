//TODO: STEP 1 - Import the useState hook.
import React,{useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeValue, homeSetValue] = useState(32);
  const [awayValue, awaySetValue] = useState(32);

  // const homeTouchDownScore =()=>{
  //   homeSetValue(homeValue+7);
  // }

  // const awayTouchDownScore=()=>{
  //   awaySetValue(awayValue+7);
  // }

  // const homeFieldScore=()=>{
  //   homeSetValue(homeValue + 3);
  // }

  // const awayFieldScore=()=>{
  //   awaySetValue(awayValue + 3);
  // }
const touchDownAmount = 7;
const fieldAmount = 3;
const currentHomeTeam = 'Lions';
const currentAwayTeam = 'Tigers';

  const points = (teamName, amount) => {
    if (teamName === 'Lions'){
      return()=>{homeSetValue(homeValue + amount)}
    }else{
      return ()=>{awaySetValue(awayValue + amount)}
    }
    
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeValue}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={points(currentHomeTeam,touchDownAmount)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={points(currentHomeTeam,fieldAmount)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={points(currentAwayTeam,touchDownAmount)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={points(currentAwayTeam,fieldAmount)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
