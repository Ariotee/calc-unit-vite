import InputAmount from './components/input/InputAmount';
import FromField from './components/fields/FromField';
import ToField from './components/fields/ToField';

function App() {
	return (
		<div className='bg-main h-screen flex justify-center items-center'>
			<div className='bg-block p-cont w-base h-base rounded-rad10'>
				<form className='flex flex-col h-block'>
					<div className='mb-auto'>
						<InputAmount />
					</div>

					<div className='flex justify-between items-center'>
						<div className='flex gap-10'>
							<FromField />
							<ToField />
						</div>

						<div className=''>
							<button className='bg-btn p-btn rounded-btn' type='submit'>
								<span className=''>Convert</span>
							</button>
						</div>
					</div>

					<div className='min-h-10'>
						<span className=''></span>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
