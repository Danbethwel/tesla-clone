import { creteSlice } from "@redux.js/toolkit"

const initialState ={
    cars: ["Model-S","Model-3,", "Model-x","Model-Y" ]
}

const carSlice = createSlice({
    name:"car",
    initialState,
    reducer:{}
})

export const selectCars = state=>state.car.cars

export default carSlice.reducer