import React from 'react';
import './style.css';
import NavegationBar from '../../components/NavegationBar';

function Asset() {
	return (
		<div className="asset">	
			<header>
				<NavegationBar/>
			</header>
		</div>
	);
}
  
export default Asset;


/*
/query ->
	/getSchema (GET);
	/getSchema (POST):
		{ "assetType" : "%string%" } string = product, seller, category;
		RESULTS:
			{
      "tag":"product","props":
      [{"tag":"code","isKey":true,"dataType":"string",},
      {"tag":"name","dataType":"string",},
      {"tag":"price","dataType":"number",},
      {"tag":"soldBy","dataType":"-\u003eseller",},
      {"tag":"categories","required":false,","dataType":"[]-\u003ecategory",}]
      };
      
      {
      "tag":"seller","props":
      [{"tag":"cnpj","isKey":true,"dataType":"string",},
      {"tag":"name","dataType":"string",},
      {"tag":"address","dataType":"string",},
      {"tag":"dateJoined","dataType":"datetime",}]
      };

      
      {
      "tag":"category","props":
      [{"tag":"name","isKey":true,"dataType":"string",}]
      }


	/readAsset (POST):
		{ "key" : @key } @key =  { "@assetType" : "%assetType%", "%PK%" : "%assetPK%" };
			primaryKeys = { product : code, seller : cnpj, category : name }
	/search (POST):
		{ "query": { "selector": { "@assetType" : "product" } } }
		RESULTS:
			@assetType = product    
			{
				"metadata": {},
				"result": [
					{
						"@assetType": "product",
						"@key": "product:3f18e9be-240c-54c5-860e-9b9d1a038314",
						"@lastTouchBy": "challengeMSP",
						"categories": [
							{
								"@assetType": "category",
								"@key": "category:4da5f39e-6982-5ef3-ace6-b970082eeee5"
							}
						],
						"code": "00001",
						"name": "The Hobbit",
						"price": 23,
						"soldBy": {
							"@assetType": "seller",
							"@key": "seller:3cb73dab-296e-53f3-b673-63fdac1eb329"
						}
					},
					{
						"@assetType": "product",
						"@key": "product:569d9469-9156-5f37-9682-1407584edeff",
						"@lastTouchBy": "challengeMSP",
						"code": "0990",
						"name": "Galaxy 20",
						"price": 1099.33,
						"soldBy": {
							"@assetType": "seller",
							"@key": "seller:85252188-2227-587c-b83f-1e2efcbf456e"
						}
					},
					{
						"@assetType": "product",
						"@key": "product:bea3a1d8-e7b4-5f6d-8e61-69c8a92e32ad",
						"@lastTouchBy": "challengeMSP",
						"code": "120",
						"name": "Notebook",
						"price": 400.45,
						"soldBy": {
							"@assetType": "seller",
							"@key": "seller:85252188-2227-587c-b83f-1e2efcbf456e"
						}
					},
					{
						"@assetType": "product",
						"@key": "product:ce28e7b4-a1ee-53dc-bd53-adbae130a78d",
						"@lastTouchBy": "challengeMSP",
						"categories": [
							{
								"@assetType": "category",
								"@key": "category:3ddc6e57-68a5-521f-adba-07c723ebffcc"
							},
							{
								"@assetType": "category",
								"@key": "category:663a3597-0d68-5a18-acf8-b416df6f337f"
							}
						],
						"code": "00004",
						"name": "iPhone 12",
						"price": 99999,
						"soldBy": {
							"@assetType": "seller",
							"@key": "seller:85252188-2227-587c-b83f-1e2efcbf456e"
						}
					},
					{
						"@assetType": "product",
						"@key": "product:ee0c60cd-927d-5eb6-a576-d7ac4a2e03e9",
						"@lastTouchBy": "challengeMSP",
						"categories": [
							{
								"@assetType": "category",
								"@key": "category:663a3597-0d68-5a18-acf8-b416df6f337f"
							},
							{
								"@assetType": "category",
								"@key": "category:acf61bde-ce49-59f5-8a95-3ce6dc9da8f5"
							}
						],
						"code": "00003",
						"name": "Xbox Series X",
						"price": 499,
						"soldBy": {
							"@assetType": "seller",
							"@key": "seller:cf1208e1-4a04-53a0-a505-dad9a60f10bb"
						}
					},
					{
						"@assetType": "product",
						"@key": "product:f8877fd3-cfb6-5029-ad8d-d5b165789934",
						"@lastTouchBy": "challengeMSP",
						"categories": [
							{
								"@assetType": "category",
								"@key": "category:663a3597-0d68-5a18-acf8-b416df6f337f"
							},
							{
								"@assetType": "category",
								"@key": "category:acf61bde-ce49-59f5-8a95-3ce6dc9da8f5"
							}
						],
						"code": "00005",
						"name": "Headset JBL",
						"price": 150,
						"soldBy": {
							"@assetType": "seller",
							"@key": "seller:3cb73dab-296e-53f3-b673-63fdac1eb329"
						}
					}
				]
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



*/