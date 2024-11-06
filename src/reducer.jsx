export const initialState = {
    basket: [],
    user: null,
};

// Selector
export const getTotal = (basket) => {
    return basket.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getBasketDiscountTotal = (basket) =>
    basket?.reduce((amount, item) => (item.discount * item.quantity) + amount, 0) || 0;

export const getBasketPriceTotal = (basket) =>
    basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0) || 0;

export const getItemTotal = (basket, itemId) => {
    const item = basket.find((item) => item.id === itemId);
    return item ? (item.price * item.quantity) - (item.discount * item.quantity) : 0;
};
export const getItemDiscountTotal = (basket, itemId) => {
    const item = basket.find((item) => item.id === itemId);
    return item ? (item.discount * item.quantity) : 0;
};
export const getItemPriceTotal = (basket, itemId) => {
    const item = basket.find((item) => item.id === itemId);
    return item ? (item.price * item.quantity) : 0; // Calculate the total price for a specific item
};

const reducer = (state, action) => {
    console.log('action in reducer:', action);

    switch (action.type) {
        case 'ADD_TO_BASKET': {
            const itemExists = state.basket.findIndex(item => item.id === action.item.id);
            const updatedBasket = [...state.basket];

            if (itemExists >= 0) {
                updatedBasket[itemExists].quantity += action.item.quantity;
            } else {
                updatedBasket.push(action.item);
            }

            return { ...state, basket: updatedBasket };
        }

        case 'REMOVE_FROM_BASKET': {
            const newBasket = state.basket.filter(item => item.id !== action.item.id);
            if (newBasket.length === state.basket.length) {
                console.warn(`Can't remove product (id: ${action.item.id}) as it is not in basket`);
            }
            return { ...state, basket: newBasket };
        }

        case 'SET_USER':
            return { ...state, user: action.user };

        case 'EMPTY_BASKET':
            return { ...state, basket: [] };

        case 'increment':
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: item.quantity + (action.quantity || 1) }
                        : item
                ),
            };

        case 'decrement':
            return {
                ...state,
                basket: state.basket.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                        : item
                ),
            };

        default:
            return state;
    }
};

export default reducer;
