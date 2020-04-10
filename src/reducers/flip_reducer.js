import { FLIP_CARD } from '../constants/ActionsTypes'

const cardsVisibility = (state, action) => {
	switch (action.type) {
		case FLIP_CARD:
			return action.id
		default:
			return state
	}
}

export default cardsVisibility