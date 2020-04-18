import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Card.css';

export default class Card extends Component {

	static propTypes = {
      card: PropTypes.object.isRequired,
      retournerCarte: PropTypes.func.isRequired,
	}

      state = {
         verso: false,
         flipEffect: false,
         disable: false
      }

      retournerCarte = () =>{
         this.props.retournerCarte();
         this.setState({ verso: !this.state.verso, flipEffect:true })
      }

      disableCard = () =>{
         this.setState({disable: !this.state.disable, flipEffect:false});
      }

   	render () 
      {
      const data = this.props;
      const state = this.state;
      let texte = state.verso === false ? data.card.question : data.card.reponse;
      let disableSign = state.disable === false ? "fa-eye" : "fa-eye-slash";
		let contenu;

   	contenu = (
         <div>
            <div className={`div-card ${state.verso ? "verso" : state.flipEffect ? "recto" : ""} ${state.disable === false ? "enable" : "disable"}`} onClick={() => this.retournerCarte()}>
              <p>{texte}</p>
   		   </div>
            <i onClick={ () => this.disableCard() } className={`fa eye ${disableSign}`}></i>
         </div>
      )

   	return(
         <li className="card">
   		   {contenu}
         </li>
      )
	}

}