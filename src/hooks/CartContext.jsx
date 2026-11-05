import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext({});

export const CartProvider = ({children}) => {
    const[cartProducts, setCartProducts] = useState([]);

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);
        const newProductsInCart = cartIndex >= 0
            ? cartProducts.map((prd, index) => (
                index === cartIndex ? { ...prd, quantity: prd.quantity + 1 } : prd
            ))
            : [...cartProducts, { ...product, quantity: 1 }];

        setCartProducts(newProductsInCart);
        updateLocalStorage(newProductsInCart);
    }

    const clearCart = () => {
        setCartProducts([]);

        updateLocalStorage([]);
    };

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) =>  prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map((prd) => {
            return prd.id === productId ? {...prd, quantity: prd.quantity + 1}:
            prd;
        });

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    }

    const decreaseProduct = (productId) => {
        const product = cartProducts.find((prd) => prd.id === productId);

        if (!product) {
            return;
        }

        if (product.quantity <= 1) {
            deleteProduct(productId);
            return;
        }

        const newCart = cartProducts.map((prd) => (
            prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd
        ));

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    
    const updateLocalStorage = (products) => {
        localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientDataCart = localStorage.getItem('devburguer:cartInfo');

        if(clientDataCart) {
            setCartProducts(JSON.parse(clientDataCart));
        }
    }, [])

    return (
        <CartContext.Provider
            value={{
                cartProducts,
                putProductInCart, 
                clearCart, 
                deleteProduct, 
                increaseProduct,
                decreaseProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);

    if(!context) {
        throw new Error('useCart must be used with a context');
    }

    return context;
}