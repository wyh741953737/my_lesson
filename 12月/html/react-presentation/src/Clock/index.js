import React  from 'react';
import propTypes from 'prop-types'
import Clock from './clock'
    export default class ClockContainer extends React.Component {
      //  接受外界props
    constructor(props){
        super(props);
        this.state={
            //把外部的props.time变成内部的。内部state改变，外界不变。
            time:props.time
        }
    }
        componentDidMount () {
          this._interval = setInterval(this._update , 1000)
        }
    _update =  () => {
        this.setState({
          time: new Date(this.state.time.getTime() + 1000)
        })
      }
_exact = (time) => {
        return {
          hours: time.getHours(),
          minutes: time.getMinutes(),
          seconds: time.getSeconds()
        }
      }    
  render() {
    //   const {hours,minutes,seconds}=this._exact(this.state.time)
    return (
    //   <div>
    //       {hours}:{minutes}:{seconds}
    //   </div>
    <Clock {...this._exact(this.state.time)}/>
    )
  }
}
ClockContainer.propTypes={
    time:propTypes.object.isRequired,

}