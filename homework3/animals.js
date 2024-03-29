const animals = [
  {
    name: "Lion 1",
    type: "Bird",
    color: "Golden",
    size: { width: 3.7, height: 2.0, weight: 4950.29 },
    food: "Fruits",
    isPredator: true,
    image: "https://placeholder.com/images/lion_1.jpg",
  },
  {
    name: "Tiger 2",
    type: "Insect",
    color: "Black and White",
    size: { width: 4.41, height: 1.66, weight: 2628.05 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/tiger_2.jpg",
  },
  {
    name: "Bear 3",
    type: "Mammal",
    color: "Red",
    size: { width: 0.32, height: 2.19, weight: 1243.57 },
    food: "Meat",
    isPredator: true,
    image: "https://placeholder.com/images/bear_3.jpg",
  },
  {
    name: "Elephant 4",
    type: "Fish",
    color: "Golden",
    size: { width: 3.59, height: 2.08, weight: 3780.36 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/elephant_4.jpg",
  },
  {
    name: "Giraffe 5",
    type: "Bird",
    color: "Golden",
    size: { width: 2.99, height: 2.67, weight: 4509.84 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/giraffe_5.jpg",
  },
  {
    name: "Zebra 6",
    type: "Insect",
    color: "Grey",
    size: { width: 1.39, height: 2.42, weight: 3612.21 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/zebra_6.jpg",
  },
  {
    name: "Panda 7",
    type: "Bird",
    color: "Red",
    size: { width: 2.22, height: 0.26, weight: 4580.33 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/panda_7.jpg",
  },
  {
    name: "Monkey 8",
    type: "Fish",
    color: "Blue",
    size: { width: 2.93, height: 0.7, weight: 4445.35 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/monkey_8.jpg",
  },
  {
    name: "Kangaroo 9",
    type: "Reptile",
    color: "Grey",
    size: { width: 2.95, height: 1.16, weight: 344.3 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/kangaroo_9.jpg",
  },
  {
    name: "Penguin 10",
    type: "Insect",
    color: "Golden",
    size: { width: 2.2, height: 2.7, weight: 3412.28 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/penguin_10.jpg",
  },
  {
    name: "Parrot 11",
    type: "Bird",
    color: "Golden",
    size: { width: 0.97, height: 2.64, weight: 4776.16 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/parrot_11.jpg",
  },
  {
    name: "Snake 12",
    type: "Mammal",
    color: "Green",
    size: { width: 4.6, height: 2.06, weight: 1128.57 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/snake_12.jpg",
  },
  {
    name: "Crocodile 13",
    type: "Insect",
    color: "Orange",
    size: { width: 1.42, height: 0.34, weight: 1513.85 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/crocodile_13.jpg",
  },
  {
    name: "Frog 14",
    type: "Amphibian",
    color: "Black and White",
    size: { width: 1.19, height: 0.4, weight: 185.53 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/frog_14.jpg",
  },
  {
    name: "Wolf 15",
    type: "Reptile",
    color: "Red",
    size: { width: 1.25, height: 0.15, weight: 386.8 },
    food: "Fruits",
    isPredator: true,
    image: "https://placeholder.com/images/wolf_15.jpg",
  },
  {
    name: "Fox 16",
    type: "Reptile",
    color: "Yellow and Brown",
    size: { width: 4.37, height: 2.08, weight: 3990.9 },
    food: "Nectar",
    isPredator: true,
    image: "https://placeholder.com/images/fox_16.jpg",
  },
  {
    name: "Rabbit 17",
    type: "Fish",
    color: "Black and White",
    size: { width: 0.41, height: 2.84, weight: 4734.41 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/rabbit_17.jpg",
  },
  {
    name: "Deer 18",
    type: "Bird",
    color: "Blue",
    size: { width: 2.59, height: 2.21, weight: 588.74 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/deer_18.jpg",
  },
  {
    name: "Hippo 19",
    type: "Reptile",
    color: "Blue",
    size: { width: 3.12, height: 1.12, weight: 714.48 },
    food: "Meat",
    isPredator: false,
    image: "https://placeholder.com/images/hippo_19.jpg",
  },
  {
    name: "Rhinoceros 20",
    type: "Insect",
    color: "Orange",
    size: { width: 1.19, height: 1.9, weight: 411.19 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/rhinoceros_20.jpg",
  },
  {
    name: "Eagle 21",
    type: "Mammal",
    color: "Green",
    size: { width: 0.69, height: 0.8, weight: 2921.43 },
    food: "Insects",
    isPredator: true,
    image: "https://placeholder.com/images/eagle_21.jpg",
  },
  {
    name: "Owl 22",
    type: "Mammal",
    color: "Black and White",
    size: { width: 0.61, height: 1.48, weight: 4391.18 },
    food: "Nectar",
    isPredator: true,
    image: "https://placeholder.com/images/owl_22.jpg",
  },
  {
    name: "Flamingo 23",
    type: "Mammal",
    color: "Red",
    size: { width: 3.77, height: 2.91, weight: 4873.88 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/flamingo_23.jpg",
  },
  {
    name: "Shark 24",
    type: "Fish",
    color: "Blue",
    size: { width: 0.19, height: 0.16, weight: 4472.49 },
    food: "Nectar",
    isPredator: false,
    image: "https://placeholder.com/images/shark_24.jpg",
  },
  {
    name: "Dolphin 25",
    type: "Mammal",
    color: "Orange",
    size: { width: 4.24, height: 1.97, weight: 1631.58 },
    food: "Meat",
    isPredator: false,
    image: "https://placeholder.com/images/dolphin_25.jpg",
  },
  {
    name: "Lion 26",
    type: "Reptile",
    color: "Golden",
    size: { width: 3.74, height: 2.33, weight: 2500.83 },
    food: "Nectar",
    isPredator: true,
    image: "https://placeholder.com/images/lion_26.jpg",
  },
  {
    name: "Tiger 27",
    type: "Bird",
    color: "Orange",
    size: { width: 4.4, height: 1.96, weight: 2131.79 },
    food: "Meat",
    isPredator: true,
    image: "https://placeholder.com/images/tiger_27.jpg",
  },
  {
    name: "Bear 28",
    type: "Fish",
    color: "Golden",
    size: { width: 3.57, height: 0.35, weight: 870.5 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/bear_28.jpg",
  },
  {
    name: "Elephant 29",
    type: "Mammal",
    color: "Orange",
    size: { width: 4.54, height: 1.01, weight: 1558.21 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/elephant_29.jpg",
  },
  {
    name: "Giraffe 30",
    type: "Fish",
    color: "Grey",
    size: { width: 4.36, height: 1.61, weight: 2667.32 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/giraffe_30.jpg",
  },
  {
    name: "Zebra 31",
    type: "Mammal",
    color: "Black and White",
    size: { width: 2.54, height: 2.85, weight: 4651.35 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/zebra_31.jpg",
  },
  {
    name: "Panda 32",
    type: "Reptile",
    color: "Grey",
    size: { width: 3.71, height: 0.86, weight: 3381.62 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/panda_32.jpg",
  },
  {
    name: "Monkey 33",
    type: "Amphibian",
    color: "Black and White",
    size: { width: 1.35, height: 1.38, weight: 3497.44 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/monkey_33.jpg",
  },
  {
    name: "Kangaroo 34",
    type: "Bird",
    color: "Golden",
    size: { width: 1.29, height: 1.1, weight: 4636.09 },
    food: "Nectar",
    isPredator: false,
    image: "https://placeholder.com/images/kangaroo_34.jpg",
  },
  {
    name: "Penguin 35",
    type: "Bird",
    color: "Grey",
    size: { width: 0.94, height: 2.34, weight: 3754.28 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/penguin_35.jpg",
  },
  {
    name: "Parrot 36",
    type: "Fish",
    color: "Orange",
    size: { width: 3.63, height: 1.12, weight: 1426.11 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/parrot_36.jpg",
  },
  {
    name: "Snake 37",
    type: "Bird",
    color: "Orange",
    size: { width: 2.9, height: 1.67, weight: 3240.59 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/snake_37.jpg",
  },
  {
    name: "Crocodile 38",
    type: "Bird",
    color: "Red",
    size: { width: 1.25, height: 2.3, weight: 287.13 },
    food: "Fish",
    isPredator: true,
    image: "https://placeholder.com/images/crocodile_38.jpg",
  },
  {
    name: "Frog 39",
    type: "Insect",
    color: "Golden",
    size: { width: 1.99, height: 1.98, weight: 3373.08 },
    food: "Fruits",
    isPredator: false,
    image: "https://placeholder.com/images/frog_39.jpg",
  },
  {
    name: "Wolf 40",
    type: "Insect",
    color: "Orange",
    size: { width: 1.86, height: 1.75, weight: 3480.97 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/wolf_40.jpg",
  },
  {
    name: "Fox 41",
    type: "Bird",
    color: "Grey",
    size: { width: 0.21, height: 2.19, weight: 1199.29 },
    food: "Plants",
    isPredator: true,
    image: "https://placeholder.com/images/fox_41.jpg",
  },
  {
    name: "Rabbit 42",
    type: "Amphibian",
    color: "Green",
    size: { width: 4.49, height: 1.91, weight: 1366.31 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/rabbit_42.jpg",
  },
  {
    name: "Deer 43",
    type: "Reptile",
    color: "Black and White",
    size: { width: 0.89, height: 1.74, weight: 4462.68 },
    food: "Meat",
    isPredator: false,
    image: "https://placeholder.com/images/deer_43.jpg",
  },
  {
    name: "Hippo 44",
    type: "Amphibian",
    color: "Grey",
    size: { width: 0.13, height: 0.25, weight: 1520.48 },
    food: "Fish",
    isPredator: false,
    image: "https://placeholder.com/images/hippo_44.jpg",
  },
  {
    name: "Rhinoceros 45",
    type: "Reptile",
    color: "Black and White",
    size: { width: 3.57, height: 1.77, weight: 3160.28 },
    food: "Meat",
    isPredator: false,
    image: "https://placeholder.com/images/rhinoceros_45.jpg",
  },
  {
    name: "Eagle 46",
    type: "Fish",
    color: "Blue",
    size: { width: 2.2, height: 2.72, weight: 1210.57 },
    food: "Insects",
    isPredator: false,
    image: "https://placeholder.com/images/eagle_46.jpg",
  },
  {
    name: "Owl 47",
    type: "Mammal",
    color: "Green",
    size: { width: 3.91, height: 0.99, weight: 4808.43 },
    food: "Nectar",
    isPredator: true,
    image: "https://placeholder.com/images/owl_47.jpg",
  },
  {
    name: "Flamingo 48",
    type: "Insect",
    color: "Red",
    size: { width: 3.27, height: 0.52, weight: 1371.31 },
    food: "Meat",
    isPredator: false,
    image: "https://placeholder.com/images/flamingo_48.jpg",
  },
  {
    name: "Shark 49",
    type: "Reptile",
    color: "Grey",
    size: { width: 0.49, height: 1.58, weight: 4340.83 },
    food: "Meat",
    isPredator: true,
    image: "https://placeholder.com/images/shark_49.jpg",
  },
  {
    name: "Dolphin 50",
    type: "Reptile",
    color: "Golden",
    size: { width: 4.96, height: 1.99, weight: 2345.05 },
    food: "Plants",
    isPredator: false,
    image: "https://placeholder.com/images/dolphin_50.jpg",
  },
];
