import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../js/baseUrl";

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

export const fetchDirectory = () => (dispatch) => {
	dispatch(directoryLoading());

	return fetch(baseUrl + "directory")
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
		.then((directory) => dispatch(addDirectory(directory)))
		.catch((error) => dispatch(directoryFailed(error.message)));
};

export const directoryLoading = () => ({
	type: ActionTypes.DIRECTORY_LOADING,
});

export const directoryFailed = (errMess) => ({
	type: ActionTypes.DIRECTORY_FAILED,
	payload: errMess,
});

export const addDirectory = (directory) => ({
	type: ActionTypes.ADD_DIRECTORY,
	payload: directory,
});

export const setTheme = (page) => ({
	type: ActionTypes.SET_THEME,
	payload: page,
});

export const postPosting = (posting) => () => {
	const newPosting = posting;

	return fetch(baseUrl + "directory", {
		method: "POST",
		body: JSON.stringify(newPosting),
		headers: {
			"Content-Type": "application/json",
		},
	})
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
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) =>
			alert("Thank you for your submission\n" + JSON.stringify(response))
		)
		.then((response) => window.location.assign(window.location.href)) //Ew.Ew.Ew. Find a better way.
		.catch((error) => {
			console.log("posting", error.message);
			alert(
				"Your submission could not be posted in the directory\nError: " +
					error.message
			);
		});
};
