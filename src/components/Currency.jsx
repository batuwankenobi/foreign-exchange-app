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
    