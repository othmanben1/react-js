import React,{useState,useEffect} from 'react'

function ChangeTitle(){
  const [count,useCount]= useState(0)
  const AddCount = ()=>{
    useCount(count+1)
  }
  useEffect(()=>{
    document.title= `Your clicked ${count} time`
  })
  return(
    <div>
      <p>Hello dear</p>
      <button type="button" onClick={AddCount}>Add Count</button>
    </div>

  )
}
export default ChangeTitle;