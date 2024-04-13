import React from 'react';
import { length } from '../../data/units';

interface IProps {
	setCurrentUnitFrom: React.Dispatch<React.SetStateAction<string>>;
}

const FromModal: React.FC<IProps> = ({ setCurrentUnitFrom }) => {
	return (
		<div className='absolute bg-main p-btn rounded-btn'>
			<ul className='list-none w-modal'>
				{length?.map((value, i) => (
					<li className='text-white' key={i} onClick={() => setCurrentUnitFrom(value)}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FromModal;
