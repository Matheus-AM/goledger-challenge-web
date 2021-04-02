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
      {"tag":"createAsset","label":"Create Asset","description":""},
      {"tag":"readAsset","label":"Read Asset","description":""},
      {"tag":"readAssetHistory","label":"Read Asset History","description":""},
      {"tag":"search","label":"Search World State","description":""},
      {"tag":"updateAsset","label":"Update Asset","description":""},
      {"tag":"deleteAsset","label":"Delete Asset","description":""}]
    POST (/query/getTx)->
      {
        "tag": "getHeader",
        "label": "Get Header",
        "description": "",
        "args": [],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "createDocument",
        "label": "Create Document",
        "description": "",
        "args": [
          {
            "tag": "fileHash",
            "label": "",
            "description": "File Hash",
            "dataType": "sha256",
            "required": true,
            "private": false
          },
          {
            "tag": "filename",
            "label": "",
            "description": "File Name",
            "dataType": "string",
            "required": true,
            "private": false
          },
          {
            "tag": "bucketLink",
            "label": "",
            "description": "Document Urls",
            "dataType": "[]url",
            "required": false,
            "private": false
          }
        ],
        "method": "POST",
        "readOnly": false,
        "metaTx": true
      };

      {
        "tag": "compareDocument",
        "label": "Compare Document",
        "description": "",
        "args": [
          {
            "tag": "fileHash",
            "label": "",
            "description": "File Hash",
            "dataType": "sha256",
            "required": true,
            "private": false
          },
          {
            "tag": "filename",
            "label": "",
            "description": "File Name",
            "dataType": "string",
            "required": true,
            "private": false
          }
        ],
        "method": "POST",
        "readOnly": false,
        "metaTx": true
      };

      {
        "tag": "getTx",
        "label": "Get Tx",
        "description": "",
        "args": [
          {
            "tag": "txName",
            "label": "",
            "description": "The name of the transaction of which you want to fetch the definition. Leave empty to fetch a list of possible transactions.",
            "dataType": "string",
            "required": false,
            "private": false
          }
        ],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "getSchema",
        "label": "Get Schema",
        "description": "",
        "args": [
          {
            "tag": "assetType",
            "label": "",
            "description": "The name of the asset type of which you want to fetch the definition. Leave empty to fetch a list of possible types.",
            "dataType": "string",
            "required": false,
            "private": false
          }
        ],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "getDataTypes",
        "label": "Get DataTypes",
        "description": "GetDataTypes returns the primary data type map",
        "args": [],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "createAsset",
        "label": "Create Asset",
        "description": "",
        "args": [
          {
            "tag": "asset",
            "label": "",
            "description": "List of assets to be created.",
            "dataType": "[]@asset",
            "required": true,
            "private": false
          }
        ],
        "method": "POST",
        "readOnly": false,
        "metaTx": true
      };

      {
        "tag": "readAsset",
        "label": "Read Asset",
        "description": "",
        "args": [
          {
            "tag": "key",
            "label": "",
            "description": "Key of the asset to be read.",
            "dataType": "@key",
            "required": true,
            "private": false
          }
        ],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "readAssetHistory",
        "label": "Read Asset History",
        "description": "",
        "args": [
          {
            "tag": "key",
            "label": "",
            "description": "Key of the asset to be read.",
            "dataType": "@key",
            "required": true,
            "private": false
          }
        ],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "search",
        "label": "Search World State",
        "description": "",
        "args": [
          {
            "tag": "query",
            "label": "",
            "description": "Query string according to CouchDB specification: https://docs.couchdb.org/en/stable/api/database/find.html.",
            "dataType": "@query",
            "required": false,
            "private": false
          },
          {
            "tag": "collection",
            "label": "",
            "description": "Name of the private collection to be searched.",
            "dataType": "string",
            "required": false,
            "private": false
          }
        ],
        "method": "GET",
        "readOnly": true,
        "metaTx": true
      };

      {
        "tag": "updateAsset",
        "label": "Update Asset",
        "description": "",
        "args": [
          {
            "tag": "update",
            "label": "",
            "description": "Asset key and fields to be updated.",
            "dataType": "@update",
            "required": true,
            "private": false
          }
        ],
        "method": "PUT",
        "readOnly": false,
        "metaTx": true
      };

      {
        "tag": "deleteAsset",
        "label": "Delete Asset",
        "description": "",
        "args": [
          {
            "tag": "key",
            "label": "",
            "description": "Key of the asset to be deleted.",
            "dataType": "@key",
            "required": true,
            "private": false
          }
        ],
        "method": "DELETE",
        "readOnly": false,
        "metaTx": true
      };

  Assets->
    GET (/query/getSchema)->
      [{"tag":"product","label":"Product","description":"","writers":null},
      {"tag":"seller","label":"Seller","description":"","writers":null},
      {"tag":"category","label":"Category","description":"","writers":null}]
    POST (/query/getSchema)->
      {
      "tag":"product","label":"Product","description":"","props":
      [{"tag":"code","label":"Product Code","description":"","isKey":true,"required":true,"readOnly":false,"dataType":"string","writers":null},
      {"tag":"name","label":"Product name","description":"","isKey":false,"required":true,"readOnly":false,"dataType":"string","writers":null},
      {"tag":"price","label":"Price","description":"","isKey":false,"required":true,"readOnly":false,"dataType":"number","writers":null},
      {"tag":"soldBy","label":"Sold By","description":"","isKey":false,"required":true,"readOnly":false,"dataType":"-\u003eseller","writers":null},
      {"tag":"categories","label":"Categories","description":"","isKey":false,"required":false,"readOnly":false,"dataType":"[]-\u003ecategory","writers":null}]
      };
      
      {
      "tag":"seller","label":"Seller","description":"","props":
      [{"tag":"cnpj","label":"CNPJ","description":"","isKey":true,"required":true,"readOnly":false,"dataType":"string","writers":null},
      {"tag":"name","label":"Name","description":"","isKey":false,"required":true,"readOnly":false,"dataType":"string","writers":null},
      {"tag":"address","label":"Address","description":"","isKey":false,"required":true,"readOnly":false,"dataType":"string","writers":null},
      {"tag":"dateJoined","label":"Joined At","description":"","isKey":false,"required":true,"readOnly":false,"dataType":"datetime","writers":null}]
      };

      
      {
      "tag":"category","label":"Category","description":"","props":
      [{"tag":"name","label":"Name","description":"","isKey":true,
      "required":true,"readOnly":false,"dataType":"string","writers":null}]
      }


    POST (/invoke/createAsset)
    POST (/query/readAsset)
    POST (/query/search)
    PUT (/invoke/updateAsset)
    DELETE (/invoke/deleteAsset)


Hidden->
  GET (/query/getDataTypes)->
    {
      "boolean": {
        "acceptedFormats": [
          "boolean"
        ],
        "DropDownValues": null
      },
      "cpf": {
        "acceptedFormats": null,
        "DropDownValues": null
      },
      "datetime": {
        "acceptedFormats": [
          "string"
        ],
        "DropDownValues": null
      },
      "integer": {
        "acceptedFormats": [
          "number"
        ],
        "DropDownValues": null
      },
      "number": {
        "acceptedFormats": [
          "number"
        ],
        "DropDownValues": null
      },
      "sha256": {
        "acceptedFormats": [
          "string"
        ],
        "description": "Sha256 hash digest string (hexadecimal)",
        "DropDownValues": null
      },
      "string": {
        "acceptedFormats": [
          "string"
        ],
        "DropDownValues": null
      },
      "url": {
        "acceptedFormats": [
          "string"
        ],
        "description": "Web url",
        "DropDownValues": null
      }
    }
*/