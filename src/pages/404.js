import React, { Component } from 'react';

class FourOhFour extends Component {
  render() {
    return (
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <h1
          css={{
            fontFamily: "'Georgia', sans-serif",
            textAlign: 'center',
            color: '#1c1c1c',
            fontSize: '24px',
            lineHeight: '30px',
          }}
        >
          This isn't a red pill, blue pill situation.<br />
          &larr; Stick to the menu.
        </h1>
      </div>
    );
  }
}

export default FourOhFour;
