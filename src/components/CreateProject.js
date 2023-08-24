import React from "react";


const people = [
    {
        name: "Select a client",
      },
    {
      name: "Virat Kohli",
    },
    {
      name: "Jos Buttler",
    },
    {
      name: "Steve Wang",
    },
  ];
const CreateProject = () => {
    const [option, setOption] = React.useState("");
      
    const onChange = (ev) => {
      const val = ev.target.value;
      setOption(val);
    };
  return (
    <div className="container1">
    <form>
      <div className="header">
        <h5>Create Project</h5>
      </div>
      <div>
        <h6>Project name</h6>
        <input
          id="name"
          type="text"
          placeholder="Enter project name here"></input>
        <h6>Client</h6>
        <div>
            <select id="cname" value={option} onChange={onChange}>
              {people.map((person, index) => (
                <option value={index} key={index}>
                  {person.name}
                </option>
              ))}
            </select>
            <span>or</span><input id="cname2" placeholder="+ New Client"></input>
          </div>
        <h6>Dates</h6>
        <input id="date1" type="date" placeholder="value:28/08/2023"></input>
        <input id="date2" type="date" placeholder="value:28/09/2023"></input>
        <h6>Notes</h6>
        <textarea id="txtarea" type="text" placeholder="Optional"></textarea>
      </div>
      <button id="nxtbtn1">Next</button>
    </form>
    </div>
  );
};

export default CreateProject;
