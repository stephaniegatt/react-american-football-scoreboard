import React from "react";



export function Home(props) {
    return (
        <div className="home">
            <h2 className="home__name">{props.name}</h2>
            <div className="home__score">{props.score}</div>
        </div>
    )
}

export function HomePoints(props) {
    return (
        <div className="homeButtons">
          <button className="homeButtons__touchdown" onClick={props.touchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={props.fieldGoal}>Home Field Goal</button>
        </div>
    )
}

export function Away(props) {
    return (
        <div className="away">
            <h2 className="away__name">{props.name}</h2>
            <div className="away__score">{props.score}</div>
        </div>
    )
}

export function AwayPoints(props) {
    return (
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={props.touchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={props.fieldGoal}>Away Field Goal</button>
        </div>
    )
}