import React from 'react';

export class Text extends React.Component {
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