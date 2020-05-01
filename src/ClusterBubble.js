import React from 'react'
import './ClusterBubble.css'

class ClusterBubble extends React.Component {
  render() {
    return (
      <div style={{
        width:`${this.props.radius*2}px`, 
        height:`${this.props.radius*2}px`, 
        top:`${this.props.y}px`, left:`${this.props.x}px`,
        borderWidth: '1px',
        lineHeight:`${this.props.radius*2}px`,
        backgroundColor: this.props.active ? '#2f2f2f' : '#e0e0e0',
        color: this.props.active ? 'white' : 'black',
        }} 
        className="bubble">
        <div className='label'>
          {this.props.number} {this.props.name} ({this.props.percentage}%)
        </div>
      </div>
    )
  }
}

export default ClusterBubble