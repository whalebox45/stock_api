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
  * Optional
  
  |param|desc|
  |-|-|
  |`bound=[float]`|選擇出小於bound值的當天本益比資料<br/>若無則預設15|
  |`limit=[int]`|篩選出前數名資料,數量為limit值<br />若無則選10名|
  |`cate=[int]`|篩選出符合cate值的股票分類代號<br />若無則選出所有分類|

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


**殖利率**
----
* **URL**
 `/div_yield`
* **Method**
 `GET`
* **URL Params**
 None
* **Data Params**
 * Optional

 |param|desc|
 |-|-|
 |`bound=[float]`|選擇出小於bound值得當日值利率資料<br />否則選擇出小於4.5%的資料|
 |`limit=[int]`|篩選出前數名資料,數量為limit值<br />若無則選10名|
 |`cate=[int]`|篩選出符合cate值的股票分類代號<br />若無則選出所有分類|

* **Success Response**
    * **Code:** 200 <br/>
    *  **Content:** 
    ```js
    {
    "date": "2018-05-21",
    "security_code": 3040,
    "name": "遠見",
    "dividend_yield": 16.07
    },
    {
      "date": "2018-05-21",
      "security_code": 1463,
      "name": "強盛",
      "dividend_yield": 13.3
    },
    ...
    ```
* **Error Response**
    * **Code:** 404 <br/>
    *  **Content:** `{'error','Not found'}`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/div_yield?bound=10&limit=20",
      datatype: "json",
      type: "GET",
      success: function(r){
        console.log(r);
      }
    })
  ```
---

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

