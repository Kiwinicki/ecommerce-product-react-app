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
	
	#root {
		overflow-y: hidden;
    	position: relative;
		font-family: 'Kumbh Sans', sans-serif;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
`;
