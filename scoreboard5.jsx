// The app works but it's huge!
// If it gets any bigger it will be difficult to manage
// Let's break it up into pieces
// The app in components is:
// 1. Header -Check!
// 2. Several Teams -Check!
// 3. Each team has a counter

var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			<div className="counter">
				<button className="counter-change minus">-</button>
				<div className="team-score">{props.score}</div>
				<button className="counter-change plus">+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
				{/* Using Map to loop through our teams JSON. These are no longer needed */}
				{ /*<Team name="Alabama" score="0" /> */}
				{ /*<Team name="Clemson" score="0" /> */}

				{/*props.teams is an array of team objects*/}
				{/*return a component with the current team name and score*/}
				{/* () => {} is the ES6 way of writing function(){} */}

				{props.teams.map((team, index) =>{
					return <Team key={index} name={team.name} score={team.score} />
				})}

			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Champtionship Scoreboard" teams={teams} />,
	document.getElementById('container')
)