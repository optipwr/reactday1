// The app works but it's huge!
// If it gets any bigger it will be difficult to manage
// Let's break it up into pieces
// The app in components is:
// 1. Header
// 2. Several Teams
// 3. Each team has a counter

// Capital Header means a new component
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
				{ /* className is exclusively for styling in react.*/ }
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
			</div>
			<div className="teams">
				{ /* className is exclusively for styling in react.*/ }
				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

// Add a title attribute to the application when it's rendered
ReactDOM.render(
	<Application title="National Champtionship Scoreboard" />,
	document.getElementById('container')
)