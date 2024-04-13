import React from 'react';

import FromModal from '../fromModal/FromModal';

const FromField: React.FC = () => {
	const [selectFrom, setSelectFrom] = React.useState(false);
	const [currentUnitFrom, setCurrentUnitFrom] = React.useState('centimeter');

	return (
		<div className=''>
			<span className=''>From</span>
			<div
				className='w-fromto h-fromto p-btn cursor-pointer'
				onClick={() => setSelectFrom(!selectFrom)}
			>
				<span className=''>{currentUnitFrom}</span>
				{selectFrom && <FromModal setCurrentUnitFrom={setCurrentUnitFrom} />}
			</div>
		</div>
	);
};

export default FromField;
