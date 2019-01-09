import React from 'react'
import PropTypes from 'prop-types'
export default function Clock(props){
 var  [hours,minutes,seconds]=[props.hours,props.minutes,props.seconds].map(num=>num<10? '0'+num:num);
    return  <h1>{hours}:{minutes}:{seconds}</h1>
}
Clock.prototype={
    hours:PropTypes.number.isrequired,
    minutes:PropTypes.number.isrequired,
    seconds:PropTypes.number.isrequired,

}

