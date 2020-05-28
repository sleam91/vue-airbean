import Vue from 'vue'
import Vuex from 'vuex'
// import API from '@/api'
import API from '@/api/index(MOCK).js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    highestOrderNo: 0,
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
    menu: [],
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
    setMenuItems(state, menu) {
      state.menu = menu
    },
    setHighestOrderNo(state, highestOrderNo) {
      state.highestOrderNo = highestOrderNo
    },
    loginUser(state,user){
      state.user=user
      state.loggedIn=true
    }  
  },

  actions: {

    async addOrderToUser(context, order) {
      if (context.state.loggedIn) {
        await API.addOrderToUser(order, context.state.user.email)
      }
      context.commit('addOrderToUser', order)
    },

    async getMenuItems(context) {
      const menu = await API.getMenuItems()
      context.commit('setMenuItems', menu)

    },

    async getHighestOrderNo(context) {
      const highestOrderNo = await API.getHighestOrderNo()
      context.commit('setHighestOrderNo', highestOrderNo)
    },

    async loginUser(context,user){
      const userFromAPI=await API.loginUser(user)
      context.commit('loginUser',userFromAPI)
    }

  },

  modules: {
  }
})
