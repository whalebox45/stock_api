**K線圖值**
---
* **URL**
  `/ohlc/:stockid`
* **Method:**
  `GET` 
*  **URL Params**
  * **Required:**
  
    |param|desc|
    |-|-|
    |`stockid=[alphanumeric]`|選擇該股票代號的250天的日K線股價
    
* **Data Params**
  None
* **Success Response:**
  * **Code:** 200 <br />
  * **Content:** 
  ```javascript
  {"date":"2018-05-18",
  "security_code":"1101",
  "name":"台泥",
  "open_price":"46.00",
  "high_price":"46.15",
  "low_price":"45.10",
  "close_price":"45.55"},
  ...
  ```
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
  * **Content:** `{ error : "Not found" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/ohlc/1101",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```
----



**本益比**
----
* **URL**
  `/pe_ratio`
* **Method**
  `GET`
* **URL Params**
  None
* **Data Params**

  |param|desc|
  |-|-|
  |`bound=[float]`|選擇出小於bound值的當天本益比資料<br/>若無則預設15
* **Success Response**
    * **Code:** 200 <br/>
    *  **Content:** 
    ```js
    {
      "date": "2018-05-18",
      "security_code": 1453,
      "name": "大將",
      "pe_ratio": "2.65"
    },
    {
      "date": "2018-05-18",
      "security_code": 2915,
      "name": "潤泰全",
      "pe_ratio": "3.32"
    },
    ...
    ```
* **Error Response**
    * **Code:** 404 <br/>
    * **Content:** `{'error','Not found'}`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/pe_ratio?bound=10",
      datatype: "json",
      type: "GET",
      success: function(r){
        console.log(r);
      }
    })
  ```
---- 

**測試請求**
----
* **URL**
 `/json_test`
* **Method**
 `GET`
* **URL Params**
 None
* **Data Params**
 None
* **Success Response**
    * **Code:** 200 <br/>
    *  **Content:** `{'test','ok'}`
* **Error Response**
    * **Code:** 404 <br/>
    *  **Content:** `{'error','Not found'}`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/json_test",
      datatype: "json",
      type: "GET",
      success: function(r){
        console.log(r);
      }
    })
  ```

=======
----

* **URL:**
	`/ohlc/:stockid`
* **Method:**
	`GET`
* **URL Params:**
	**Required:**
	`stockid=[strings]`
* **Data Params:**
	None
* **Success Response:**
	* **Code:** 200
	* **Content:** `{"date":"2018-05-18","security_code":"1101","name":"台       泥","open_price":"46.00","high_price":"46.15","low_price":"45.10","close_price":"45.55"}`
* **Error Response:**
	* **Code:** 404 NOT FOUND
	* **Content:** `{ error : "Not found" }`
* **Sample Call:**
```javascript
$.ajax({
	url: "/ohlc/1101",
	dataType: "json",
	type : "GET",
	success : function(r) {
		console.log(r);
	}
});
```
<br />

**測試請求**
----

* **URL:**
	`/json_test`
* **Method:**
	`GET`
* **URL Params:**
	None
* **Data Params:**
	None
* **Success Response:**
	* **Code:** 200
	* **Content:** `{'test','ok'}`

* **Error Response:**
	* **Code:** 404
	* **Content:** `{'error','Not found'}`
* **Sameple Call:**
```javascript
$.ajax({
	url: "/json_test",
	dataType: "json",
	type : "GET",
	success : function(r) {
		console.log(r);
	}
});

