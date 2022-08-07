import React from "react";

const CssInline = () => {
	return (
		<>
			<h4 style={{color:"orange", padding:"25px", backgroundColor:"black", borderTop:"2px solid red"}}>CSS inline: este elemento foi estilizado de forma inline</h4>
			<h4 className="text-orange-500 p-[25px] bg-black border-t-2 border-t-red-700 text-center">CSS inline: este elemento foi estilizado de forma inline</h4>
		</>
	);
};

export default CssInline;
