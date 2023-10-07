import React from "react";

const LoginUseState = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
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
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (error) {
      setError(`username or password invalid:  ${error}`);
      setIsLoading(false);
      setUsername("");
      setPassword(""); // reset the fields
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsLoading(false);
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
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">{isLoading ? "Logging" : "Login"}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginUseState;
