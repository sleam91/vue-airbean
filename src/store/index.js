import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api'
// import API from '@/api/index(MOCK).js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    highestOrderNo: 0,
    awaitedOrder: {},
    hideInvisibleFilm: true,
    order: {
      orderNo: 1,
      date: "",
      items: [],
      eta: 0,
      total: "",
    },
    user: {
      id: 0,
      name: "",
      email: "",
      listOfOrders: [],
    },
    menu: [],
    loggedIn: false,
  },

  mutations: {
    addItemToBasket(state, itemToAdd) {
      let itemExists = false
      for (let itemInItems of state.order.items) {
        if (itemInItems.item.id == itemToAdd.id) {
          itemInItems.amount++
          itemExists = true
        }
      }
      if (!itemExists) {
        let newItemToAdd = {}
        newItemToAdd.item = itemToAdd
        newItemToAdd.amount = 1
        state.order.items.push(newItemToAdd)
      }
    },
    removeItemfromBasket(state, itemToRemove) {
      let itemIndex = state.order.items.findIndex(item => item.item.id === itemToRemove.id)
      for (let itemInOrderList of state.order.items) {
        if (itemInOrderList.item.id == itemToRemove.id) {
          if (itemInOrderList.amount > 1) {
            itemInOrderList.amount--
          } else {
            state.order.items.splice(itemIndex, 1)
          }
        }
      }
    },
    addOrderToUser(state) {
      state.order.orderNo = ++state.highestOrderNo
      if (state.loggedIn) {
        state.user.listOfOrders.push(state.order)
      }
    },
    resetOrder(state) {
      state.awaitedOrder = state.order
      state.order = {
        orderNo: state.getHighestOrderNo,
        date: "",
        items: [],
        eta: state.awaitedOrder.eta,
        total: "",
      }
    },
    setMenuItems(state, menu) {
      state.menu = menu
    },
    setHighestOrderNo(state, highestOrderNo) {
      state.highestOrderNo = highestOrderNo
    },
    loginUser(state, user) {
      state.user = user
      state.loggedIn = true
    }
  },

  actions: {

    async addOrderToUser(context) {
      context.commit('addOrderToUser')
      if (context.state.loggedIn) {
        await API.addOrderToUser(context.state.order, context.state.user.id)
      }
      context.commit('resetOrder')
    },

    async getMenuItems(context) {
      const menu = await API.getMenuItems()
      context.commit('setMenuItems', menu)

    },

    async getHighestOrderNo(context) {
      const highestOrderNo = await API.getHighestOrderNo()
      context.commit('setHighestOrderNo', highestOrderNo)
    },

    async loginUser(context, user) {
      const userFromAPI = await API.loginUser(user)
      context.commit('loginUser', userFromAPI)
    }

  },

  modules: {
  }
})