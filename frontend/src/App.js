import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Buy from './pages/Buy';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/buy" component={Buy} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;



// http://ec2-54-173-117-139.compute-1.amazonaws.com/api/

// http://ec2-54-173-117-139.compute-1.amazonaws.com/api-docs/


/*
marketplace->
  products
  categories
  sellers

API->
  transaction->
    POST (/invoke/:id)->
      
    POST (/query/:id)->
      
    GET (/query/getHeader)->
      {"colors":["#4267B2","#34495E","#ECF0F1"],
      "name":"marketplace",
      "orgMSP":"challengeMSP",
      "orgTitle":"marketplace",
      "version":"1.0"}
    GET (/query/getTx)->
      [{"tag":"getHeader","label":"Get Header","description":""},
      {"tag":"createDocument","label":"Create Document","description":""},
      {"tag":"compareDocument","label":"Compare Document","description":""},
      {"tag":"getTx","label":"Get Tx","description":""},
      {"tag":"getSchema","label":"Get Schema","description":""},
      {"tag":"getDataTypes","label":"Get DataTypes","description":"GetDataTypes returns the primary data type map"},
      {"tag":"createAsset","label":"Create Asset","description":""},{"tag":"readAsset","label":"Read Asset","description":""},
      {"tag":"readAssetHistory","label":"Read Asset History","description":""},{"tag":"search","label":"Search World State","description":""},
      {"tag":"updateAsset","label":"Update Asset","description":""},{"tag":"deleteAsset","label":"Delete Asset","description":""}]
    POST (/query/getTx)
  Assets->
    GET (/query/getSchema)->
      [{"tag":"product","label":"Product","description":"","writers":null},
      {"tag":"seller","label":"Seller","description":"","writers":null},
      {"tag":"category","label":"Category","description":"","writers":null}]
    POST (/query/getSchema)
    POST (/invoke/createAsset)
    POST (/query/readAsset)
    POST (/query/search)
    PUT (/invoke/updateAsset)
    DELETE (/invoke/deleteAsset)

*/