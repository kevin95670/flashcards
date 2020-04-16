import { FLIP_CARD } from '../constants/ActionsTypes'
import cardsData from  '../data/cards-data';

const initialState = {
	verso: false,
	cardsData
}

const flipReducer = (state = initialState, action) => {
	switch (action.type) {
		case FLIP_CARD:
			if(state.verso){
				return Object.assign({},state, {
                    verso: false,
                    texte: cardsData.cards[0].question
                  });
			}
			else{
				return Object.assign({},state, {
                    verso: true,
                    texte: cardsData.cards[0].reponse
                  });
			}
		default:
			return state
	}
}

export default flipReducer