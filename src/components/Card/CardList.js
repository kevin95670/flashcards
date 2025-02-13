import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'

const CardList = ({ cards, retournerCarte }) => (
	<ul className="cards-list">
		{cards.map((card) =>
			<Card key={card.id} card={card} {...retournerCarte} />)}
	</ul>
)

CardList.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		question: PropTypes.string.isRequired,
		reponse: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	retournerCarte: PropTypes.object.isRequired,
}

export default CardList