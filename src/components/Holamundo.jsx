import React from 'react';

const HolaMundo = () => {
	const Hello = 'Hola mundo';
	const isTrue = false;

	return (
		<div className='HolaMundo'>
			<h1>{Hello + ', Soy Ernan'}</h1>
			<h2>Curso Esencial de React</h2>
			<img
				src='https://cdn.freelogovectors.net/wp-content/uploads/2018/12/react_logo.png'
				alt='React'
			/>
			{isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}
			{isTrue && <h4>Soy verdadero</h4>}
		</div>
	);
};

export default HolaMundo;
