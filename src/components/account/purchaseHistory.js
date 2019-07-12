import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetail from './purchaseDetail';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <div className='purchase-history__content'>
                    <PageTitle className='purchase-history__page-title' title='Purchase History'/>
                    <Purchases className='purchase-history__purchases' />
                    <PurchaseDetail clasName='purchase-history__detail' />
                </div>
                <div className='purchase-history__border-bottom'></div>
            </div>
        )
    }
}

export default PurchaseHistory;