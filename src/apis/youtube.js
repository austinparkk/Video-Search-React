import axios from "axios";

const KEY = "AIzaSyD1-3CipmjE0o8qhj_IVnYKGF7bQ6Vt03k";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY
	}
});
