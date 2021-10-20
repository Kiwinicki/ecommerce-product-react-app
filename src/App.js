import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<>
			<GlobalStyles />
			<ProductPage />
		</>
	);
}

export default App;

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	:root {
		font-family: 'Kumbh Sans', sans-serif;
	}
`;
