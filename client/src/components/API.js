import axios from "axios";

export default axios.create({
	baseURL: `https://arcadeblog.herokuapp.com/`,
	withCredentials: false,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
