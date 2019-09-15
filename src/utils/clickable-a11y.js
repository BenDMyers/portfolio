/**
 * Generates props to make a noninteractive element clickable accessibly.
 * @param {string} role - link|button
 * @param {function} handleClick - click handler
 * @return {object} an object of props to make a component clickable
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/utils/clickable.md}
 */
const clickable = (role, handleClick) => {
	if (!role || !(role === 'link' || role === 'button')) {
		throw new Error(
			`Error: clickable() requires a role of "link" or "button". Given: "${role}".`
		);
	}

	if (!handleClick && typeof handleClick !== 'function') {
		throw new Error(`Error: clickable() requires a handleClick().`);
	}

	const handleKeyPressed = (event) => {
		if (event.key === 'Enter') {
			handleClick();
		} else if (role === 'button' && event.key === ' ') {
			event.preventDefault();
			handleClick();
		}
	};

	const BASE_ATTRIBUTES = {
		tabIndex: '0',
		onClick: handleClick,
		onKeyDown: handleKeyPressed
	};

	return {...BASE_ATTRIBUTES, role};
};

export default clickable;
