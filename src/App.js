import React from 'react';
/* import "./App.css"; */
import "./components/CreateProject.css";
import ManageProject from "./components/ManageProject";
import "./components/ProjectType.css";
import "./components/SelectView.css";
import "./components/ManageProject.css";
 import CreateProject from "./components/CreateProject";
 import ProjectType from "./components/ProjectType"; 
 import SelectView from "./components/SelectView"; 

function App() {
  return (
    <div className="containerfull">
     
       <CreateProject /> 
       <ProjectType/>  
        <SelectView/> 
        <ManageProject/>  
      
    </div>

  
  );
}

export default App;
