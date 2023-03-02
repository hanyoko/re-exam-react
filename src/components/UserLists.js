import React, { useEffect } from 'react';

function UserList({li, delUser, toggleUser}){
    useEffect(()=>{
        console.log("화면에 나타남");
        return () => { console.log("화면에서 사라짐")}
    }, [])
    return(
        <li key={li.id} style={{backgroundColor:li.isActive ? "yellow" : null}}><span onClick={()=>toggleUser(li.id)}>{li.username}</span>
        <button onClick={()=>delUser(li.id)}>삭제</button>
        </li>
    )
}

const UserLists = ({aaa,delUser,toggleUser}) => {
    useEffect(()=>{
        console.log('user값이 설정됨');
        console.log(aaa);
        return () => {
            console.log('user가 바뀌기전');
            console.log(aaa);
        }
    }, [aaa])
    return (
        <ul>
            {aaa.map(li=><UserList li={li} delUser={delUser} toggleUser={toggleUser} />)}
     
        </ul>
    );
};

export default UserLists;