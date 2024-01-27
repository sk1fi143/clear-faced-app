import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if(findItem) {
                findItem.count += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0)
        },
        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload);

            if(findItem) {
                if(findItem.count > 1){
                    findItem.count -=1;
                }
            }
            let totalPrice = 0;

            for (const item of state.items) {
                totalPrice += item.price * item.count;
            }
        
            state.totalPrice = totalPrice;
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) - sum * obj.count;
            }, 0)
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        }
    },
});

export const { addItem, minusItem, removeItem, clearItems } = basketSlice.actions;
export default basketSlice.reducer;