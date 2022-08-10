import React from "react";

const Form1 = () => {
	return (
        <>
            {/* 1 - Criação de uma Form */}
            <h1 className="flex justify-center">Form 1</h1>
            <form className="w-[500px] m-auto text-left">
                <div className=" mt-[10px] flex flex-col ">
                    <label htmlFor="name">Nome:</label>
                    <input className="ml-2 mt-4" type="text" name="name" placeholder="Digite o seu nome" required/>
                    <label htmlFor="email">Email:</label>
                    <input className="ml-2 mt-4" type="email" name="email" placeholder="Digite o seu email" required/>
                    <label htmlFor="phone">Nome:</label>
                    <input className="ml-2 mt-4" type="phone" name="phone" placeholder="Digite o seu nome" required/>
                </div>
                <input className="border-[2px] w-32 rounded-md shadow-md bg-slate-400 font-bold shadow-orange-300" type="submit" value="Enviar" />
            </form>
		</>
	);
};

export default Form1;
