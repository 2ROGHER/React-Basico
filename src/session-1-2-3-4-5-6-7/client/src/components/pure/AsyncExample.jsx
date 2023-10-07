import React from "react";

const AsyncExample = () => {
  async function generateNumber() {
    return 1;
  }

  function obtainNumber() {
    generateNumber().then((res) => alert(`Response: ${res}`));
  }

  async function generatePromiseNumber() {
    // aqui le decimos estrictamente qeu este es una promesa.
    return Promise.resolve(2);
  }

  function obtainPromiseNumber() {
    generatePromiseNumber
      .then((res) => alert(`Response: ${res}`))
      .catch((err) => alert(`Somethin went wrong: ${err}`));
  }
    

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    // con esto le decimos que devuelva una promesa en cuanto termine de realizar el proceso
    // asyncronico.
    return Promise.resolve(sessionStorage.getItem(key));
  }


  function showStorage() {
    saveSessionStorage("name", "Roger")
      .then((res) => alert(`Response: ${res}`))
      .catch((err) => alert(`Error: ${err}`))
      .finally(() => console.log("Name saved and retrevied successfuly"));
  };

  const returnError = async () => {
    await new Promise((resolve, reject) => {
        reject(new Error(`Oooops!.`))
    })
  };

  const consumeError = () => {
    returnError()
        .then((res) => alert(`All was success ${res}`))
        .catch((err) => alert(`Something went wrong` + err))
        .finally(() => alert(`Finally asynchronous process`));

  };


  const urlNotFound = async () => {

    try {
        let response = await fetch(`https://invalidURL`);
        alert(`Response:  ${JSON.stringify(response)}`);
    } catch (error) {
        alert(`Something went wrong with your URL: ${error}`)
    }
  };
  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello world!");
        }, 2000);
    });

    let message = await promise;
    await alert(`Message received: ${message}`);
  };

  const multiplePromise = async () => {

    let result = await Promise.all(
        [
            fetch('https://reqres.in/api.users'),
            fetch('https://reqres.in/api/users?page=2')
        ]
    )
    .catch((error) => alert(`Something went wrong with your URLs: ${error.message}`));
  }
  return (
    <div>
      <button onClick={obtainNumber}>Obtain number</button>
      <button onClick={obtainPromiseNumber}>Obtain promise number</button>
      <button onClick={showStorage}>Show storage</button>
      <button onClick={obtainMessage}>Obtain promise message</button>
      <button  onClick={consumeError}>Consume Error</button>
      <button onClick={urlNotFound}>Request  HTTP</button>
      <button onClick={multiplePromise}>Get all Promises</button>
    </div>
  );
};

export default AsyncExample;
