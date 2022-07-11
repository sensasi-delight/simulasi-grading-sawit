import { createContext, useContext, useReducer } from 'react';


const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'setFormValue':
			const test = { ...state, payload }
			return test;
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
}


const initialState = {
	nRaw: '',
};

// export const StateContext = createContext()
// export const DispatchContext = createContext()
export const DatasetContext = createContext()


export function DatasetContextProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		// <DispatchContext.Provider value={dispatch}>
			// <StateContext.Provider value={state}>
			<DatasetContext.Provider value={{state, dispatch}}>
				{props.children}
			</DatasetContext.Provider>

			// </StateContext.Provider>
		// </DispatchContext.Provider>
	)
}

export const useDataset = () => useContext(DatasetContext)
