import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

export class App extends React.Component {
	constructor(props) {
		super(props);

		this._changeColor = this._changeColor.bind(this);
	}

	_changeColor () {
		return this.props.changeColor('red');
	}

    render() {
        return (
        	<h1 style={{color: this.props.textColor}} onClick={this._changeColor}>{this.props.message}</h1>
        );
    }
}

function mapStateToProps(state) {
	return {
		message: state.get('message'),
		textColor: state.get('textColor')
	};
}

export const AppContainer = connect(mapStateToProps, actionCreators)(App);