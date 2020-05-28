const URL = 'http://localhost:8080/api'

async function getMenuItems() {
    let response= await fetch(URL+'/menuitems')
    let menu = await response.json()
    return menu
}

async function addOrderToUser(order,email){
    await fetch(URL+'/users/'+email, {
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


export default { getMenuItems, addOrderToUser,getHighestOrderNo};