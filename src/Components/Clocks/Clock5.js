import React from "react";
import "./Clock.css";
import clock from "../../assets/clock.png"
import clock2 from "../../assets/newClock.png"

class Clock5 extends React.Component {
    state = {
      time: new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Novosibirsk"})),
      secondHandRotations: 0
    }
    
  
    componentDidMount() {
      this.interval = setInterval(
        () => this.setState(prevState => (
          {
            time: new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Novosibirsk"})),
            secondHandRotations: new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Novosibirsk"})).getSeconds() ? prevState.secondHandRotations : prevState.secondHandRotations + 1
          }
        )),
        100
      );
    }
    
    render(){
      const { time, secondHandRotations } = this.state;
      const currentDateString = time.toLocaleString("en-US", {timeZone: "Asia/Novosibirsk"});
      const secondsRotation = time.getSeconds() * 6;
      const minuteRotation = time.getMinutes() * 6;
      const currentHour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
      const hourRotation = currentHour * 30;
      
      return(
        <React.Fragment>
          <div className="clock-face">
          <img  src={clock}/>
            <div 
              style={{
                transform: `translate(0, -50%) rotate(${hourRotation}deg)`,
                transition: `all ${hourRotation ? 100 : 0}ms cubic-bezier(1, 0.25, 0.63, 1.85)`
              }}
              className="hand hour-hand"
            />
            <div 
              style={{
                transform: `translate(0, -50%) rotate(${minuteRotation}deg)`,
                transition: `all ${minuteRotation ? 100 : 0}ms cubic-bezier(1, 0.25, 0.63, 1.85)`
              }}
              className="hand minute-hand"
            />
            <div 
              style={{transform: `translate(0, -50%) rotate(${secondsRotation}deg)`}}
              className="hand second-hand"
            />
            
          </div>
        </React.Fragment>
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  }

  export default Clock5;
  
  