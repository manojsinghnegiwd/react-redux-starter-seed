import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators';

import React from 'react';

export class App extends React.Component {
	constructor(props) {
		super(props);
	}

    render() {
        return (
        	<h1 onClick={this.changeColor}>{this.props.message}</h1>
        );
    }
}

function mapStateToProps(state) {
	return {
		message: state.get('message');
		color: state.get('color');
	};
}

export const AppContainer = connect(mapStateToProps, actionCreators)(TodoApp);