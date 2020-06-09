import React from "react";



export function TeamScore(props) {
    const team = props.isAway ? "away" : "home";
    return (
        <div className={team}>
            <h2 className={`${team}__name`}>{props.name}</h2>
            <div className={`${team}__score`}>{props.score}</div>
        </div>
    )
}

export function TeamButtons(props) {
    const teamClass = props.isAway ? "awayButtons" : "homeButtons";
    const team = props.isAway ? "Away" : "Home";
    return (
        <div className={teamClass}>
          <button className={`${teamClass}__touchdown`} onClick={props.touchdown}>{team} Touchdown</button>
          <button className={`${teamClass}__fieldGoal`} onClick={props.fieldGoal}>{team} Field Goal</button>
        </div>
    )
}

