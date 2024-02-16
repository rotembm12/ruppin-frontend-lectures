function generateDataset() {
  let visitors = [
    {
      name: "John Smith",
      coins: 50,
    },
    {
      name: "Emily Johnson",
      coins: 50,
    },
    {
      name: "Michael Williams",
      coins: 50,
    },
    {
      name: "Jessica Brown",
      coins: 50,
    },
    {
      name: "Christopher Jones",
      coins: 50,
    },
    {
      name: "Ashley Davis",
      coins: 50,
    },
    {
      name: "Matthew Miller",
      coins: 50,
    },
    {
      name: "Amanda Wilson",
      coins: 50,
    },
    {
      name: "David Moore",
      coins: 50,
    },
    {
      name: "Sarah Taylor",
      coins: 50,
    },
    {
      name: "James Anderson",
      coins: 50,
    },
    {
      name: "Jennifer Thomas",
      coins: 50,
    },
    {
      name: "Robert Jackson",
      coins: 50,
    },
    {
      name: "Elizabeth White",
      coins: 50,
    },
    {
      name: "Daniel Harris",
      coins: 50,
    },
    {
      name: "Melissa Martin",
      coins: 50,
    },
    {
      name: "William Thompson",
      coins: 50,
    },
    {
      name: "Linda Garcia",
      coins: 50,
    },
    {
      name: "Joseph Martinez",
      coins: 50,
    },
    {
      name: "Karen Robinson",
      coins: 50,
    },
  ];

  let animals = [
    {
      name: "Lion",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Elephant",
      isPredator: false,
      weight: 1200,
      height: 200,
      color: "grey",
      habitat: "land",
    },
    {
      name: "Giraffe",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Tiger",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Monkey",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Kangaroo",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Penguin",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "sea",
    },
    {
      name: "Zebra",
      isPredator: false,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
    {
      name: "Cheetah",
      isPredator: true,
      weight: 100,
      height: 120,
      color: "brown",
      habitat: "land",
    },
  ];

  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  console.log(visitors);
}

generateDataset();

function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
