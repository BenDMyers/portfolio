import {useState, useEffect} from 'react';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

/**
 * A custom hook that wraps a `fetch` call.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/utils/use-fetch.md}
 */
const useFetch = (url, options) => {
	const [response, setResponse] = useState(LOADING);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(url, options);
				if (!res.ok) {
					setResponse(ERROR);
				} else {
					const json = await res.json();
					setResponse(json);
				}
			} catch (err) {
				setResponse(ERROR);
			}
		};
		fetchData();
	}, []);
	return response;
};

export default useFetch;
