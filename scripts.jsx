function Application(props){
	// Capital letters in React means component
	// Components return a single virtual DOM element
	return(
		<div className="application">
			{props.message}
		</div>
	)
}

ReactDOM.render(
	<Application message="Hello, Class" />,
	document.getElementById('container')
)