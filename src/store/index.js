import Vue from 'vue'
import Vuex from 'vuex'
import API from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timeToDeliver: 0,
    loader:false,
    highestOrderNo: 0,
    awaitedOrder: {
      orderNo: 1,
      date: "",
      items: [],
      eta: 0,
      total: "",
      deliveryTime: 0
    },
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
    loggedIn: false
  },
  getters: {
    getAmountOfItems: state => {
      return state.order.items.map(item => item.amount).reduce((a, b) => a + b, 0)
    }
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
      state.awaitedOrder.deliveryTime = Date.now() + state.awaitedOrder.eta * 60 * 1000 + 1000
      state.order = {
        orderNo: state.getHighestOrderNo,
        date: "",
        items: [],
        eta: 0,
        total: "",
      }
    },
    setMenuItems(state, menu) {
      state.menu = menu
    },
    setHighestOrderNo(state, highestOrderNo) {
      state.highestOrderNo = highestOrderNo
    },
    setNameAndEmail(state, loginData) {
      state.user.name = loginData.name;
      state.user.email = loginData.email;

    },
    loginUser(state, user) {
      state.user = user
      state.loggedIn = true
    },
    showInvisibleFilm(state) {
      state.hideInvisibleFilm = false;
    },
    hideInvisibleFilm(state) {
      state.hideInvisibleFilm = true;
    },
    updateInvisibleFilm(state, value) {
      state.hideInvisibleFilm = value
    },
    setOrderDate(state, date) {
      state.order.date = date
    },
    setOrderTotal(state, total) {
      state.order.total = total
    },
    setOrderEta(state, eta) {
      state.order.eta = eta
    },
    uppdateEta(state) {
      let time =  state.awaitedOrder.deliveryTime - Date.now()
      if(time <= 0) {
        state.timeToDeliver = "0:00"
      } else {
        let minutes = Math.floor(time/60000)
        let seconds = Math.floor((time - minutes*60000)/1000)
        if(seconds<10) {
          state.timeToDeliver = `${minutes}:0${seconds}`
        } else {
          state.timeToDeliver = `${minutes}:${seconds}`
        }
      }
    }
  },

  actions: {

    async addOrderToUser(context) {
      context.commit('addOrderToUser')
      context.state.loader=true
      if (context.state.loggedIn) {
        await API.addOrderToUser(context.state.order, context.state.user.id)
      } else {
        await API.addOrderNoUser(context.state.order)
      }
      context.state.loader=false
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
      context.state.loader=true
      const userFromAPI = await API.loginUser(user)
      context.state.loader=false
      context.commit('loginUser', userFromAPI)
    },

    async startChangingEta(context) {
      setInterval(() => {context.commit('uppdateEta')}, 500 )
    },
    
    async getInitialData(context){
      context.state.loader=true
      await context.dispatch('getMenuItems')
      await context.dispatch('getHighestOrderNo')
      context.state.loader=false
    }
  },

  modules: {
  }
})