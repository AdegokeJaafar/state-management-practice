/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { decrement, increment, set } from './action';
import { SetCounter } from "./SetCounter";

 export const Counter = () => {
     const incident = 'Incident';
     const { count, increment, decrement, set } = useCounter();

    const actions = bindActionCreators({ increment, decrement, set }, dispatch);

     return (
         <main className="Counter">
         <h1>Days Since last {incident}</h1>
         <p className="count">{count}</p>
         <section className="controls">
             <button onClick={()  => increment()}>Increment</button>
             <button onClick={()  => set(0)}>Reset</button>
             <button onClick={()  => decrement()}>Decrement</button>
         </section>
         <SetCounter />
         </main>
     );
 };

 export default Counter;