import * as types from '../constants/ActionTypes'

export const setCardVisibility = (id) => ({
	type: types.FLIP_CARD,
	id,
})