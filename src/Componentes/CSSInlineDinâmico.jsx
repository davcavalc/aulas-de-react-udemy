import React from "react";

const CSSInlineDinâmico = () => {
	const numeroUm = 15;

	return (
		<>
			<div
				className="font-bold text-4xl text-center"
				style={
					numeroUm < 10
						? { color: "red", textTransform: "uppercase" }
						: { color: "green", textTransform: "lowercase" }
				}>
				CSSInlineDinâmico
			</div>
		</>
	);
};

export default CSSInlineDinâmico;
