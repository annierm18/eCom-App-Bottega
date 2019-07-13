import {
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS
} from './types';

export function fetchShopCategories() {
    return ({
        type: SET_NAVBAR_LINKS,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
    })
}

export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JacaScript in the Browser',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 4,
                title: 'JavaScript Development',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                price: 1.99,
                belongsTo: [0, 6]
            }
        ]
    })
}