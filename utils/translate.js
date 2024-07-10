import axios from "axios";

export const translate = async (text, languageFrom, languageTo) => {
    try {
        const options = {
            method: 'GET',
            url: "https://nlp-translation.p.rapidapi.com/v1/translate",
            params: { text: text, to: languageTo, from: languageFrom },
            headers: {
                'X-RapidAPI-Key': '4b88b187damshc9f4f642b1586dbp1ed8b5jsn9d31be43967a',
                'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        console.log(response,"here is the response from translate")
        
        if (response.status !== 200) {
            throw new Error("Translate call failed. Response status: " + response.status);
        }
        
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        
        throw new Error("Translate call failed. Error: " + error.message);
    }
}
