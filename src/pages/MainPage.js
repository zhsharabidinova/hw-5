import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstValueAction, resultAction, secondValueAction } from "../store/mainSlice";

function MainPage(){
    const dispatch = useDispatch()
    const { value1, value2, result } = useSelector(state => state.mainSlice)
    const [inputValue1, setInputValue1] = useState('')
    const [inputValue2, setInputValue2] = useState('')
    const firstValueInput = (event)=>{
        setInputValue1(event.target.value)
        dispatch(firstValueAction(Number(event.target.value)))
    } 
    const secondValueInput = (event) =>{
        setInputValue2(event.target.value)
        dispatch(secondValueAction(Number(event.target.value)))
    }

    const setOperation = (operator) => {
        if (inputValue1 === "" || inputValue2 === "") {
            alert("Поле не должно быть пустым");
            return;
          }
    
        switch(operator){
            case '+':
                dispatch(resultAction(value1 + value2));
                break;
            case '-':
                dispatch(resultAction(value1 - value2))
                break;
            case '*':
                dispatch(resultAction(value1 * value2))
                break;
            case '/':
                dispatch(resultAction(value1 / value2))
                break
            default: break
        }
    }
    return(
        <>
            <input type="number" value={value1} onChange={firstValueInput}/>
            <input type="number" value={value2} onChange={secondValueInput}/>
            <button onClick={()=>setOperation('+')}>+</button>
            <button onClick={()=>setOperation('-')}>-</button>
            <button onClick={()=>setOperation('*')}>*</button>
            <button onClick={()=>setOperation('/')}>/</button>
            <p>{result}</p>
        </>
        
    )
}

export default MainPage