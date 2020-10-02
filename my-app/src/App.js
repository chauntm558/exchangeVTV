//import all dependences
import React, {Component} from 'react';
//import logo from './logo.svg';
import AppCtl from './app/components/app/component'
//import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// define a component ( extends Component )
class App extends Component{
  state = {
    mainTemplate: [
      {id: "01", title:"Slider Banner"},
      {id: "02", title:"Product Category"},
      {id: "03", title:"onAir Video"},
      {id: "04", title:"New Arrial"},
      {id: "05", title:"weekly's Hotdeal"},
      {id: "06", title:"Suggest Today"}
    ]
  }
  /*
  this.setState({
    mainTemplate: [
      {id: "07", title:"Slider Banner"},
      {id: "08", title:"Product Category"}
    ]
  })
  */
  clickMeHere = (newChange) => {
    this.setState(
      {
        mainTemplate: [
          {id: "07", title:newChange},
          {id: "02", title:"Product Category"},
          {id: "03", title:"onAir Video"},
          {id: "04", title:"New Arrial"},
          {id: "05", title:"weekly's Hotdeal"},
          {id: "06", title:"Suggest Today"}
        ]
      }
    )
  }
  changeTheTitle = (event) => {
    this.setState(
      {
        mainTemplate: [
          {id: "07", title: event.target.value},
          {id: "02", title:"Product Category"},
          {id: "03", title:"onAir Video"},
          {id: "04", title:"New Arrial"},
          {id: "05", title:"weekly's Hotdeal"},
          {id: "06", title:"Suggest Today"}
        ]
      }
    )
  }
  render(){
    const styleMain ={
      backgroundColor: '#f0ffff',
      fontSize: '15px',
      padding: '15px'
    }
    return(
      <div className="App">
        {/* <header className="App-header">
          <p>
          Learn new thing 02/10/2020
          </p>
          <p>Hi guys! have a nice days! ^^</p>
          <span>THis is my number random test view:</span>{ Math.floor(Math.random()*15 ) }} 
        </header> */}
        <header>
          <div className="header_top clearfix">
            <div className="col-xs-6">
              <a className="logo"href={"/page"}>
                {/* <Image src="giticon.png" className="githubIcon" /> */}
                {/* <img src={""} alt="Logo" /> */}
                VTV-HYUNDAI HOME SHOPPING
              </a>
            </div>
            <div className="col-xs-6">
              <ul className="list_icon">
                <li>
                  <a href={"/page"} className="toggle-search" style={{display: 'none'}}>
                    <span className="lnr lnr-magnifier"></span>
                  </a>
                </li>
                <li>
                  <a id="user-profile" href="" className="offcanvas__trigger--open" data-offcanvas-open="side-my-account" >
                    <span className="lnr lnr-user"></span></a>
                </li>
                <li>
                  <a href={"/page/cart"}>
                    <i className="lnr lnr-cart"></i>
                    <span className="badge" dangerouslySetInnerHTMLL="currentUser.cartDbCnt"></span> 
                  </a>
                </li>
              </ul>
            </div>
            <div className="header_bot_nav container search-container ">
              <a className="offcanvas__trigger--open hamburger_menu" data-offcanvas-open="side-main-menu">
                <span className="lnr lnr-menu"></span>
              </a>
              <nav>
                <form role="search" ng-submit="submitSearch()">
                  <input className="form-control" id="search-bar" ng-model="search.text" placeholder={"Searching..."}/>
                  {/* <button type='sunmit'><span className="lnr lnr-magnifier"></span></button> */}
                </form>
              </nav>
            </div>
          </div>
          <div class="header_bot clearfix">
            <ul>
              <li><a href={"page/newarrival"}>Sản phẩm mới</a></li>
              <li><a onclick={"calEventPage()"}>Khuyến mãi </a></li>
              <li><a href={"page/tvhotdeal"}>Lịch phát sóng</a></li>
              <li><a href={"page/hotdeal"}>Hot deal</a></li>
            </ul>
          </div>
        </header>
        <div 
          className="wapper-page"
          style={styleMain}
          >
            {/* <AppCtl 
              text="this is your text content." 
              name={this.state.mainTemplate[0].title}
              clickMethod={ this.clickMeHere }
              >
              This is your modal.
            </AppCtl> */}
            <AppCtl 
              text="Test for onChange events" 
              change={this.changeTheTitle}
              >
              This is your modal.
            </AppCtl>
        </div>
        <button className="btn btn-md btn-warning" onClick={ this.clickMeHere.bind(this, "New branch") }>BIND BUTTOn</button>
        {/* onClick: should use synctax #1: "()=> this.clickMeHere()" ; #2: "this.clickMeHere" to refuse the re-render in react */}
      </div>
    )
  }
}

//export App to use in the internal environment
export default App;
