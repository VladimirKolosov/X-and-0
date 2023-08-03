import React, { useEffect, useState } from 'react';
import { Square } from './Square';
import styles from './Game.module.css';
import { RestartButton } from './RestartButton';

export const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(''));

	const [currentMove, setCurrentMove] = useState('X');

	const [winner, setWinner] = useState('');

	const status = 'Next player is ' + currentMove;

	useEffect(() => {
		const winningCombination = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		let winningCombinationIndex = 0;
		let newWinner = '';

		while (winningCombinationIndex < winningCombination.length && !newWinner) {
			const boardPositionToChek = winningCombination[winningCombinationIndex];
			const boardValuesToChek = boardPositionToChek.map((index) => board[index]);
			const chekingValue = boardValuesToChek[0];
			const isFinished = boardValuesToChek.every(
				(value) => value === chekingValue && chekingValue,
			);
			newWinner = isFinished ? chekingValue : null;
			winningCombinationIndex++;
		}

		if (newWinner) {
			setWinner(newWinner === 'X' ? 'Победил игрок Х' : 'Победил игрок 0');
		}
	}, [board]);

	const handleClick = (index) => {
		if (index < 0 || index > 9 || board[index] || winner) return;
		const newBoard = [...board];
		newBoard.splice(index, 1, currentMove);
		setBoard(newBoard);

		const newCurrentMove = currentMove === 'X' ? '0' : 'X';
		setCurrentMove(newCurrentMove);
	};

	const heandleRestart = () => {
		setBoard(Array(9).fill(''));
		setCurrentMove('X');
		setWinner('');
	};

	return (
		<div className={styles.container}>
			<div>{winner}</div>
			<div>{status}</div>
			<div className={styles.board}>
				{board.map((element, index) => (
					<Square
						key={index}
						value={element}
						index={index}
						handleClick={handleClick}
					/>
				))}
			</div>
			<RestartButton onRestart={heandleRestart} />
		</div>
	);
};
