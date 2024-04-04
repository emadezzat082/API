let submit = document.getElementById("submit");

console.log(submit);

submit.addEventListener("click", function () {
  //   event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  axios
    .post("https://reqres.in/api/register", {
      email: email,
      password: password,
    })
    .then((res1) => {
      console.log(res1);
      token = res1.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      alert("congratulations! you singed in to our website");
    })
    .catch((error) => {
      console.log(error);
      console.log(email);
      console.log(password);
      alert(error.response.data.error);
    });
});
