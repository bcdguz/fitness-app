import { connect } from "react-redux"
import { signup } from "../../actions/session_actions"
import SessionForm from "./session_form"

const mapStateToProps = (state, ownProps) => {
  
  return {
    errors: state.errors.session,
    formType: 'signup',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => (dispatch(signup(user)))
  }
}

const SignUpFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignUpFormContainer;
