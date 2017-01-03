// Added prop parameter so render can send stuff to the component
function Application(props){
	// Compenents return a virtual DOM element
	return(
		<div className="scoreboard">
			<div className="header">
				{/*To get the title, we call the title property of the props object*/}
				<h1>{props.title}</h1>
			}
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

// Add a title attribute to the application when it's rendered
ReactDOM.render(
	<Application title="National Champtionship Scoreboard" />,
	document.getElementById('container')
)