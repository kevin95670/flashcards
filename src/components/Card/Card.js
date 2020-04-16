import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css';

export default class Card extends Component {

	static propTypes = {
		verso: PropTypes.bool.isRequired,
      question: PropTypes.string.isRequired,
      reponse: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(PropTypes.object).isRequired,
      retournerCarte: PropTypes.func.isRequired,
	}

      state = {
         verso: false,
      }

      retournerCarte = () =>{
         this.props.retournerCarte();
      }

   	render () 
      {
      console.log(this.props.cards);
      const retourner = this.props;
      let texte;
      retourner.verso === false ? texte = retourner.question : texte = retourner.reponse;
		let contenu;

   	contenu = (
         <div>
			  <div className="card"> {texte} </div>
			  <button type="button" onClick={() => this.retournerCarte()}>Retourner</button>
		   </div>
      )

   	return(
         <div>
   		   {contenu}
         </div>
      )
	}

}