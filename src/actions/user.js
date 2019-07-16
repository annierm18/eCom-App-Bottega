import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from './types';

export function setPurchaseDetail(_id) {
    console.log(_id);
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: 'JavaScript in the Browser',
                    description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                    price: 1.99,
                    belongsTo: [0, 1]
               },
               quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: 'Graph Database',
                    description: 'es from the design. Okay so weve got JavaScript in the browser and then they have a description, and a price, and an amount. All right, so lets just start putting those in here. We got the title, we got a description, we got a price, and then we have a quantity selected',
                    price: 1.99,
                    belongsTo: [0, 6]
                },
                quantity: 1
            }
        ]
    })
}


export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 6.40,
                orderNumber: 'A0048248383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 1,
                total: 11.40,
                orderNumber: 'A00486yrgidfo383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Max Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 2,
                total: 17.70,
                orderNumber: 'A004gf8489q',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Sarah Hudgens',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 3,
                total: 1.40,
                orderNumber: 'fgefg48248383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Johns',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 4,
                total: 1.40,
                orderNumber: 'fgefg48248383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Johns',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 5,
                total: 1.40,
                orderNumber: 'fgefg48248383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Johns',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 6,
                total: 1.40,
                orderNumber: 'fgefg48248383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Johns',
                    shippingAddress: '1234 West State Street'
                }
            },
            {
                _id: 7,
                total: 1.40,
                orderNumber: 'fgefg48248383',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Johns',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}