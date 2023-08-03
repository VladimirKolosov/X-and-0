import React from 'react';
import PropTypes from 'prop-types';
import styles from './RestartButton.module.css';
export const RestartButton = ({ onRestart }) => {
	return (
		<button className={styles.button} onClick={onRestart}>
			Начать заново
		</button>
	);
};

RestartButton.propTypes = {
	onRestart: PropTypes.func,
};
