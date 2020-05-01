import React from 'react'

class Card extends React.Component {
  render() {
    const card = {
      backgroundColor: 'white',
      padding: '15px 25px 1px',
      margin: '10px',
      borderRadius: '20px',
      boxShadow: '0px 4px 100px 0px rgba(0,0,0,0.1)',
    }

    return (
      <div style={card}>
        <p style={{fontSize:"20px", fontWeight:'bolder'}}>{this.props.title}</p>
        {this.props.children}
      </div>
    )
  }
}

export default Card