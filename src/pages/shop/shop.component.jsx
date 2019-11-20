import React from 'react';
import {Route} from 'react-router-dom';

import ColletionPage from '../collection/collection.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.componenet';



const ShopPage =({match}) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route path = {`${match.path}/:collectionId`} component= {ColletionPage}/>
  </div>
) ;
    
export default ShopPage;


