import React from "react";

const ChildrenProp = ({ children, myValue }) => {
	return (
		<>
			<div className="text-center text-2xl">
				<h2 className="text-white font-bold hover:text-amber-500">Este é o titulo do container</h2>
				{children}
				<p className="text-white">O valor é: {myValue}</p>
			</div>
		</>
	);
};

export default ChildrenProp;
