import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css';

export default class Card extends Component {

	static propTypes = {
		verso: PropTypes.bool,
	}

   	constructor(props) 
   	{
      super(props);
      this.state = { verso: false };
   	}

   	montrerVerso = (event) => {
		this.setState = { verso: true };
   	}

   	montrerRecto = (event) => {
		this.setState = { verso: false };
   	}

   	/*retournerCarte(){
   		if(this.state.verso){
   			this.montrerRecto();
   		}
   		else{
   			this.montrerVerso();
   		}
   	}*/
   	render () {

   		let contenu;
	   	this.state.verso ? 
	   		contenu = (<div>
				<div className="verso"> Texte B </div>
				<button type="button" onClick={this.montrerRecto}>Montrer A</button>
			</div>)
			:
		   	contenu = (<div>
				<div className="recto"> Texte A </div>
				<button type="button" onClick={this.montrerVerso}>Montrer B</button>
			</div>)

	   	return(
	   	<div>
	   		{contenu}
		</div>
		)
	}

}