import React from 'react';
import { length } from '../../data/units';

interface IProps {
	setCurrentUnitTo: React.Dispatch<React.SetStateAction<string>>;
}

const ToModal: React.FC<IProps> = ({ setCurrentUnitTo }) => {
	return (
		<div className='absolute bg-main p-btn rounded-btn'>
			<ul className='list-none w-modal'>
				{length?.map((value, i) => (
					<li className='text-white' key={i} onClick={() => setCurrentUnitTo(value)}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToModal;
