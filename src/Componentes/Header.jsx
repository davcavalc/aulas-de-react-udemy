import React from "react";
import REact from '../assets/react.svg';

const Header = () => {
	return (
		<>
            <div class="navbar bg-black rounded-md">
                <img src={REact} alt="react-logo" />
				<a class="btn btn-ghost normal-case ml-4 text-xl text-react hover:bg-react hover:text-black">ReactJS Udemy</a>
			</div>
		</>
	);
};

export default Header;
