import React from 'react'
import './LinkButton.css'

class LinkButton extends React.Component {
  render() {
    return (
      <div className="link-button">
        <span style={{textAlign:'left'}}>
          {this.props.title}
          <span style={{float:'right'}}>
            <b>{this.props.tailing}</b>
          </span>
        </span>
      </div>
    )
  }
}

export default LinkButton