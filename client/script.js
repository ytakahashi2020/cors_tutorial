console.log("Hello from script.js");

const fetchDataFromServer = () => {
  fetch("http://localhost:8000/data", {
    credentials: "include",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    }); //
};

fetchDataFromServer();
