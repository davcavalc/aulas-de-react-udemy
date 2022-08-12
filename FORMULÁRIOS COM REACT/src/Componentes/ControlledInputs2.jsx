import React, { useState } from "react";

const ControlledInputs2 = () => {
	const [state, setState] = useState();
	state = {
		name: "",
	};

	const handleInputChange = (event) => {
		setState({ name: event.target.name });
	};

	const handleSend = () => {
		alert(`Seu nome é ${state.name}`);
	};
	return (
		<>
			<div className="">
				<input onChange={handleInputChange} value={state.name} />
			</div>
			<button onClick={handleSend}>Enviar</button>
		</>
	);
};

export default ControlledInputs2;
