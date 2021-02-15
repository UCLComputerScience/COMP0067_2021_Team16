import React, { Component } from "react";
import ToggleBox from "./ToggleBox";
import Tutorial from "./";

class App extends Component {
	render(){
		return (
			<ToggleBox title="Show Vehicles">
				<Tutorial />
			</ToggleBox>
		);
	}
}

export default App;

