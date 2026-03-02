import ax from 'axios';

const api = ax.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 30000
})

api.interceptors.request.use(config => {
	const token = localStorage.getItem('user_token')
	if (token) { config.headers.Authorization = `Bearer ${token}` }

	return config
})

api.interceptors.use(
	res => res,
	error => {
		if (error.response?.status === 401) {
			localStorage.removeItem('user_token')
			localStorage.removeItem('user_name')
			localStorage.removeItem('user_pass')
		}
		return Promise.reject(err)
	}
)

// ------------------------------------------------------------ //
