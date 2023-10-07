import React from "react";
import { connect } from "react-redux";
import LoginForm from "../pure/LoginForm";
import {} from "../../";
import { httpRequest } from "../../redux/actions/AsyncActions";
const mapStateToProps = (state) => {
  return {
    loged: state.userState.loged,
    fetching: state.userState.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => {
      let data = {
        email: email,
        password: password,
      };
      const url = "https://reqres.in/api/login";
      dispatch(httpRequest("POST", url, data));
    },
  };
};

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer;
