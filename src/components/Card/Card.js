import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Card extends Component {

	static propTypes = {
		verso: PropTypes.bool.isRequired,
	}

   	constructor(props) 
   	{
      super(props);
      this.state = { verso: false };
   	}

   	montrerVerso(){
		this.state = { verso: true };
   	}

   	montrerRecto(){
		this.state = { verso: false };
   	}

   	retournerCarte(){
   		if(this.state.verso){
   			this.montrerRecto();
   		}
   		else{
   			this.montrerVerso();
   		}
   	}

}