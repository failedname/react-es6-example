import React from 'react'
import Row from '../empleado-row'

class List extends React.Component{
	render(){
		return(

				<div className="container-fluid">
			        <ul className="media-list">
			          {
			            this.props.listado.map((empleado) => {
			              return <Row key={ empleado.id }
			                                  name={ empleado.fullName }
			                                  picture={ empleado.pic }
			                                  title={ empleado.title }
			                                  department={ empleado.department } />
			            })
			          }
			        </ul>
			      </div>

			)
	}
}


export default List