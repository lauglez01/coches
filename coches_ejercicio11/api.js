export const url = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0';
export const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cbcaa37ed2msh714b94742876cb9p1baacdjsnfddcbe0ccf04',
		'x-rapidapi-host': 'car-data.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}