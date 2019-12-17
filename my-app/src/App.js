import React from 'react';
import './App.scss';
import { SessionLength } from './Components/SessionLength';
import { BreakLength } from './Components/BreakLength';
import { Controls } from './Components/Controls';
import { Display } from './Components/Display';

let secs = 1;
let mins = 25;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: "25:00",
      break: 5,
      session: 25,
      sessionStatus: "session",
      status: "stop",
    };
    this.handleTimer = this.handleTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    
    
  }
  
  
 handleTimer() {
   
    this.setState( state => {
      if (state.status === "stop") {
        return {status: "play"};
      } else {
        return {status: "stop"};
      }        
    })
   

     let countdown =  setInterval( () => {
        if (this.state.status == "stop") {
           clearInterval(countdown);
           return
        }
       
        if (!secs && !mins) {
          document.getElementById("beep").play();
          if (this.state.sessionStatus == "session") {
            mins = this.state.break;
            secs = 1;
            this.setState({
              sessionStatus: "break"           
            })          
          } 
          else {
              mins = this.state.session;
              secs = 1;
              this.setState({
                sessionStatus: "session"
              })         
          }  
        } 
       
        if (secs != 0) {secs = secs - 1}
         else {
          mins = mins - 1;
          secs = 59;
         }
       
       if (mins < 10 && secs < 10) {
         this.setState({
          timer: "0" + mins + ":" + "0" + secs
        });
       }
       else if (mins < 10) {
         this.setState({
          timer: "0" + mins + ":" + secs
        });
       } 
       else if (secs < 10) {
         this.setState({
          timer: mins + ":" + "0" + secs
        });
       } else
        this.setState({
          timer: mins + ":" + secs
        });
      }, 1000);
    
  }
  
  handleStop() {
    this.setState( state => {
      if (state.status === "stop") {
        return {status: "play"};
      } else {
        return {status: "stop"};
      }        
    })
  }
  
  handleReset() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    this.setState({
      timer: "25:00",
      break: 5,
      session: 25,
      sessionStatus: "session",
      status: "stop",
    })
      secs = 0;
      mins = 25;
  }
  
  breakDecrement() {
    if (this.state.break > 1 && this.state.status == "stop" )
      this.setState({
        break: this.state.break - 1
      })
  }
  
  breakIncrement() {
    if (this.state.break < 60 && this.state.status == "stop")
      this.setState({
        break: this.state.break + 1
      })
  }
  
  sessionDecrement() {
    if (this.state.session > 1 && this.state.status == "stop") {
      if (this.state.session < 11) {
        this.setState ({
         session: this.state.session - 1,
         timer: "0" + (this.state.session - 1) + ":00" 
        })
      } else {
      this.setState({
        session: this.state.session - 1,
        timer: (this.state.session - 1) + ":00"
      })};
        mins -= 1;
    }
       
    
      
  }
  
  sessionIncrement() {
    if (this.state.session < 60 && this.state.status == "stop") {
      if (this.state.session < 9) {
        this.setState ({
         session: this.state.session + 1,
         timer: "0" + (this.state.session + 1) + ":00" 
        })
       } else
         {
      this.setState({
        session: this.state.session + 1,
        
        timer: (this.state.session + 1) + ":00"
      }) }
        mins += 1;
    }
  }
  
  
  render() {
     
       
    return (
      <div id="main">
        <div id="main-container">
          
            <div id="left-container">
              
              <Display timer={this.state.timer} sessionStatus={this.state.sessionStatus} />
              <Controls handleTimer={this.handleTimer} handleReset={this.handleReset} />
          </div>
          <div id="right-container">
            <BreakLength breakLength={this.state.break} breakDecrement={this.breakDecrement} breakIncrement={this.breakIncrement} />
            
            <SessionLength sessionLength={this.state.session} sessionDecrement={this.sessionDecrement} sessionIncrement={this.sessionIncrement} />
            </div>
            
          </div>
        
        <audio id="beep" src="http://soundbible.com/grab.php?id=1252&type=mp3"></audio>
      </div>
    )
  }
}

export default App;
