import { useState } from "react";
import './calculatorstyle.css'

const Calculator = () => {

    const numbers = [
        {face:'1', id:1},{face:'2', id:2},{face:'3', id:3},{face:'4', id:4},{face:'5', id:5},
        {face:'6', id:6},{face:'7', id:7},{face:'8', id:8},{face:'9', id:9}
    ];

    const [result, setResult] = useState('')


    const ops = [ '/', '*', '+', '-', '.' ]

    const [inpt, setInpt] = useState("");

    const updateInpt = value => {
        if(
            ops.includes(value) && inpt === '' || 
            ops.includes(value) && ops.includes(inpt.slice(-1)
            )/**if the elements in ops are in value and  the input is empty or *//**same and  the last input is in ops */
        ) {
            return;
        }

        setInpt(inpt + value);

        if (!ops.includes(value)) {/**                   if the values that are not in ops */
            setResult (eval(inpt + value).toString()); 
        }
    }

    const finalResult =() => {
        setInpt (eval(inpt).toString());
    }

    const deletelast = () => {
        const value = inpt.slice(0, -1); /**0 means from the back -1 means remove 1 ||*/
        setInpt(value)
    }

    const deleteall = () => {
        const value = inpt.slice(0, -0); /**0 means from the back -1 means remove 1 ||*/
        setInpt(value)
    }

    return (
        <div className="calculator">
            <div className="calculatorr">
                <div className="display">
                    {result ? <span>({result})</span> : ''}{inpt || '0'} 
                    {/*show result if there is a value show as first way orelse let it be empty |||inpt or 0 i.e it should show 0 if inpt is empty*/}
                </div>

                <div className="operators">
                    <button className="buttn" onClick={ () => updateInpt('+') }>+</button>
                    <button className="buttn" onClick={ () => updateInpt('-') }>-</button>
                    <button className="buttn" onClick={ () => updateInpt('/') }>/</button>
                    <button className="buttn" onClick={ () => updateInpt('*') }>*</button>
                </div>

                <div className="digits">
                    {numbers.map((number) => (
                        <button 
                            className="digbtn"
                            key={number.id}
                            onClick={ () => updateInpt(number.face.toString())}
                        >
                            {number.face}
                        </button>
                    ))}
                    <button className="buttn" onClick={ () => updateInpt('0') }>0</button>
                    <button className="buttn" onClick={ () => updateInpt('.') }>.</button> 
                    <button className="buttn" onClick={ () => deletelast() }>DEL</button>
                    <button className="buttn23" onClick={ () => finalResult() }>=</button>
                    <button className="buttn2" onClick={ () => deleteall() }>AC</button>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Calculator;