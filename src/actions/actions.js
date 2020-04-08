import * as types from '../constants/ActionTypes'

export const setCardVisibility = (side) => ({
	type: types.FLIP_CARD,
	side,
})