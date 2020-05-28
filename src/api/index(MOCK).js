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

function addOrderToUser(order,email){

        console.log("user email in database: "+email)
        console.log("order sent to API was: "+order)
}

function getHighestOrderNo(){
    let highestOrderNo= 99
    return highestOrderNo
}


export default { getMenuItems, addOrderToUser,getHighestOrderNo};