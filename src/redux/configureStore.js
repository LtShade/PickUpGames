import { createStore, combineReducers, applyMiddleware } from "redux";
import { InitialPosting } from "./postingForm";
import { createForms } from "react-redux-form";
import { Categories } from "./categories";
import { directory } from "./directory";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			categories: Categories,
			directory: directory,
			...createForms({
				addPostingForm: InitialPosting,
			}),
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
