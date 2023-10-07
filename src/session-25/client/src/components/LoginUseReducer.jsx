import React, { useReducer } from "react";

// Actions
const FIELD = "FIELD";
const LOGIN = "LOGIN";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";
const LOGOUT = "LOGOUT";

// estado inicial de la app
const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
};

// Functio que va a ser nuestro reducre
const loginReducer = (state, action) => {
  switch (action.type) {
    case FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldName,
      };
    case LOGIN:
      return {
        ...state,
        error: "",
        isLoading: true,
        isLoggedIn: false,
      };

    case SUCCESS:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: true,
      };
    case ERROR:
      return {
        ...state,
        error: `Invalid username or password`,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };
    case LOGOUT:
      return {
        ...state,
        error: "",
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
      };

    default:
      return state;
  }
};
const LoginUseReducer = () => {
    
  const [state, dispatch] = useReducer(loginReducer, initialState);
  // obtain all variables from state
  const { username, password, error, isLoading, isLoggedIn } = state;

  // submit
  const submit = async (e) => {
    e.preventDefault();

    // dispatch login action
    dispatch({ type: LOGIN });

    try {
      await function login({ username, password }) {
        return Promise((resolve, reject) => {
          setTimeout(() => {
            if (username === "admin" && password === "admin") {
              resolve();
            } else {
              reject();
            }
          }, 2000);
        });
      };
      dispatch({ type: SUCCESS });
    } catch (error) {
      dispatch({ type: ERROR });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <div className="App">
      <div>
        {isLoggedIn ? (
          <div>
            <h1>
              Wellcome, {username}
              <button onClick={logout}>Logout</button>
            </h1>
          </div>
        ) : (
          <form onSubmit={submit}>
            {error && <p style={{ color: "tomato" }}>{error}</p>}
            <input
              type="text"
              placeholder="username"
              id="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldName: "username",
                  payload: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: FIELD,
                  fieldName: "password",
                  payload: e.target.value,
                })
              }
            />

            <button type="submit">{isLoading ? "Logging" : "Login"}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginUseReducer;
