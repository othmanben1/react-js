import React,{useState}from 'react'
function SelectVille(){
  const [ville,setVille]=useState("")

  const afficher=(e)=>{
    e.preventDefault()
    alert(ville)
  }
  return(
    <>
      <form onSubmit={afficher}>
        <select name="ville" onChange={(e)=>{setVille(e.target.value)}}>
          <option>Choice the ville please : </option>
          <option value="ElJadia">ElJadida</option>
          <option value="Casablanca">Casablanca</option>
          <option value="Agadir">Agadir
          </option>
          <option value="Rabat">Rabat</option>
        </select>
        <button type="submit">Display</button>
      </form>
    </>

  )
}
export default SelectVille;