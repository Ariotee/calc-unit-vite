import React from 'react';

import ToModal from './components/toModal/ToModal';
import FromModal from './components/fromModal/FromModal';
import InputAmount from './components/input/InputAmount';

function App() {
	const [selectTo, setSelectTo] = React.useState(false);
	const [selectFrom, setSelectFrom] = React.useState(false);

	const [currentUnitTo, setCurrentUnitTo] = React.useState('millimeter');
	const [currentUnitFrom, setCurrentUnitFrom] = React.useState('centimeter');

	return (
		<div className='bg-main h-screen flex justify-center items-center'>
			<div className='bg-block p-cont w-base h-base rounded-rad10'>
				<form className='flex flex-col h-block'>
					<div className='mb-auto'>
						<InputAmount />
					</div>

					<div className='flex justify-between items-center'>
						<div className='flex gap-10'>
							<div className=''>
								<span className=''>From</span>
								<div
									className='w-fromto h-fromto p-btn cursor-pointer'
									onClick={() => setSelectFrom(!selectFrom)}
								>
									<span className=''>{currentUnitFrom}</span>
									{selectFrom && (
										<FromModal setCurrentUnitFrom={setCurrentUnitFrom} />
									)}
								</div>
							</div>
							<div className='relative'>
								<span className=''>To</span>
								<div
									className='w-fromto h-fromto p-btn cursor-pointer'
									onClick={() => setSelectTo(!selectTo)}
								>
									<span className=''>{currentUnitTo}</span>
									{selectTo && <ToModal setCurrentUnitTo={setCurrentUnitTo} />}
								</div>
							</div>
						</div>

						<div className=''>
							<button className='bg-btn p-btn rounded-btn' type='submit'>
								<span className=''>Convert</span>
							</button>
						</div>
					</div>

					<div className='h- min-h-10'>
						<span className=''></span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
