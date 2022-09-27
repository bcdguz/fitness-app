import { connect } from "react-redux"
import SessionForm from "./session_form"

const mapStateToProps = (state, ownProps) => {
  
  return {
    errors: state.errors.session,
    formType: 'login',
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => (dispatch(login(user)))
  }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;
