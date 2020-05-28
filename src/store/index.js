import Vue from 'vue'
import Vuex from 'vuex'
// import API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order: {
      orderNo: "1",
      date: "",
      items: [],
      eta: "21",
      total:"",
    },
    user: {
      name: "",
      email: "",
      listOfOrders: [{
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
      },],
    },
    menu: [
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
    ],
    loggedIn: false,
  },

  mutations: {
    addItemToBasket(state, itemToAdd) {
      let itemExists = false
      for (let itemInItems of state.order.items) {
        if(itemInItems.item.id == itemToAdd.id) {
          itemInItems.amount++
          itemExists = true
        }
      }
      if(!itemExists) {
        let newItemToAdd = {}
        newItemToAdd.item = itemToAdd
        newItemToAdd.amount = 1
        state.order.items.push(newItemToAdd)
      }
    },
    removeItemfromBasket(state, itemToRemove) {
      let itemIndex = state.order.items.findIndex(item => item.item.id === itemToRemove.id)
      for(let itemInOrderList of state.order.items) {
        if(itemInOrderList.item.id == itemToRemove.id) {
          if(itemInOrderList.amount>1){
            itemInOrderList.amount--
          } else {
            state.order.items.splice(itemIndex, 1)
          }
        }
      }
    },
    addOrderToUser(state, order) {
      state.user.listOfOrders.push(order)
    },
    setMenuItems(state,menu){
      state.menu=menu
    }
  },

  actions: {
  },

  modules: {
  }
})
