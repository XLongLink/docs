import React from "react";
import NT from "./LL-n.svg";
import BT from "./LL-b.svg";
import { useColorMode } from "theme-ui";

export const Logo = () => {
	const [colorMode] = useColorMode();

	return (
		<>
			{colorMode === "dark" ? (
				<img
					src={BT}
					style={{ width: "auto", height: "80%" }}
					alt="That's my logo"
				/>
			) : (
				<img
					src={NT}
					style={{ width: "auto", height: "80%" }}
					alt="That's my logo"
				/>
			)}
		</>
	);
};
