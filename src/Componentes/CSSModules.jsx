import React, { useState } from "react";
import styles from "./CSSModules.module.css";

const CSSModules = () => {
    const [valor] = useState(true);
    const [numero] = useState(0);

	const ModuleOne = () => {
		return <h4>Módulo um completo.</h4>;
	};

	const ModuleTwo = () => {
		return <h4>Módulo incompleto.</h4>;
    };
    
    const NumeroTeste = () => {
        return <h1 className="flex justify-center font-extrabold uppercase text-amber-400">Número certo!!</h1>
    }
	return (
		<>
			<h1 className={styles.my_title}>Meu título</h1>
			<div
				style={
					valor === true
						? { color: "green", display: "flex", justifyContent: "center", fontWeight: "bold",textTransform:"uppercase" }
						: { color: "red", display: "flex", justifyContent: "center", fontWeight: "bold",textTransform:"uppercase" }
				}
				className="">
				{valor === true && <ModuleOne />}
                {valor === false && <ModuleTwo />}
			</div>
                {numero >= 0 ? <NumeroTeste/> : null}
		</>
	);
};

export default CSSModules;
