import React, { Component } from 'react';
import './App.css';
import Saisie from './components/saisie';
import Affichage from './components/affichage';
import Simulation from './components/simulation';
import { cellsReact } from './cellsReact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialConfiguration: [],
      currentConfiguration: [],
      k: 1,
      tmpk: 1,
      step: 0,
      simulation: []
    };
  }

  setStepValue = (newStepValue) => {
    this.setState({
      step: newStepValue,
      currentConfiguration: this.state.simulation[this.state.step]
    })
  }

  saveKvalue = (kInput) =>  {
    if (kInput > 0) {
      this.setState({ tmpk: kInput })
    }

  }

  saveInput = (newInput) => {
    this.setState({ initialConfiguration: newInput.split(',') });
  }

  addExcitedCell = () => {
    var newInitialConfiguration = this.state.initialConfiguration.concat('1');
    this.setState({ initialConfiguration: newInitialConfiguration })
  }

  addQuietCell = () => {
    var newInitialConfiguration = this.state.initialConfiguration.concat('0');
    this.setState({ initialConfiguration: newInitialConfiguration })
  }

  resetConfig = () => {
    this.setState({ initialConfiguration: [] })
  }

  startSimulation = () => {
    var tmp = cellsReact(this.state.initialConfiguration, this.state.tmpk);

    this.setState({
      simulation: tmp,
      k: this.state.tmpk,
      step: 0
    })
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Saisie
              configuration={this.state.initialConfiguration}
              addExcitedCell={this.addExcitedCell}
              addQuietCell={this.addQuietCell}

              tmpk={this.state.tmpk}
              saveKvalue={this.saveKvalue}
              resetConfig={this.resetConfig}
              startSimulation={this.startSimulation}></Saisie>
            <Affichage config={this.state.config}></Affichage>
            <Simulation
              k={this.state.k}
              setStepValue={this.setStepValue}
              simulation={this.state.simulation}
              step={this.state.step}
            ></Simulation>
          </Col>
        </Row>
      </Container >
    );
  }
}

export default App;
