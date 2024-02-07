const form = document.querySelector("form");
const users = [
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
  {
    name: "qwdqw",
    email: "sdfsdfs@asdfas.com",
    number: "1231",
    gender: "female",
    subscribe: true,
  },
];
function addNewUserToArray(form) {
  console.log(form.elements);
  const nameInput = form.elements["user-name"];
  const email = form.elements["user-email"];
  const number = form.elements["user-number"];
  const gender = form.elements.gender;
  const subscribeInput = form.elements.subscribe;

  const user = {
    name: nameInput.value,
    email: email.value,
    number: number.value,
    gender: gender.value,
    subscribe: subscribeInput.checked,
  };
  users.push(user);
  console.log(users);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const form = document.querySelector("form");
  addNewUserToArray(form);
});

///////////////// ARRAY ACTIONS
const foreachActionButton = document.getElementById("foreach");
const mapActionButton = document.getElementById("map");
const filterActionButton = document.getElementById("filter");
const findActionButton = document.getElementById("find");

foreachActionButton.addEventListener("click", () => {
  users.forEach((user) => {
    console.log(user.name);
  });
});

mapActionButton.addEventListener("click", () => {
  const userNames = users.map((user) => {
    return `<div>${user.name}</div>`;
  });

  printToUsersTable(userNames);
  // users.map((user) => {
  //   return { user: user, posts: [] };
  // })
});

filterActionButton.addEventListener("click", () => {
  const femaleUsers = users.filter((user) => {
    return user.gender === "male";
  });
  printToUsersTable(femaleUsers);
});

findActionButton.addEventListener("click", () => {
  const femaleUser = users.find((user) => {
    return user.gender === "female";
  });
  console.log(femaleUser);
});

function printToUsersTable(users) {
  const usersTable = document.getElementById("users-table");
  usersTable.innerHTML = userNames.join(" ");
}
