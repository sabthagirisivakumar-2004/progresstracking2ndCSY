import React,{useState} from 'react'

const Todo = () => {
    const [item,setItem]=useState('');
    const [data,setData]=useState([]);
    function additem(){
        if(!item){
          alert("enter an item");
          return;
        }
    const items={
        id:Math.floor(Math.random()*1000),
        value:item,
    }

    setData(oldList=>[...oldList,items]);
    setItem("");
   
    }
    function deleteitem(id){
 const array=data.filter(a=>a.id!==id);
 setData(array);
    }
  return (
    <>
    <h1>todoList</h1>
    <input type="text" placeholder='add an item...' value={item} onChange={(e)=>{setItem(e.target.value)}}></input>
    <button onClick={additem}>Add</button>
    <ul>
    { data.map( a=>(
    <li key={a.id}>{a.value}<button onClick={()=>deleteitem(a.id)}>❌</button></li>
    )
    )
    }
    </ul>
    </>
  )
}

export default Todo