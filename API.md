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
  {
  "data": [
    {
      "date": "2018-05-28",
      "security_code": "1234",
      "name": "黑松",
      "trade_volume": 47008,
      "open_price": "31.55",
      "close_price": "31.65",
      "high_price": "31.65",
      "low_price": "31.50"
    },
    {
      "date": "2018-05-25",
      "security_code": "1234",
      "name": "黑松",
      "trade_volume": 77458,
      "open_price": "31.45",
      "close_price": "31.55",
      "high_price": "31.65",
      "low_price": "31.45"
    },
  ...
  ]}
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




**周月波動率差距**
----
* **URL**
  `/trade_vol_diff`
* **method**
  `GET`
* **URL Params**
  None
* **Data Params**
  * Optional
  
  |param|desc|
  |-|-|
  |`limit=[int]`|篩選出前數名資料,數量為limit值<br />若無則選10名|
  |`cate=[int]`|篩選出符合cate值的股票分類代號<br />若無則選出所有分類|

* **Success Response**
    * **Code:** 200 <br/>
    *  **Content:** 
    ```js
    "data": [
    {
      "date": "2018-05-25",
      "security_code": "9958",
      "name": "世紀鋼",
      "wm_diff(%)": 45.61
    },
    {
      "date": "2018-05-25",
      "security_code": "3708",
      "name": "上緯投控",
      "wm_diff(%)": 34.87
    },
    ...
    ]
    ```
* **Error Response**
    * **Code:** 404 <br/>
    * **Content:** `{'error','Not found'}`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/price_diff?limit=15&cate=13",
      datatype: "json",
      type: "GET",
      success: function(r){
        console.log(r);
      }
    })
  ```
---- 





**成交量波動幅度(%)**
----
* **URL**
  `/trade_vol_diff`
* **method**
  `GET`
* **URL Params**
  None
* **Data Params**
  * Optional
  
  |param|desc|
  |-|-|
  |`limit=[int]`|篩選出前數名資料,數量為limit值<br />若無則選10名|
  |`cate=[int]`|篩選出符合cate值的股票分類代號<br />若無則選出所有分類|

* **Success Response**
    * **Code:** 200 <br/>
    *  **Content:** 
    ```js
    "data": [
    {
      "security_code": "1110",
      "name": "東泥",
      "date": "2018-05-25",
      "vol_diff": 31208,
      "vol_diff_rate(%)": 213.534
    },
    {
      "security_code": "1109",
      "name": "信大",
      "date": "2018-05-25",
      "vol_diff": -293175,
      "vol_diff_rate(%)": 65.116
    },
    ...
    ]
    ```
* **Error Response**
    * **Code:** 404 <br/>
    * **Content:** `{'error','Not found'}`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/trade_vol_diff?limit=2&cate=13",
      datatype: "json",
      type: "GET",
      success: function(r){
        console.log(r);
      }
    })
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







**殖利率(%)**
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

**股利發放率(%)**
----
* **URL**
 `/dp_ratio`
* **Method**
 `GET`
* **URL Params**
 None
* **Data Params**
 * Optional

 |param|desc|
 |-|-|
 |`bound=[float]`|選擇出小於bound值得當日值利率資料<br />否則選擇出大於85%的資料|
 |`limit=[int]`|篩選出前數名資料,數量為limit值<br />若無則選10名|
 |`cate=[int]`|篩選出符合cate值的股票分類代號<br />若無則選出所有分類|

* **Success Response**
    * **Code:** 200 <br/>
    *  **Content:** 
  
    ```js
    {
      "data": [
        {
          "date": "2018-05-28",
          "security_code": 2527,
          "name": "宏璟",
          "dividend_payout_ratio(%)": 7999.2
        },
        {
          "date": "2018-05-28",
          "security_code": 2369,
          "name": "菱生",
          "dividend_payout_ratio(%)": 2501.6
        },
    ```
* **Error Response**
    * **Code:** 404 <br/>
    *  **Content:** `{'error','Not found'}`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/dp_ratio?bound=50&limit=20",
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

