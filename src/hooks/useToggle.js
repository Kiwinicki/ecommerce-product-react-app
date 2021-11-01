import React, { useState } from 'react';

const useToggle = () => {
	const [state, setState] = useState(false);
	const toggleFun = () => setState((prev) => !prev);
	return [state, toggleFun];
};

export default useToggle;
