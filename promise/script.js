let user = document.getElementById("user");
let posts = document.getElementById("posts");
let border = document.getElementsByClassName("userName");
function getUsers() {
  /*
  To make the getusers return a promise then return the posts instead of
   getting the posts data when the event onclick happens
    return new promise(function(resolve,reject){
        fetch(api).then(data) resolve
        at the end of getUsers.then((posts)=>{
            getPosts()
        })
    })

    */
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (res.ok == true) {
        return res.json();
      }
    })
    .then((data) => {
      console.log(data);
      for (i = 0; i < data.length; i++) {
        user.innerHTML += `
    <div class="userName" onclick="getPosts(${i})">
    <h3>${data[i].name} </h3>
    <h3>${data[i].email} </h3>
    <h3>${data[i].website} </h3>
    </div>`;
      }
    })
    .catch((e) => {
      console.log(e);
      user.innerHTML = "<h1> error while loading</h1>";
    });
}
function getPosts(i) {
  console.log(i);

  console.log(border[i]);
  for (z = 0; z < border.length; z++) {
    border[z].style.backgroundColor = "white";
  }
  border[i].style.backgroundColor = "yellow";

  posts.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (res.ok === true) {
        return res.json();
      }
    })
    .then((postsData) => {
      let userPosts = postsData.filter((p) => p.userId === i + 1);
      console.log(userPosts);
      for (j = 0; j < userPosts.length; j++) {
        posts.innerHTML += `<h2> ${userPosts[j].title}</h2>
                 <hr><hr>
                 <h3>${userPosts[j].body} </h3>
                 <hr><hr><hr>`;
      }
    })
    .catch((e) => {
      console.log(e);
      posts.innerHTML = "<h1> error while loading</h1>";
    });
}
getUsers();
