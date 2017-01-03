var Application = React.createClass({
	getInitialState: function() {
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}
	},

	render: function(){
		return(
			<div className="application">
				<button onClick={this.flipCoin}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
	},

	flipCoin: function(){
		this.setState({
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-head.jpg'
		})
	}
});


ReactDOM.render(
	<Application imageSrc = "http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg" />,
	document.getElementById('container')
)