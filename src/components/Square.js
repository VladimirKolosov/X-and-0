import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.module.css';
export const Square = ({ value, handleClick, index }) => {
	return (
		<button className={styles.button} onClick={() => handleClick(index)}>
			{value}
		</button>
	);
};

Square.propTypes = {
	value: PropTypes.string,
	handleClick: PropTypes.func,
	index: PropTypes.number,
};
