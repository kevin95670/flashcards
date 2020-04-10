import * as types from '../constants/ActionsTypes'

export const setCardVisibility = (id) => ({
	type: types.FLIP_CARD,
	id,
})