import axios from "axios";

const GIPHY_API_KEY = '4aqeTetDZrKa5CsKKnlmRZoAEn6XWCX9';

export async function getTrendingGif() {
    const response: axios_response = await axios.get(`https://api.giphy.com/v1/gifs/trending`, {
                  params: {
                    api_key: GIPHY_API_KEY,
                    limit: 20,
                  },
                });
    return response.data.data;
};

export async function getGif(input: string) {
    const response: axios_response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
        params: {
          api_key: GIPHY_API_KEY,
          q: input,
          limit: 20,
        },
      });
return response.data.data;
}

interface axios_response {
    data: {
        data: Gif[]}
}


export interface Gif {
    type: string,
    id: string, 
    url: string,
    images: Images,
    alt_text: string
}

interface Images {
    fixed_height: fixed_height
}

interface fixed_height {
    url: string,
    width: string,
    height: string
}
