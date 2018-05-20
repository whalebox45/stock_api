**K線圖值**
----

* **URL**
	/ohlc/:stockid
* **Method:**
	`GET`
* **URL Params**
	**Required:**
	`stockid=[strings]`
* **Data Params**
	None
* **Success Response:**
	* **Code:** 200 <br />
		**Content:** `{"date":"2018-05-18","security_code":"1101","name":"台       泥","open_price":"46.00","high_price":"46.15","low_price":"45.10","close_price":"45.55"}`
* **Error Response:**
	* **Code:** 404 NOT FOUND <br />
		**Content:** `{ error : "Not found" }`
* **Sample Call:**
  ```javascript
    $.ajax({
      url: "/ohlc/1101",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });  ```
<br />

**測試請求**
----

* **URL**
	/json_test
* **Method**
	`GET`
* **URL Params**
	None
* **Data Params**
	None
* **Success Response**
	* **Code:** 200 <br/>
		**Content:** `{'test','ok'}`

* **Error Response**
	* **Code:** 404 <br/>
		**Content:** `{'error','Not found'}`
