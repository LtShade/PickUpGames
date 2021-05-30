import * as ActionTypes from "./ActionTypes";

export const Directory = (
	state = {
		isLoading: true,
		errMess: null,
		directory: [],
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_DIRECTORY:
			return {
				...state,
				isLoading: false,
				errMess: null,
				directory: action.payload,
			};
		case ActionTypes.DIRECTORY_LOADING:
			return { ...state, isLoading: true, errMess: null, directory: [] };
		case ActionTypes.DIRECTORY_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };
		default:
			return state;
	}
};
