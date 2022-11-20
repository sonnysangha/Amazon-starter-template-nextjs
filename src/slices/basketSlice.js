import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {
		// Actions
		addToBasket: (state, action) => {
			state.items = [...state.items, action.payload];
		},
		removeFromBasket: (state, action) => {
			// DO not use .filter() because otherwise you will remove all products with the same id and not just the entry
			const index = state.items.findIndex(
				(basketItem) => basketItem.id === action.payload
			);

			let newBasket = [...state.items];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(
					`Can not remove product (id: ${action.payload.id}) as it is not in the basket`
				);
			}

			state.items = newBasket;
		},
	},
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
	state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
