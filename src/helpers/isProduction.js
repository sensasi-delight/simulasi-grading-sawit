const isProduction = Boolean(
	process.env.NODE_ENV === 'production' && process.env.REACT_APP_ENV === 'production'
)

export default isProduction
