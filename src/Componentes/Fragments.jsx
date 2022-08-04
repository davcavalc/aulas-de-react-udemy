import React from "react";

const Fragments = ({propFragment}) => {
	return (
		<>
			<h2 className="text-2xl font-extrabold text-center">Primeiro título com fragments</h2>
			<h3 className="text-2xl font-extrabold text-center">Segundo título com fragments</h3>
			<h4 className="text-2xl font-extrabold text-center">{propFragment}</h4>
		</>
	);
};

export default Fragments;
