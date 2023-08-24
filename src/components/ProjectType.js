import React, { useState } from 'react'
const ProjectType = () => {
  const [option, setOption] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
      
  const onChange = (ev) => {
    const val = ev.target.value;
    setOption(val);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId === selectedButton ? null : buttonId);
  };
  return (
   <div className='container2'>
     <div className="header">
      <h6>Project type</h6>
      <p>Don't panic - You can also customize this types in settings</p>
    </div>
    <div className='content'>
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" 
  className={`btn btn-primary ${selectedButton === 'btn1' ? 'active' : ''}`}
  id="btn1"onClick={() => handleButtonClick('btn1')}>
      Time & Materials
      </button>
      <button
        type="button"
        className={`btn btn-primary ${selectedButton === 'btn2' ? 'active' : ''}`}
        id="btn2"
        onClick={() => handleButtonClick('btn2')}
      >
        Fixed Fee
      </button>
      <button
        type="button"
        className={`btn btn-primary ${selectedButton === 'btn3' ? 'active' : ''}`}
        id="btn3"
        onClick={() => handleButtonClick('btn3')}
      >
        Non-Billable</button>
</div>
    </div>
    <form>
      <h6>Hourly</h6>
      <p>We need hourly rates to track your project's billable amount.</p>
      <select value={option} onChange={onChange}> 
          <option  value={option} disabled={true}>
              <p id='optionspan' >-Project Hourly Rate-</p>
          </option>
          <option value={500}>500</option>
          <option value={1000}>1000</option>
          <option value={2000}>2000</option>
            </select> <input type="text" placeholder='₹12,678.00'></input>
            <h6>Budget</h6>
          <p>We need hourly rates to track your project's billable amount.</p>
          <select value={option} onChange={onChange}> 
          <option  value={option} disabled={true}>
              <p id='optionspan' >-Hours per Person-</p>
          </option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
            </select>
            <div class="custom-control custom-checkbox">
             <input type="checkbox" class="custom-control-input" id="customCheck1"/>
            <label class="custom-control-label" for="customCheck1">Budget resets every month</label>
            </div>
            <div class="custom-control custom-checkbox">
             <input type="checkbox" class="custom-control-input" id="customCheck1"/>
            <label class="custom-control-label" for="customCheck1">Send email alerts if project exceeds <input id="input" type='text' placeholder='80.00'></input>% of budget</label>
          </div>
          <button id="nxtbtn2">Next</button>
    </form>
    </div>
  
  )
}

export default ProjectType;