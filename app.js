
let data = require("./foodyo_output.json");

// console.log(data.body.Recommendations);

const restaurantName = data.body.Recommendations;

let menuAll;
restaurantName.map((restoName) => {
  console.log(restoName.RestaurantName); //"RestaurantName: ",//this is 1st step of ans
  restoName.menu.map((menu) => {
    if (menu.type === "sectionheader") {
      // console.log("Menu",menu.children)
      let newMenu = menu.children;
      // console.log("Menu:", newMenu)
      newMenu.map((eight) => {
        if (eight.type === "item" && eight.selected === 1) {
          let eightStep = eight;
          console.log("----->", eight.name); //"Eightth step: ",//this is second step of ans
          // console.log([eightStep])

          let d;
          if (eightStep.selected === 1) {
            d = eight.children;
            // console.log(eight.children)
          }

          // console.log(d.children)
          d.map((k) => {
            console.log("---------->", k.name); //these are the child
            // let o = k.children
          });
        }
      });
    }
    // menuAll = menu
  });
});

// console.log(menuAll)