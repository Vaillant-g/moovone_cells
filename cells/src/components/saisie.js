import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron, ButtonGroup, Button } from 'react-bootstrap';

class Saisie extends Component {

    constructor(props) {
        super(props);
        this.add1 = this.add1.bind(this);
        this.add0 = this.add0.bind(this);
        this.handleKchange = this.handleKchange.bind(this);
        this.startSimulation = this.startSimulation.bind(this);
        this.resetConfig = this.resetConfig.bind(this);
    }
    add1() {
        this.props.addExcitedCell();
    }
    add0() {
        this.props.addQuietCell();
    }

    handleKchange(e) {
        this.props.saveKvalue(e.target.value);
    }
    startSimulation() {
        this.props.startSimulation();
    }

    resetConfig() {
        this.props.resetConfig();
    }

    render() {

        return (

            <Container>
                <Row>
                    <Col>
                        <h1> Technical test Moovone</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup>
                            <Button variant="outline-secondary" onClick={this.add0}>
                                + Quiet Cell
                            </Button>
                            <Button variant="outline-secondary" onClick={this.add1}>
                                + Excited Cell
                            </Button>
                            <Button variant="danger" onClick={this.resetConfig} className='float-right'>
                                Reset
                            </Button>
                        </ButtonGroup>
                    </Col>

                    <Col>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">K Value</span>
                            </div>
                            <input type="number" className="form-control" onChange={this.handleKchange} value={this.props.tmpk}></input>

                        </div>
                    </Col>
                    <Col>
                        <Button onClick={this.startSimulation}>Start Simulation</Button>
                    </Col>
                </Row>


                <Jumbotron>

                    <h3> Initial configuration</h3>

                    {this.props.configuration.map(function (item, i) {
                        let variante = "secondary";
                        if (item === '1')
                            variante = 'danger';
                        return <Button variant={variante} className="roundButton" key={i}></Button>
                    })}
                </Jumbotron>

            </Container>
        )
    }
}

export default Saisie;