let user = document.getElementById("user");
let posts = document.getElementById("posts");
let border = document.getElementsByClassName("userName");

console.log(user);
function getUsers() {
  let userRequest = new XMLHttpRequest();
  userRequest.open("get", "https://jsonplaceholder.typicode.com/users");
  userRequest.responseType = "json";
  userRequest.send();
  userRequest.onload = function () {
    console.log(userRequest.response);
    console.log(userRequest.response.length);
    if (userRequest.status < 200 && userRequest.status > 300) {
      user.innerHTML += `
    <div class="userName">
    
    <h3>Error while loading </h3></div>`;
    } else {
      for (i = 0; i < userRequest.response.length; i++) {
        user.innerHTML += `
      <div class="userName">
      
      <h3 onclick="getPosts(${i})">${userRequest.response[i].name} </h3></div>`;
      }
    }
  };
}
function getPosts(i) {
  console.log(i);

  console.log(border[i]);
  for (z = 0; z < border.length; z++) {
    border[z].style.backgroundColor = "white";
  }
  border[i].style.backgroundColor = "yellow";

  posts.innerHTML = "";
  let postsRequest = new XMLHttpRequest();
  postsRequest.open("get", "https://jsonplaceholder.typicode.com/posts");
  postsRequest.responseType = "json";
  postsRequest.send();
  postsRequest.onload = function () {
    console.log(postsRequest.response);
    let data = postsRequest.response.filter((p) => p.userId === i + 1);
    console.log(data);
    for (j = 0; j < data.length; j++) {
      posts.innerHTML += `<h2> ${data[j].title}</h2>
      <hr><hr>
      <h3>${data[j].body} </h3>
      <hr><hr><hr>`;
    }
  };
}
getUsers();
