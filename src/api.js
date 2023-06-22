import axios from "axios";

async function serchImages() {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID nIfOqSyd6e5qNfmEDlD2mE9WmB8bBfKBSwkTi3Gm0ZE",
    },
    params: {
      query: "Boca Juniors",
    },
  });
  console.log(response);
  return response.data.results;
}

export default serchImages;
