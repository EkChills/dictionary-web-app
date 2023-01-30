import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { customFetch } from "../axios/axios";

const initialState = {
  searchInput: '',
  mode: 'light-mode',
  fontSelectionOptions: ['Serif', 'Sans Serif', 'Mono'],
  fontSelection: 'Sans Serif',
  wordData: null,
  loading:false,
  selectMenu: false,
  searchError:false,
}

export const getWordInfo = createAsyncThunk('dictionary/getWord', async(word, thunkAPI) => {
  try {
    const resp = await customFetch.get(`/${word}`)
    const data = await resp.data
    return data
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
})

const dictionarySlice = createSlice({
  name: 'dictionarySlice',
  initialState,
  reducers: {
    openSelectMenu: (state) => {
      state.selectMenu = true
    },
    closeSelectMenu: (state, {payload}) => {
      if(!payload){
        state.selectMenu = false
      }
      return
    },
    changeSelect:(state,{payload}) => {
      state.fontSelection = payload
    },
    handleChange:(state, {payload}) => {
      const {name, value} = payload
      state[name] = value
    },
    setMode:(state) => {
      if(state.mode === 'light-mode') {
        state.mode = 'dark-mode'
      } else {
        state.mode = 'light-mode'
      }
    }
  },
  extraReducers:(builder) => {
    builder.addCase(getWordInfo.pending, (state) => {
      state.loading = true
    }).addCase(getWordInfo.fulfilled, (state, {payload}) => {
      state.searchError = false
      state.loading = false
      state.wordData = payload
    }).addCase(getWordInfo.rejected, (state) => {
      state.loading = false
      state.searchError = true
    })
  }
})

export const { openSelectMenu, closeSelectMenu, changeSelect, handleChange,  setMode} = dictionarySlice.actions

export default dictionarySlice.reducer