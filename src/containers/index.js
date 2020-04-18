import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as retournerCarte from '../actions/actions'
import CardList from '../components/Card/CardList'

const mapStateToProps = (state) => ({
	cards: state.cardsData.cards,
})

const mapDispatchToProps = (dispatch) => ({
	retournerCarte: bindActionCreators(retournerCarte, dispatch),
})

const CardContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(CardList)

export default CardContainer