import React from "react";

const MessageState = ({ showMsg }) => {
	const texts = ["Wait", "Follow me!", "Hide!!"];
	return (
		<>
			<div className="flex justify-center mt-5">
				<button className="flex-row p-3 bg-black w-56 font-bold" onClick={() => showMsg(texts[0])}>BTN1</button>
				<button className="flex-row p-3 bg-amber-500 w-56 text-black font-bold" onClick={() => showMsg(texts[1])}>BTN2</button>
				<button className="flex-row p-3 bg-red-600 text-black w-56 font-bold" onClick={() => showMsg(texts[2])}>BTN3</button>
			</div>
		</>
	);
};

export default MessageState;
