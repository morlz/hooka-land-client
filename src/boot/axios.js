import axios from 'axios'

export default async ({ Vue }) => {
	Vue.prototype.$axios = axios.create({
		baseURL: `http://${window.location.hostname}:3333/`
	})
}
