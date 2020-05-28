import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    order: {
      orderNo: "",
      date: "",
      items: [],
      eta: "",
      total:"",
    },
    user: {
      name: "",
      email: "",
      id: "",
      listOfOrders: [        {
        orderNo: "12312",
        date: "21/05/12",
        items: [],
        eta: "",
        total:443,
      },{
        orderNo: "2222",
        date: "21/05/13",
        items: [],
        eta: "",
        total:333,
      },{
        orderNo: "3333",
        date: "21/05/14",
        items: [],
        eta: "",
        total:893,
      },],
    },
    menu:[
      {"id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39},
      {
        "id":2,
        "title":"Caffè Doppio",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {"id":3,"title":"Cappuccino","desc":"Bryggd på månadens bönor.","price":49},
      {
        "id":4,
        "title":"Latte Macchiato",
        "desc":"Bryggd på månadens bönor.",
        "price":49
      },
      {
        "id":5,
        "title":"Kaffe Latte",
        "desc":"Bryggd på månadens bönor.",
        "price":54
      },
      {"id":6,"title":"Cortado","desc":"Bryggd på månadens bönor.","price":39}
    ],
    loggedIn:false,
  },

  mutations: {
    addItemToBasket(state, itemToAdd) {
      state.order.items.push(itemToAdd)
    }
  },

  actions: {
  },
  
  modules: {
  }
})
