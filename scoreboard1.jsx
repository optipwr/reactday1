// Make a component called Application
// Components are uppercase!
// Components return a virtual DOM element

function Application(){
	// Compenents return a virtual DOM element
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>National Championship Scoreboard</h1>
			</div>
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
// ReactDOM.render puts a component into the DOM
// It takes 2 parameters:
// 1. The component to render
// 2. Where to render it

ReactDOM.render(
	<Application />,
	document.getElementById('container')
)