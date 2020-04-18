import { FLIP_CARD } from '../constants/ActionsTypes'
import cardsData from  '../data/cards-data';

const initialState = {
	cardsData
}

const flipReducer = (state = initialState, action) => {
	switch (action.type) {
		case FLIP_CARD:
			if(state.verso){
				return Object.assign({},state, {
                    texte: cardsData.cards.question
                  });
			}
			else{
				return Object.assign({},state, {
                    texte: cardsData.cards.reponse
                  });
			}
		default:
			return state
	}
}

export default flipReducer