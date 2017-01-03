// The app works but it's huge!
// If it gets any bigger it will be difficult to manage
// Let's break it up into pieces
// The app in components is:
// 1. Header -Check!
// 2. Several Teams
// 3. Each team has a counter

// Create a team component to use twice!
// Bring in props, so we can fill out the score and the name dynamically each time
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

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Application(props){
	// Compenents return a virtual DOM element
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">
			{/* Call in each team with the right props*/}
				<Team name="Alabama" score="0" />
				<Team name="Clemson" score="0" />
			</div>
		</div>
	)
}

// Add a title attribute to the application when it's rendered
ReactDOM.render(
	<Application title="National Champtionship Scoreboard" />,
	document.getElementById('container')
)