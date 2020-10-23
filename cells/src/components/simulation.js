import React, { Component } from 'react';
import { Row, Col, Container, Button, ButtonGroup, Jumbotron } from 'react-bootstrap';
import Affichagecells from './affichagecells';

class Simulation extends Component {

    constructor(props) {
        super(props);
        this.setStep = this.setStep.bind(this);
    }

    setStep(stepValue) {
        this.props.setStepValue(stepValue);
    }
    render() {
        const boutons = [];
        for (let cpt = 0; cpt < this.props.k; cpt++) {
            var variant = 'secondary';
            if (cpt === this.props.step)
                variant = 'primary';
            boutons.push(<Button variant={variant} key={cpt} onClick={() => this.setStep(cpt)}>{cpt}</Button>)
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <h2>Simulation</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Step</span>
                            </div>
                            {boutons}
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron>
                            <Affichagecells config={this.props.simulation[this.props.step]}></Affichagecells>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container >
        )
    }
}

export default Simulation;