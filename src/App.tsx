import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import counter from './store/counter';

const App = (
	() => {
		return (
				<div className="App">
					{'Count = ' + counter.count}
					<div>
						<button onClick={() => counter.increment()}> + </button>
						<button onClick={() => counter.decrement()}> - </button>
					</div>
				</div>
		);
	}
)

export default App;
