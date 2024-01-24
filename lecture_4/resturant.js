// for each people - add menu item to the order array
// // print each person with he's menu item

// /**
//  * יש לנו מסעדה
//  * כל סועד מזמין מנה מהתפריט, ומוסיף למערך הזמנה
//  * בסוף צריך להציג עבור כל סועד את מה שהוא הזמין
//  */
// order.push(); // add new item to the array

function startOrder() {
  const menu = ["🍞", "🧀", "🫔", "🥣🫕🥫🍳🥩🥓🥙"];
  const animals = ["lion", "rhino", "giraffe", "bambi"];
  const orders = [];

  function prettifyMenu(someMenu) {
    let menuString = "";

    someMenu.forEach(function (item, index) {
      menuString += `${index} - ${item} \n`;
    });

    return menuString;
  }

  function prettifyOrder(orders) {
    let prettifyOrderString = "";

    orders.forEach(function (orderItem) {
      prettifyOrderString += `${orderItem[0]} - ${orderItem[1]} \n`;
    });

    return prettifyOrderString;
  }

  animals.forEach(function (animal) {
    alert(
      `Hey ${animal}
        Choose item from the menu, 
        do it by writing the number next to the item
    `
    );

    const menuItem = prompt(prettifyMenu(menu));

    const menuItemToOrder = parseInt(menuItem);
    // isNaN(menuItemToOrder)
    // if the input was not a number, parseInt will make it NaN
    // so isNaN function returns true or false wether its NaN

    if (menuItemToOrder < menu.length) {
      orders.push([animal, menu[menuItemToOrder]]);
    }
  });

  alert(prettifyOrder(orders));
}
