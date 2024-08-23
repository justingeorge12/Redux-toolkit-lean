import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../reducers/itemSlice";
import { decrement, increment } from "../reducers/counterSlice";
import { forward } from "../reducers/runnerSlice";
import { move } from "../reducers/flySlice";

const Home = () => {

    const dispatch = useDispatch()
    const items =  useSelector((state) => state.items)
    const counter = useSelector((state) => state.counter)
    const runner = useSelector((state) => state.runner)
    const fly = useSelector((state) => state.fly)

    const handleAddItem = () => {
        dispatch(addItem({id: 1, name: 'justin'}))
    }

    return(
        <div>
            <h3>runner {runner}</h3>
            <h3>fly {fly}</h3>
            <button onClick={() => dispatch(move())}>move</button>
            <button onClick={() => dispatch(forward())}>forward</button>
            <button onClick={handleAddItem}> Add item </button>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <h2>counter : {counter}</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}> {item.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default Home