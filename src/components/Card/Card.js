import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css';

export default class Card extends Component {

	static propTypes = {
      card: PropTypes.object.isRequired,
      retournerCarte: PropTypes.func.isRequired
	}

      state = {
         verso: false,
      }

      retournerCarte = (id) =>{
         this.props.retournerCarte(id);
      }

   	render () 
      {
      console.log(this.props.retournerCarte);
      const retourner = this.props;
      let texte;
      this.state.verso === false ? texte = retourner.card.question : texte = retourner.card.reponse;
		let contenu;

   	contenu = (
         <div>
			  {texte}
           <button onClick={() => this.retournerCarte(retourner.card.id)} >Flip</button>
		   </div>
      )

   	return(
         <li className="card">
   		   {contenu}
         </li>
      )
	}

}