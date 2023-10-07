import React, { useEffect, useState } from "react";
import getRandomUser from "../../services/axiosService";

const AxiosExample = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("log: me subi al DOM ");
    // Se genera en primer lugar el user.
    generateUser();
  }, []);

  const generateUser = () => {
    getRandomUser
      .then((response) => {
        if (response.status === 200) setUser(response.data.results[0]);
        else alert(`Something went wrong`);
      })
      .catch((error) => console.log(`Something went error: ${error}`));
  };

  return (
    <div>
      <h1>*** Axios Example ***</h1>
      {user ? (
        <div>
          <img src={user.picture.large} alt="" />
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <h3>{user.email}</h3>
        </div>
      ) : (
        <div>
          <p>Generate a new User</p>
          <button onClick={generateUser}>Generate</button>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
