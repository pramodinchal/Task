import React from 'react'

const ManageProject = () => {
  return (
    <div className='container4'>
        <div className="header">
        <h6>Who can manage projects</h6>
        <p>Don't panic - You can also customize this types in settings</p>
    </div>
    <div className='blocks'>
    <div id='block1' style={{ display: 'block', alignItems: 'center' }}>
        <img src="everyone.png" alt="My Image" id="imgeveryon"/>
        <span id='span'>Everyone</span><p id='p'>All users can now see to it,but guests cannot <br/> access the projects.</p>
      </div>
    </div>
    <div className='block2'>
         <div style={{ display: 'block', alignItems: 'center' }}>
        <img src="admin1.png" alt="My Image" id="imgadmin"/>
        <span id='span'>Only Admin's</span><p id='p1'>Only admins can manage everything.</p>
      </div>  
    </div>
    <div className='block3'>
         <div style={{ display: 'block', alignItems: 'center' }}>
        <img src="specific.png" alt="My Image" id="imgspecific"/>
        <span id='span'>Only to Specific people</span><p id='p1'>Only some specific people can be able to see.</p>
      </div>  
    </div>
    <i class="fa-solid fa-chevron-left"></i>
    <button id="nxtbtn4">Next</button>
    </div>
  )
}

export default ManageProject;