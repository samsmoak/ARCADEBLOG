import axios from "axios";

export default axios.create({
	baseURL: "https://arcadesettlers.herokuapp.com/api/",
	withCredentials: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
