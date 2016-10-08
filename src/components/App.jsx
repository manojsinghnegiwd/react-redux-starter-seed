import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export class App extends React.Component {
	constructor(props) {
		super(props);
	}

	_changeColor () {
		return this.props.changeColor('red');
	}

    render() {
        return (
        	<h1 style={{color: this.props.color}} onClick={this._changeColor}>{this.props.message}</h1>
        );
    }
}

function mapStateToProps(state) {
	return {
		message: state.get('message'),
		color: state.get('color')
	};
}

export const AppContainer = connect(mapStateToProps, actionCreators)(TodoApp);