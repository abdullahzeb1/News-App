import React, { Component } from 'react';
import spinner from './spinner-2.gif';

export class Spanner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={spinner} alt='spinner' />
      </div>
    );
  }
}

export default Spanner;
