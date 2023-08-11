// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './slice/login.slice';
import { requisitionReducer } from './slice/requisition.slice';
import { addRequisitionReducer } from './slice/addRequisition.slice';
import { loaderReducer } from './slice/loader.slice';
import { addComponentReducer } from './slice/addComponent.slice';
import { assetsReducer } from './slice/assetsList.slice';
import { accountCodeReducer } from './slice/accountCode.slice';
import { addCatalogueReducer } from './slice/addCatalogue.slice';
import { componentListReducer } from './slice/componentList.slice';

const rootReducer = combineReducers({
  login: loginReducer,
  requisitionArray: requisitionReducer,
  addCatalogue: addCatalogueReducer,
  addRequisition: addRequisitionReducer,
  loader: loaderReducer,
  addComponent: addComponentReducer,
  assetsArray: assetsReducer,
  accountCodeArray: accountCodeReducer,
  componentListData: componentListReducer,
});

export default rootReducer;
