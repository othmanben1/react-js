import React,{component} from 'react'
import {ReactDOM} from 'react'
class Testobject extends component{
  render(){
    return(
      <div>
         <h1>Hello {this.props.personel.name}</h1>
         <h1>Do you age is {this.props.personel.age} ?</h1>
      </div>

    )
  }
}
export default Testobject;