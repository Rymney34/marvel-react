import { useHttp } from "../hooks/https.hook";

//good to change to marvel service 
class MarvelService {

    // const {loading, request} = useHttp();

    _apiBase = 'https://marvel-server-zeta.vercel.app/'
    _apiKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df#'

    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);

        }

        return await res.json();
    }

    // getAllCharacters = () => {
    //     return this.getResource(`${this._apiBase}characters?${this._apiKey}`);

    // }
    getAllCharacters = async (offset = this._baseOffset) => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
        return res;

    }
    
    getCharacterByName = async (name) => {
        const res = await this.getResource(`${this._apiBase}characters?name=${name}&${this._apiKey}`)
        return res;

    }
    getComics = () => {
        return this.getResource(`${this._apiBase}comics/?${this._apiKey}`);

    }
     _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}

export default MarvelService