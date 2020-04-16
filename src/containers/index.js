import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retournerCarte } from '../actions/actions'
import Card from '../components/Card/Card'
//import { getVisibleTodos } from '../selectors'

const mapStateToProps = (state) => ({
	verso: state.verso,
	question: state.cardsData.cards[0].question,
	reponse: state.cardsData.cards[0].reponse,
	cards: state.cardsData.cards
})

const mapDispatchToProps = (dispatch) => ({
	retournerCarte: bindActionCreators(retournerCarte, dispatch),
})

const CardList = connect(
	mapStateToProps,
	mapDispatchToProps,
)(Card)

export default CardList