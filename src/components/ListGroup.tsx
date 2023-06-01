import {useState} from 'react';
interface Props{
    items:string[];
    heading:string;
    onSelectItem:(item:string)=>void;
    
}

function ListGroup({items,heading,onSelectItem}:Props) {
    
    //i have data that change so i cuse state
    useState  //stateHook conponent have data that change over time
    const [selectedIndex,setSelectedIndex]=useState(-1);
    return (
        <>
            <h1>List</h1>
            {items.length===0 && <p>No item FOUND</p>}
            <ul className="list-group">
                {/* each should have a unique key */}
             {items.map((item,index)=>
             <li className={selectedIndex===index ? 'list-group-item active':'list-group-item' } key={item} onClick={()=>{setSelectedIndex(index); onSelectItem(item);}}>{item}</li>)}
            </ul>
        </>
      );
}

export default ListGroup;
