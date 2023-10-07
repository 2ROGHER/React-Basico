import React, { useState } from "react";
import {
  getAllUsers,
  getAllPageUsers,
  getUserDetails,
  login as loginFetch
} from "../../services/fetchService";

const FetchExample = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(12);
  const [usersPerPage, setUsersPerPage] = useState(6);
  const [pages, setPages] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  // Queremos que se ejecute una sola vez. Es decir que solamente
  // al inciar la app se ejecute la peticion o el request.
  useEffect(() => {
    obtainUsers();
  }, []);

  const obtainUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.status === 200 && response.ok) {
          setUsers(response.data);
          setPages(response.total_pages);
          setUsersPerPage(response.per_page);
          setTotalUsers(response.total);
        } else {
          console.log(`Something went wrong`);
        }
      })
      .cathc((error) => console.log(`Something went wrong: ${error}`))
      .finally(() => {
        alert(`Fetch successfuly completed`);
        console.table(users);
      });
  };

  const obtainPageUsers = () => {
    getAllPageUsers()
      .then((response) => {
        if (response.status === 200 && response.ok) {
          setUsers(response.data);
          setPages(response.total_pages);
          setUsersPerPage(response.per_page);
          setTotalUsers(response.total);
        } else {
          console.log(`Something went wrong`);
        }
      })
      .cathc((error) => console.log(`Something went wrong: ${error}`))
      .finally(() => {
        alert(`Fetch successfuly completed`);
        console.table(users);
      });
  };

  const obtainUserDetails = () => {
    getUserDetails
      .then((response) => {
        setSelectedUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    loginFetch('eve.holt@reqres.in', 'citylicka')
      .then((response) => {
        console.log('TOKEN', response.token);
        sessionStorage.setItem('token', response.token);
      })
      .catch((error) => {
        console.log(error);
        alert(`Error while login user: ${error}`);
      })
      .finally((done) => console.log("Finally login", done));
  }
  return (
    <div>
      <button onClick={loginFetch}>Auth user</button>
      <h1>All Users</h1>
      {users.map((u, i) => {
        return (
          <div index={i} onClick={() => obtainUserDetails(i)}>
            {u.first_name} {u.last_name}
          </div>
        );
      })}
      <p>
        Showing {usersPerPage} users of {totalUsers} in total.
      </p>
      <button
        onClick={() => {
          obtainPageUsers(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          obtainPageUsers(2);
        }}
      >
        2
      </button>

      <div>
        <h3>User Detail:</h3>
        {selectedUser && (
          <div>
            <p>{selectedUser.first_name}</p>
            <p>{selectedUser.last_name}</p>
            <p>{selectedUser.email}</p>
            <img src={selectedUser.avatar} alt="avatar" />
          </div>
        )}
      </div>

      <div>
        <h1>User Login</h1>

      </div>
    </div>
  );
};

export default FetchExample;
