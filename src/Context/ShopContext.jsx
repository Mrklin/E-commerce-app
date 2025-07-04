import React, { createContext } from 'react'
import all_product from '../assets/Images/all_product'
import { useState } from 'react';
import { useEffect } from 'react';


    const ShopContext = createContext(null);

    // const getDefaultCart = () =>{
    //     let cart = {};
        
    //     for (let index = 0; index < all_product.length+1; index++) {
    //         cart[index] = 0;
    //     }
        
    //     return cart;
    // }


    const ShopContextProvider = (props) => {

        // const [cartItems, setCartItems] = useState(getDefaultCart);

         const [cartItems, setCartItems] = useState(()=> {
              let cart = {};
        
            for (let index = 0; index < all_product.length+1; index++) {
                cart[index] = 0;
                try {
             const storedContents = localStorage.getItem('myItems');
             return storedContents ? JSON.parse(storedContents): [];
            
            } catch (error) {
                console.error("Failed to paarse cart from localStorage:", error);
                return [];
            }
            }
                
            return cart;
        });

        useEffect(() => {
        try {
            localStorage.setItem('myItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error('Failed to save cart at localStorage:', error);
            
        }
    }, [cartItems]);

        const addToCart = (ItemId) => {
            setCartItems((prev)=> ({...prev,[ItemId]:prev[ItemId]+1}))
            
        }

        const removeFromCart = (ItemId) => {
            setCartItems((prev)=> ({...prev,[ItemId]:prev[ItemId]-1}))
        }

        const getTotalCartAmount =() =>{
            let totalAmount = 0;
            for(const item in cartItems)
              
                if(cartItems[item]>0){
                    let itemCost = all_product.find((product) => product.id===Number(item))
                    totalAmount += itemCost.new_price*cartItems[item];
                }
                return totalAmount;
            
        }

        const getTotalCartItems = () => {
            let totalItems = 0;
            for(const item in cartItems)
            {
                if(cartItems[item] > 0)
                {
                    totalItems += cartItems[item]
                }
            }
            return  totalItems;
        }


        
        const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart}

        

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
export {ShopContext}