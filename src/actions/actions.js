import * as types from '../constants/ActionsTypes'

export const retournerCarte = (id) => ({
	type: types.FLIP_CARD,
	id: id
})