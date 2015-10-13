import React from 'react'
import ReactDOM from 'react-dom'


class Avatar extends React.Component{
	render() {

    let picture = this.props.picture;

    return (
      <figure className="media-left">
        <img className="media-object" width="64px"  />
      </figure>
    )
  }
}
export default Avatar