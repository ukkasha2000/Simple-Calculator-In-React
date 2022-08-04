import React, { Component } from 'react';

class ResultComponent extends Component {

  render() {
    let {result} = this.props;
    return (
      <div className="result">
        <p className='result-para'><span> {result} </span></p>
      </div>
    )
    ;
  }
}

export default ResultComponent;