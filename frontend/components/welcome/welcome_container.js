import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import Welcome from "./welcome"

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.entities.users[state.session.currentUserId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

const WelcomeContainer = connect(mapStateToProps, mapDispatchToProps)(Welcome);
export default WelcomeContainer;
