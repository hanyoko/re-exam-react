import React, { useContext, useRef, useState } from 'react';
import { UserDispatch } from '../App';
import { UserContext } from '../context/UserContext';

const Inputs = () => {
    const sitetitle = useContext(UserContext);
    const dispatch = useContext(UserDispatch);
    //인풋에 입력했을 때 실행되는 함수
    const [ inputText, setInputText ] = useState("");
    const onChangeInput = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }
    const idnum = useRef(4);
    console.log(idnum);
    //버튼을 클릭할 때 실행될 함수
    const onClick = () => {
        dispatch({
            type: "adduser",
            abc: {id: idnum.current, username: inputText}
        })
        idnum.current++;
    }
    return (
        <div>
            <input name="username" onChange={onChangeInput} />
            <button onClick={onClick}>추가</button>
            <p>{inputText}</p>
        </div>
    );
};

export default Inputs;