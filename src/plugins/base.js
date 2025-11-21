var baseRoute = ''
if (process.env.NODE_ENV === 'production') {
	baseRoute = 'https://getpayout.co/'
} else {
	baseRoute = 'http://localhost:8081/'
}

export const baseStuff = {
	baseRoute
}
