import axios from "axios";

export const customFetch = axios.create({
  baseURL:'https://api.dictionaryapi.dev/api/v2/entries/en'
})