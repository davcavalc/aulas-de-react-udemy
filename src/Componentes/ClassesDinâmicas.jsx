import React from "react";
import '../index.css'

const ClassesDinâmicas = () => {
    const redTitle = false;
    const myStyle = false;
	return (
		<>
			<div className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica.</div>
			<div className={myStyle ? "new-title" : "title-prime"}>Este título vai ter classe dinâmica.</div>
		</>
	);
};

export default ClassesDinâmicas;
