import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Johns',
                    shippingAddress: '1234 West State Street'
                }
            }
        ]
    })
}