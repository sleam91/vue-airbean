const URL=document.location.protocol+'//'+document.location.host+'/api'

async function getMenuItems() {
    let response = await fetch(URL + '/menuitems')
    let menu = await response.json()
    return menu
}

async function addOrderToUser(order, id) {
    await fetch(URL + '/users/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
}

async function addOrderNoUser(order) {
    await fetch(URL + '/orders/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
}


async function getHighestOrderNo() {    
    let response = await fetch(URL + '/orders/highest')
    let highestOrderNo = await response.json()
    return highestOrderNo
}


async function loginUser(user) {
    let response = await fetch(URL + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let loggedInUser = await response.json()
    return loggedInUser
}

export default { getMenuItems, addOrderToUser, addOrderNoUser , getHighestOrderNo, loginUser};