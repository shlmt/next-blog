export const revalidate = (paths: string[]) => {
	return fetch('http:/localhost:3000/api/revalidate', {
		cache: 'no-cache',
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			secret: process.env.REVALIDATE_SECRET,
			paths
		})
	})
}
