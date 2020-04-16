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
				console.log(cardsData.cards[0].question)
				return Object.assign({},state, {
                    verso: false,
                    texte: cardsData.cards[0].question
                  });
			}
			else{
				console.log(cardsData.cards[0].reponse)
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