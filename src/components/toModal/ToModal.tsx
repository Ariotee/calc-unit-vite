import React from 'react';

import { length } from '../../data/units';
import { IPropsTo } from '../../types/types';

const ToModal: React.FC<IPropsTo> = ({ setCurrentUnitTo }) => {
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
