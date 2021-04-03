import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Transaction from './pages/Transaction';
import Category from './pages/Category';
import Product from './pages/Product';
import Seller from './pages/Seller';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/transaction" component={Transaction} />
        <Route path="/asset/category" component={Category} />
        <Route path="/asset/product" component={Product} />
        <Route path="/asset/seller" component={Seller} />
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
      [{"tag":"name","label":"Name","description":"","isKey":true,"required":true,"readOnly":false,"dataType":"string","writers":null}]
      }


    POST (/invoke/createAsset)
    POST (/query/readAsset)-> { "key": { "@assetType" : "category", "name" : "Phones" } }
    POST (/query/search)

      @assetType = product    
      {
      "metadata":{},"result":
      [{"@assetType":"product","@key":"product:3f18e9be-240c-54c5-860e-9b9d1a038314","@lastTouchBy":"challengeMSP","categories":
      [{"@assetType":"category","@key":"category:4da5f39e-6982-5ef3-ace6-b970082eeee5"}],
      "code":"00001","name":"The Hobbit","price":23,"soldBy":{"@assetType":"seller","@key":"seller:3cb73dab-296e-53f3-b673-63fdac1eb329"}},
      {"@assetType":"product","@key":"product:569d9469-9156-5f37-9682-1407584edeff","@lastTouchBy":"challengeMSP","code":"0990","name":"Galaxy 20","price":1099.33,"soldBy":
      {"@assetType":"seller","@key":"seller:85252188-2227-587c-b83f-1e2efcbf456e"}},
      {"@assetType":"product","@key":"product:bea3a1d8-e7b4-5f6d-8e61-69c8a92e32ad","@lastTouchBy":"challengeMSP","code":"120","name":"Notebook","price":400.45,"soldBy":
      {"@assetType":"seller","@key":"seller:85252188-2227-587c-b83f-1e2efcbf456e"}},
      {"@assetType":"product","@key":"product:ce28e7b4-a1ee-53dc-bd53-adbae130a78d","@lastTouchBy":"challengeMSP","categories":
      [{"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc"},
      {"@assetType":"category","@key":"category:663a3597-0d68-5a18-acf8-b416df6f337f"}],
      "code":"00004","name":"iPhone 12","price":99999,"soldBy":
      {"@assetType":"seller","@key":"seller:85252188-2227-587c-b83f-1e2efcbf456e"}},
      {"@assetType":"product","@key":"product:ee0c60cd-927d-5eb6-a576-d7ac4a2e03e9","@lastTouchBy":"challengeMSP","categories":
      [{"@assetType":"category","@key":"category:663a3597-0d68-5a18-acf8-b416df6f337f"},
      {"@assetType":"category","@key":"category:acf61bde-ce49-59f5-8a95-3ce6dc9da8f5"}],
      "code":"00003","name":"Xbox Series X","price":499,"soldBy":
      {"@assetType":"seller","@key":"seller:cf1208e1-4a04-53a0-a505-dad9a60f10bb"}},
      {"@assetType":"product","@key":"product:f8877fd3-cfb6-5029-ad8d-d5b165789934","@lastTouchBy":"challengeMSP","categories":
      [{"@assetType":"category","@key":"category:663a3597-0d68-5a18-acf8-b416df6f337f"},
      {"@assetType":"category","@key":"category:acf61bde-ce49-59f5-8a95-3ce6dc9da8f5"}],
      "code":"00005","name":"Headset JBL","price":150,"soldBy":
      {"@assetType":"seller","@key":"seller:3cb73dab-296e-53f3-b673-63fdac1eb329"}}]
      }

      @assetType = seller
      {
      "metadata":{},"result":
      [{"@assetType":"seller","@key":"seller:3cb73dab-296e-53f3-b673-63fdac1eb329","@lastTouchBy":"challengeMSP","address":"Rua do Jeff Bezoz, 332","cnpj":"07.357.036/0001-76","dateJoined":"2021-03-30T03:00:00Z","name":"Amazon"},
      {"@assetType":"seller","@key":"seller:5128f52d-66a2-50ba-af74-305cf9539ed2","@lastTouchBy":"challengeMSP","address":"Rua Kenichiro Yoshida, 828","cnpj":"27.573.406/0001-10","dateJoined":"2021-04-08T00:00:00Z","name":"Sony"},
      {"@assetType":"seller","@key":"seller:85252188-2227-587c-b83f-1e2efcbf456e","@lastTouchBy":"challengeMSP","address":"Alameda Steve Jobs, 941","cnpj":"08.489.354/0001-53","dateJoined":"2021-01-21T03:00:00Z","name":"Apple"},
      {"@assetType":"seller","@key":"seller:cf1208e1-4a04-53a0-a505-dad9a60f10bb","@lastTouchBy":"challengeMSP","address":"Avenida Bill Gates, 921","cnpj":"05.181.086/0001-10","dateJoined":"2021-03-17T03:00:00Z","name":"Microsoft"}]
      }


      @assetType = category
      {
      "metadata":{},"result":
      [{"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc","@lastTouchBy":"challengeMSP","name":"Phones"},
      {"@assetType":"category","@key":"category:4da5f39e-6982-5ef3-ace6-b970082eeee5","@lastTouchBy":"challengeMSP","name":"Books"},
      {"@assetType":"category","@key":"category:663a3597-0d68-5a18-acf8-b416df6f337f","@lastTouchBy":"challengeMSP","name":"Eletronics"},
      {"@assetType":"category","@key":"category:acf61bde-ce49-59f5-8a95-3ce6dc9da8f5","@lastTouchBy":"challengeMSP","name":"Videogames"}]
      }


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

    POST (/query/readAssetHistory)-> { "key": { "@assetType" : "category", "name" : "Phones" } }
      [{"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc","@lastTouchBy":"challengeMSP","_timestamp":"2021-03-30T17:23:49Z","name":"Phones"},
      {"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc","@lastTouchBy":"challengeMSP","_timestamp":"2021-03-31T19:19:49Z","name":"Phones"},
      {"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc","@lastTouchBy":"challengeMSP","_timestamp":"2021-03-31T19:20:05Z","name":"Phones"},
      {"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc","@lastTouchBy":"challengeMSP","_timestamp":"2021-03-31T19:21:00Z","name":"Phones"},
      {"@assetType":"category","@key":"category:3ddc6e57-68a5-521f-adba-07c723ebffcc","@lastTouchBy":"challengeMSP","_timestamp":"2021-03-31T19:24:12Z","name":"Phones"}]

*/