import React from 'react';
import {add,sub,Mul,Div} from './Calculator';

function App(){
    return(
        <>
            <div>
                <h1>Basic Calculator</h1>
                <ol>
                    <li>Sum of the two numbers is : {add(30,20)}</li>
                    <li>Sub of the two numbers is : {sub(30,20)}</li>
                    <li>Mul of the two numbers is : {Mul(30,20)}</li>
                    <li>Div of the two numbers is : {Div(30,20)}</li>
                </ol>
            </div>
        </>
    )
};

export default App;