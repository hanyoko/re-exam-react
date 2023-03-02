import { createContext, useEffect, useReducer, useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Inputs from './components/Inputs';
import Timer from './components/Timer';
import UserLists from './components/UserLists';

export const UserDispatch = createContext(null);

function App() {
  function reducer(state, action){
    switch(action.type){
      case 'adduser':
        return [
          ...state,
          action.abc
        ];
      case 'deluser':
        let newState = state.filter(user=>user.id !== action.id);
        return newState;
      case 'activeuser':
        let newState2 = state.map(user=>user.id === action.id ? {...user, isActive : !user.isActive} : user);
        return newState2;
      default:
        return state;
    }
  }
  const [users, dispatch] = useReducer(reducer, [
    {
      id: 1,
      username: "김그린",
      isActive: false
    },
    {
      id: 2,
      username: "김블루",
      isActive: false
    },
    {
      id: 3,
      username: "김레드",
      isActive: false
    }
  ]);
  //배열에 항목을 추가함
  //배열은 변수? 상태?
  const addUser = (user) => {
    dispatch({
      type: "adduser",
      abc: user
    })
  }
  // const lists = users.map(user=><li>{user.username}</li>);
  // const divs = [<div>하하하하</div>,<div>하하하하</div>,<div>하하하하</div>];
  
  //배열에서 삭제하기
  const delUser = (id) => {
    dispatch({
      type: "deluser",
      id: id
    })
  }
  //배열에서 isActive 값 반전하기
  const toggleUser = (id) => {
    dispatch({
      type: "activeuser",
      id: id
    })
  }
  const [isTimer, setIsTimer] = useState(true);
  useEffect(()=>{
    console.log("🎨렌더링")
  }, [])
  return (
    <UserDispatch.Provider value={dispatch}>
    <div className="App">
      <Inputs />
      {/* <li>{users[0].username}</li>
      <li>{users[1].username}</li>
      <li>{users[2].username}</li> */}
      {/* {lists} */}
      {/* {users.map(user=><li>{user.username}</li>)} */}
      {/* 이렇게 써주는 것도 가능하다 */}
      <UserLists aaa={users} delUser={delUser} toggleUser={toggleUser}/>
      <Counter />
      { isTimer && <Timer/>}
      <button onClick={()=>setIsTimer(!isTimer)}>정지</button>
    </div>
    </UserDispatch.Provider>
);
}

export default App;
