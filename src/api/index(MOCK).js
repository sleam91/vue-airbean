function getMenuItems() {
  let menu = [
    { "id": 1, "title": "Bryggkaffe", "desc": "Bryggd på månadens bönor.", "price": 39 },
    {
      "id": 2,
      "title": "Caffè Doppio",
      "desc": "Bryggd på månadens bönor.",
      "price": 49
    },
    { "id": 3, "title": "Cappuccino", "desc": "Bryggd på månadens bönor.", "price": 49 },
    {
      "id": 4,
      "title": "Latte Macchiato",
      "desc": "Bryggd på månadens bönor.",
      "price": 49
    },
    {
      "id": 5,
      "title": "Kaffe Latte",
      "desc": "Bryggd på månadens bönor.",
      "price": 54
    },
    { "id": 6, "title": "Cortado", "desc": "Bryggd på månadens bönor.", "price": 39 }
  ]
  return menu
}

function addOrderToUser(order, id) {

  console.log("user id in database: " + id)
  console.log("order sent to API was: " + order)
}

function getHighestOrderNo() {
  let highestOrderNo = 9999
  return highestOrderNo
}

function loginUser(user) {
  user.listOfOrders = [{
    orderNo: "12312",
    date: "21/05/12",
    items: [],
    eta: "",
    total: 443,
  }, {
    orderNo: "2222",
    date: "21/05/13",
    items: [],
    eta: "",
    total: 333,
  }, {
    orderNo: "3333",
    date: "21/05/14",
    items: [],
    eta: "",
    total: 893,
  },]
  return user
}


export default { getMenuItems, addOrderToUser, getHighestOrderNo, loginUser };