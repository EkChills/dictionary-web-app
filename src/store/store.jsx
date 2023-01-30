import { configureStore } from "@reduxjs/toolkit";
import dictionarySlice from "../features/dictionarySlice";

export const store = configureStore({
  reducer:{
    dictionary:dictionarySlice
  }
})