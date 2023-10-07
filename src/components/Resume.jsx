import React from 'react';
import styled from 'styled-components';

function App() {

	return (
		<CVContainer>
	    <iframe src="https://sapphire-issie-30.tiiny.site/" frameborder="0"></iframe>
		</CVContainer>
	);
}

const CVContainer = styled.div`
width: 100%;
height: 100%;
iframe {
    width: 500px;
    height: 600px;
    overflow-scroll:hidden;
}
`;


export default App;
