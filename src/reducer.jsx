
export const initialState = {

    basket: [],
    user: null
};
// Selector
// export const getTotal = (basket) => (basket?.reduce((amount, item) => (item.price + amount) - item.discount, 0));
export const getTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        // Apply discount directly here
        const discountAmount = Math.round((item.price * item.discount) / 100);
        // const updatedPrice = (item.price * item.quantity) - (item.discount * item.quantity);
        const updatedPrice = Math.round((item.price - discountAmount) * item.quantity);
        return amount + updatedPrice;
    }, 0) || 0;
};

// Calculate the total discount for the basket
export const getBasketDiscountTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        const discountAmount = Math.round((item.price * item.discount) / 100);
        return amount + discountAmount * item.quantity;
    }, 0);
};
// Calculate the total price without discount for the basket
export const getBasketPriceTotal = (basket) => {
    return basket?.reduce((amount, item) => {
        return amount + item.price * item.quantity;
    }, 0);
};

// Calculate item total including discount for the basket

export const getItemPriceTotal = (basket, itemId) => {
    const item = basket.find((item) => item._id === itemId);
    if (item) {
        const discountAmount = Math.round((item.price * item.discount) / 100);
        const totalPrice = Math.round((item.price - discountAmount) * item.quantity);
        return totalPrice; // Return the total price for the item after discount
    }
    return 0; // Return 0 if the item is not found in the basket
};
export const getItemDiscountTotal = (basket, itemId) => {
    const item = basket.find((item) => item._id === itemId);
    if (item) {
        return (item.discount * item.quantity) || 0; // Return total price for the item, or 0 if not found
    }
    return 0; // Return 0 if the item is not found in the basket
};
export const getItemTotal = (basket, itemId) => {
    const item = basket.find((item) => item._id === itemId);
    if (item) {
        const totalPrice = Math.round((item.price * item.quantity) - (item.discount * item.quantity));
        return totalPrice; // Return the total price for the item
    }
    return 0; // Return 0 if the item is not found in the basket
};




const reducer = (state, action) => {

    console.log('action in reducer : ', state);
    // eslint-disable-next-line default-case
    switch (action.type) {

        case "ADD_TO_BASKET":
            const existingIndex = state.basket.findIndex(
                (item) =>
                    item._id === action.item._id
            );

            if (existingIndex >= 0) {
                // Update quantity if item already exists in basket
                const updatedBasket = [...state.basket];
                updatedBasket[existingIndex].quantity += 0
                return {
                    ...state,
                    basket: updatedBasket,
                };
            } else {
                // Add new item to basket
                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };
            }

        case 'REMOVE_FROM_BASKET':
            // remove all the same item
            /*return {
                ...state,
                basket: state.basket.filter(item => 
                    item.id !== action['item'].id)
            }*/
            // remove single item
            const index = state.basket.findIndex((basketItem) =>
                basketItem._id === action.item._id);

            let newBasket = [...state.basket];

            if (index >= 0) {
                // at the position [index] remove 1 item
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Cant remove product (id: ${action.item._id}) as in not in basket`)
            }

            return {
                ...state,
                basket: newBasket
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            };

        case 'increment':

            return {
                ...state,
                basket: state.basket.map(item =>
                    item._id === action.id
                        ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
                        : item
                )
            }

        case 'decrement':
            return {
                ...state,
                basket: state.basket.map(item =>
                    item._id === action.id
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) } // Increase quantity by 1 with Prevent negative quantity
                        : item
                )
            }

        default:
            return state;
    }

};
export default reducer;