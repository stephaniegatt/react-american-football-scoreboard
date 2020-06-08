//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import { TeamScore, TeamButtons } from "./stretch";



function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const { homeName, awayName, } = props

  const homeFieldGoal = ()=> {
    setHomeScore(homeScore + 3)
  }

  const awayFieldGoal = () => {
    setAwayScore(awayScore + 3)
  }

  const homeTouchdown = () => {
    setHomeScore(homeScore + 7)
  }

  const awayTouchdown = () => {
    setAwayScore(awayScore + 7)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <TeamScore name={homeName} score={homeScore} />
          <div className="timer">00:03</div>
          <TeamScore name={awayName} score={awayScore} isAway />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <TeamButtons touchdown={homeTouchdown} fieldGoal={homeFieldGoal} />
        <TeamButtons touchdown={awayTouchdown} fieldGoal={awayFieldGoal} isAway />
      </section>
    </div>
  );
}

export default App;
