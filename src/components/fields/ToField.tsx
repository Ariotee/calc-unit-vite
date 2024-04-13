import React from 'react';

import ToModal from '../modals/ToModal';

const ToField: React.FC = () => {
	const [selectTo, setSelectTo] = React.useState(false);
	const [currentUnitTo, setCurrentUnitTo] = React.useState('millimeter');

	return (
		<div className=''>
			<span className=''>To</span>
			<div
				className='w-fromto h-fromto p-btn cursor-pointer'
				onClick={() => setSelectTo(!selectTo)}
			>
				<span className=''>{currentUnitTo}</span>
				{selectTo && <ToModal setCurrentUnitTo={setCurrentUnitTo} />}
			</div>
		</div>
	);
};

export default ToField;
