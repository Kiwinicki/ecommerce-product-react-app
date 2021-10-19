import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ProductPage from './pages/ProductPage';

function App() {
	return (
		<>
			<ResetStyles />
			<ProductPage />
		</>
	);
}

export default App;

const ResetStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
`;
