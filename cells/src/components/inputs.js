import React, { Component } from 'react';
import { Row, Col, Container, Jumbotron, ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap';

class Inputs extends Component {

    constructor(props) {
        super(props);
        this.handleKchange = this.handleKchange.bind(this);
    }

    handleKchange(e) {
        this.props.saveKvalue(e.target.value);
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
                        <ButtonToolbar className="justify-content-between">
                            <ButtonGroup Style="flex-wrap: wrap;">
                                <Button variant="outline-secondary" onClick={this.props.addQuietCell}>
                                    + Quiet Cell
                            </Button>
                                <Button variant="outline-secondary" onClick={this.props.addExcitedCell}>
                                    + Excited Cell
                            </Button>
                                <Button variant="danger" onClick={this.props.resetConfig} className='float-right'>
                                    Reset
                            </Button>
                            </ButtonGroup>
                        </ButtonToolbar>
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
                        <Button onClick={this.props.startSimulation}>Start Simulation</Button>
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

export default Inputs;