import { createSlice } from "@reduxjs/toolkit"

interface VariantState {
    sizeVariant: Record <string, string>,
    colorVariant: Record <string, string>
}

const initialState: VariantState = {
    sizeVariant: {
        "lg": "text-lg font-semibold font-barlow",
        "4xl": "text-4xl font-extrabold",
    },
    colorVariant: {
        "blue": "text-blue",
        "blue-200": "text-blue-200",
        "cyan": "text-cyan",
        "cyan-100": "text-cyan-100",
        "cyan-200": "text-cyan-200"
    }
}

const varianSlice = createSlice({
    name: "variant",
    initialState,
    reducers: {

    }
})

export { varianSlice }