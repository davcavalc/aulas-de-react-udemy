import React from "react";

const StateLift = ({ msg }) => {
	return (
		<div className="text-5xl text-center mt-5 font-extrabold underline">A mensagem é: "{msg}"</div>
	);
};

export default StateLift;
