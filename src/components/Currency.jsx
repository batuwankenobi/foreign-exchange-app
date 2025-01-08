import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import "../css/currency.css";
import axios from "axios";

function Currency() {
	const [amount, setAmount] = useState(0);
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("TRY");
	const [result, setResult] = useState("");




	let token = "fca_live_FXhn90pUyFbfVTdrOWM2D7FM3b9wcfnXrzIYN0tO";
	let baseUrl = "https://api.freecurrencyapi.com/v1/latest";
	
    const exchange = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}?apikey=${token}&base_currency=${fromCurrency}`
      );
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
    } catch (error) {
      console.log("hata olustu ", error);
    }
  };
  

  return (
	<div>
	  <div className="currency-main">
	    <div
		style={{
		  backgroundColor: "#5E5D5D",
		  width: "100%",
		  textAlign: "center",
		  borderRadius: "5px",
		}}