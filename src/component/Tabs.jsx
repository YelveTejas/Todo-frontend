import React from 'react'
import { AllTabs } from '../redux/actiontypes'
import { useDispatch } from 'react-redux'
import { toggleTab, toggleTodo } from '../redux/action'
const Tabs = ({currentTab}) => {
    const dispatch = useDispatch()
  return (
    AllTabs.map((e)=>(
        <button 
        onClick={()=>dispatch(toggleTab(e))} 
        className={e == currentTab ?'tab button':'tab'}
        >{e}</button>
    ))
  )
}

export default Tabs