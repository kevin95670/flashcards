import * as types from '../constants/ActionsTypes'

export const setCardsSide = (id) => ({
	type: types.FLIP_CARD,
	id,
})