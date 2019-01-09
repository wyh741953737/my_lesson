import React, { Component } from 'react';

class Form extends Component {
  constructor () {
    super();
    // 子组件, state
    this.initialState = {
      name: '',
      job: ''
    };
    this.state = this.initialState;
  }
  render () {
    // console.log(this.state);
    const { name, job } = this.state;
    return (
      <form className="form-group">
        <div className="form-field">
          <label>Name</label>
          <input    className="form-control"  type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          />
        </div>
        <div className="form-field">
          <label>job</label>
          <input
          className="form-control"
          name="job"
          value={job}
          onChange={this.handleChange}
          type="text"/>
        </div>
        <div className="form-field">
          <input
            type="button"
            value="Submit"
            onClick={()=>{this.submitForm()}}
            className="btn btn-primary"
            />
        </div>
      </form>
    );
  }
  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  }
  handleChange = event => {
    console.log(event.target);
    const { name , value} = event.target
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }
}

export default Form;