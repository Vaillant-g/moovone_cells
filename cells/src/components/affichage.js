import React, { Component } from 'react';

class Affichage extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default Affichage;