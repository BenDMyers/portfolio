# [`useFetch`](/src/utils/use-fetch.js)

A custom hook for fetching from some API.

## `useFetch(url, [config])`

`useFetch` requires a `url` parameter and can optionally take a `config` parameter.

* `url : string` - the string to fetch from
* `[config] : object` - optional configurations for the `fetch` call.

Note: this hook is just a wrapper around the `fetch` API. [Read `fetch` docs to learn more.](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

## Returned Values

* `'LOADING'` if the `fetch` call has not resolved yet. Useful for displaying a spinner.
* `'ERROR'` if the `fetch` call failed or returned a non-OK status code.
* The response data in a JSON format, if the call was successful.