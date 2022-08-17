import React, { useState } from "react";

const TextArea = () => {

	const [bio, setBio] = useState();
	return(
		<>
			<label for="">
				<span>Bio:</span>
				<textarea name="bio" placeholder="Informe sua bio" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
			</label>
		</>
	)
};

export default TextArea;
