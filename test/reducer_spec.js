import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {
	it('handles SET_STATE with plain JS payload', () => {
		const initialState = Map();
		const action = {
			type: 'SET_STATE',
			state: Map({
				message: 'Enjoy Immutable , React and redux & click me to change my color',
				textColor: 'black'
			})
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.equal(fromJS({
			state: {
				message: 'Enjoy Immutable , React and redux & click me to change my color',
				textColor: 'black'
			}
		}));
	});
});