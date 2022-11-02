import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";
const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
        return { count : state.count + 1}
        case 'decrement':
        return { count : state.count - 1}
        default : 
        return state

    }
    
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0})
      
    const increment = () => {
        dispatch({type : 'increment'})
    }
    const decrement = () => {
        dispatch({type : 'decrement'})
    }
    return(
        <>
        <div className="container-fluid counter_container bg-light">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div className="card col-9 col-lg-7 text-center mt-5 shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title mt-5 display-6 text-success">My First Counter App Using useReducer Hook</h5>
                                <h3 className="card-text mt-5 text-primary">{state.count}</h3>
                                <div className="counter_button d-flex justify-content-center mt-3">
                                    <button className="btn btn-primary me-3" onClick={decrement}>-</ button>
                                    <button className="btn btn-primary ms-4" onClick={increment}>+</ button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;