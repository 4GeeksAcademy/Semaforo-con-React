import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		// console.log(this.state);

		let redselected = "";
		let yellowselected = "";
		let greenselected = "";

		switch (this.state.clickedLight) {
			case "red":
				redselected = "selected";
				break;
			case "yellow":
				yellowselected = "selected";
				break;
			case "green":
				greenselected = "selected";
				// console.log(greenselected);
				break;
		}

		return (
			<div>
				<div id="TrafficTop" />
				<div id="container">
					<div
						className={"red light " + redselected}
						onClick={() => this.setState({ clickedLight: "red" })}
					/>
					<div
						className={"yellow light " + yellowselected}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenselected}
						onClick={() => this.setState({ clickedLight: "green" })}
					/>
				</div>
			</div>
		);
	}
}