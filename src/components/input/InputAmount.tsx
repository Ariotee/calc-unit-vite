import React from 'react';

const InputAmount: React.FC = () => {
	const [valueAmount, setValueAmount] = React.useState('0');

	const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueAmount(event.target.value);
	};

	const onClickAmount = () => {
		setValueAmount('');
	};

	return (
		<>
			<h1 className='text-h1'>Amount</h1>
			<input
				className='outline-none bg-block w-inp p-inp border-b-4 border-gray-500'
				type='number'
				value={valueAmount}
				onClick={onClickAmount}
				onChange={onChangeAmount}
				placeholder='Write amount'
			/>
		</>
	);
};

export default InputAmount;
