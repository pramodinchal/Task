import React from 'react'
/* import image from "./listicon.png" */

const SelectView = () => {
  return (
    <div className='container3'>
     <div className="header">
      <h6>Select a view</h6>
      <p>You can also customize this types in settings</p>
    </div>
     <div>
      <img src="listicon.png" alt="image-list" id='list'/> <img src="board.png" alt="image-list" id='list'/>
     <div><span id="spanlist">List</span><span id='spanboard'>Board</span></div>
      </div> 
      <button id="nxtbtn3">Next</button>
    </div>
  )
}

export default SelectView;