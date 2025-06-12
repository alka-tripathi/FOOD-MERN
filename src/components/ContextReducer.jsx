import React, { createContext, useContext, useReducer } from 'react'


const CartStateContext= createContext();
const CartDispatchContext=createContext();


const reducer=(state,action)=>{
    //add to cart



}

export  const CartProvider =({children})=>{
    const [state,dispatch]=useReducer(reducer,[]);   //[ initail state]
    return (
        <CartDispatchContext.Provider value={dispatch}>
          <CartStateContext value={state}>
            {children}
          </CartStateContext>

        

</CartDispatchContext.Provider>
    );
}

export const useCart=()=> useContext(CartDispatchContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);

