import * as ActionTypes from "./ActionTypes";

/*
	color-1 fcfffd
	color-2 e8ac40
	bkgrnd-1 fcfffd
	bkgrnd-2 e8ac40
	bkgrnd-3 21b9f2
	bkgrnd-4 32d175
*/

export const Theme = (
	theme = {
		name: "primary",
		color1: " ",
		color2: " ",
		bkgrnd1: " ",
		bkgrnd2: " ",
		bkgrnd3: " ",
		bkgrnd4: " ",
	},
	action
) => {
	console.log(theme);
	switch (action.type) {
		case ActionTypes.SET_THEME:
			const page = action.payload;
			switch (page) {
				case "atheletics":
					return {
						name: "atheletics",
						color1: "color-1ath",
						color2: "color-2ath",
						bkgrnd1: "bkgrnd-1ath",
						bkgrnd2: "bkgrnd-2ath",
						bkgrnd3: "bkgrnd-3ath",
						bkgrnd4: "bkgrnd-4ath",
					};
				default:
					return theme;
			}

		default:
			return theme;
	}
};
