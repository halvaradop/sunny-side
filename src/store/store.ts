import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"
import { varianSlice } from "../reducers/variants/variantSlice";

const store = configureStore({
    reducer: {
        variant: varianSlice.reducer
    }
})

const useAppDispatch: () => typeof store.dispatch = useDispatch
const useAppSelector: TypedUseSelectorHook <ReturnType<typeof store.getState>> = useSelector

export { store, useAppSelector, useAppDispatch }