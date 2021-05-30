import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../js/baseUrl";
import { directory } from "./directory";

export const fetchCategories = () => (dispatch) => {
	dispatch(categoriesLoading());

	return fetch(baseUrl + "categories")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					const error = new Error(
						`Error ${response.status}: ${response.statusText}`
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				const errMess = new Error(error.message);
				throw errMess;
			}
		)
		.then((response) => response.json())
		.then((categories) => dispatch(addCategories(categories)))
		.catch((error) => dispatch(categoriesFailed(error.message)));
};

export const categoriesLoading = () => ({
	type: ActionTypes.CATEGORIES_LOADING,
});

export const categoriesFailed = (errMess) => ({
	type: ActionTypes.CATEGORIES_FAILED,
	payload: errMess,
});

export const addCategories = (categories) => ({
	type: ActionTypes.ADD_CATEGORIES,
	payload: categories,
});