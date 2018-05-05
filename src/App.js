import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootswatch/dist/flatly/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
{ name:"Anchorage", zip:"99574" },
{ name:"Sunnyvale", zip:"94088" },
{ name:"Tehuacán", zip:"69000" },
{ name:"Sievierodonetsk", zip:"92341" },
{ name:"Nuremberg", zip:"92342" },



]



class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Current Wether at WetherSide 24/7 " />
          <h1 className="App-title">React.Wether 24/7</h1>
        </header>
        <div>
  ♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀ 
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        React Simple Weather App
      </Navbar.Brand>
    </Navbar.Header>
      </Navbar>
  <Grid> 
    <Row>
      <Col md={4} sm={4}>
        <h3>Select a city</h3>
        <Nav
          bsStyle="pills"
          bsSize="large"
          stacked
          activeKey={activePlace}
          onSelect={index => {
            this.setState({ activePlace: index });
          }}
        >
          {PLACES.map((place, index) => (
            <NavItem bsStyle="pills" bsSize="large"  key={index} eventKey={index}>{place.name}</NavItem>
          ))}
        </Nav>
      </Col>
      <Col md={8} sm={8}> 
          <WetherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
     
      </Col>
    </Row>
  </Grid>
 
</div>
 
  
          ♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀♂♀

      </div>
    );
  }
}

class WetherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      wetherDisplay: null
    };
  }
  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q="  +
    zip + 
     "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
     fetch(URL).then(res => res.json()).then(json =>{
      this.setState({ weatherData: json });
     });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div> Loading</div>;
       const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
        <div> 
          <h1>
            {weather.main} in {weatherData.name}
            <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p> Current: {weatherData.main.temp}• </p>
            <p>High: {weatherData.main.temp_max}• </p>
            <p>Low: {weatherData.main.temp_min}•</p>
            <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>
            </div>
                  );
 

  }
}

export default App;
