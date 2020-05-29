const URL = 'http://localhost:8080/api'

async function getMenuItems() {
    let response= await fetch(URL+'/menuitems')
    let menu = await response.json()
    return menu
}

async function addOrderToUser(order,id){
    await fetch(URL+'/users/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })
}

async function getHighestOrderNo(){
    let highestOrderNo= await fetch(URL+'/orders/highest')
    return highestOrderNo
}

async function loginUser(user){
    let response= await fetch(URL+'/users',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    let user = await response.json()
    return user
}

export default { getMenuItems, addOrderToUser,getHighestOrderNo,loginUser};