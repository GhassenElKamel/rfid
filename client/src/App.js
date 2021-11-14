import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = props => { {

    const [idd, setId] = useState(0);
    const [newId, setNewId] = useState(0);
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [gender, setGender] = useState(0);
    const [newGender, setNewGender] = useState(0);
    const [email, setEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [number, setNumber] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [position, setPosition] = useState("");
    const [newPosition, setNewPosition] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
  const [state, setState] = useState({
    key_id: ""
  });

  const handleChange = (e) => {
    setState({
      [e.target.key_id]: e.target.value
    });
      getEmployeesId(e.target.value);
      console.log("value="+e.target.value)
  };

  const addEmployee = () => {
    Axios.post("http://localhost:4000/create", {
	idd:idd,
	name: name,
	gender: gender,
	position:position,
	email:email,
	number:number,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
	tag_id:idd,
	name: name,
	gender: gender,
	position:position,
	email:email,
	number:number,
        },
      ]);
    });
  };


  const updateEmployeeId = (id) => {
    Axios.put("http://localhost:4000/update/id", { idd: newId, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
              ? {
		  id: val.id,
		  tag_id:newId,
		  name: val.name,
		  gender: val.gender,
		  position:val.position,
		  email:val.email,
		  number:val.number,
                }
              : val;
          })
        );
      }
    );
  };

    const updateEmployeeName = (id) => {
    Axios.put("http://localhost:4000/update/name", { name: newName, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
		  ? {
		      id: val.id,
		      tag_id:val.tag_id,
		      name:newName,
		      gender: val.gender,
		      position:val.position,
		      email:val.email,
		      number:val.number,
                  }
              : val;
          })
        );
      }
    );
    };

        const updateEmployeeGender = (id) => {

    Axios.put("http://localhost:4000/update/gender", { gender: newGender, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
		  ? {
		      id: val.id,
		      tag_id:val.tag_id,
		      name:val.name,
		      gender: newGender,
		      position:val.position,
		      email:val.email,
		      number:val.number,
                  }
              : val;
          })
        );
      }
    );
	};
        const updateEmployeePosition = (id) => {
    Axios.put("http://localhost:4000/update/Position", { position: newPosition, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
		  ? {
		      id: val.id,
		      tag_id:val.tag_id,
		      name:val.name,
		      gender: val.gender,
		      position:newPosition,
		      email:val.email,
		      number:val.number,
                  }
              : val;
          })
        );
      }
    );
	};
        const updateEmployeeEmail = (id) => {
    Axios.put("http://localhost:4000/update/email", { email: newEmail, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
		  ? {
		      id: val.id,
		      tag_id:val.tag_id,
		      name:val.name,
		      gender: val.gender,
		      position:val.position,
		      email:newEmail,
		      number:val.number,
                  }
              : val;
          })
        );
      }
    );
	};
        const updateEmployeeNumber = (id) => {
    Axios.put("http://localhost:4000/update/number", { number: newNumber, id: id }).then(
      (response) => {
        setEmployeeList(
          employeeList.map((val) => {
            return val.id == id
		  ? {
		      id: val.id,
		      tag_id:val.tag_id,
		      name:val.name,
		      gender: val.gender,
		      position:val.position,
		      email:val.email,
		      number:newNumber,
                  }
              : val;
          })
        );
      }
    );
  };

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:4000/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const getEmployees = () => {
    Axios.get("http://localhost:4000/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const getEmployeesId = (id) => {
      Axios.get(`http://localhost:4000/empl/${id}`).then((response) => {
        setEmployeeList(response.data);
    });
  };

    var trigger;
      const getId = () => {
    trigger= setInterval(function(){
        Axios.get("http://localhost:4000/get-test").then((response) => {
            setState({ key_id: response.data.UIDresult })
            console.log( response.data.UIDresult)
        }); }, 3000);
  };

    return (


	<div className="App">
            <div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
            <Link to="/load">Load</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                      <Route path="/list">

             {employeeList.map((val, key) => {

                 return (

            <div className="employee">
		  <div>
		<h3>Id: {val.tag_id}</h3>
                <h3>Name: {val.name}</h3>
                <h3>Gender: {val.gender}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Email: {val.email}</h3>
                <h3>Phone Number: {val.number}</h3>
              </div>
		  <div>

                      <input
			  type="number"
			  placeholder={val.tag_id}
			  onChange={(event) => {
			      setNewId(event.target.value);
			      //console.log(event.target.value);
              }}

                      />
		      <button type="button" class="btn btn-primary btn-sm" onClick={() => {updateEmployeeId(val.id);}}>*</button>



		  <input
              type="text"
              placeholder={val.name}
              onChange={(event) => {
                  setNewName(event.target.value);
		  //console.log(event.target.value);
              }}
                  />
		       <button  type="button" onClick={() => {updateEmployeeName(val.id);}}>*</button>
                <input
                  type="text"
                  placeholder={val.gender}
                  onChange={(event) => {
                      setNewGender(event.target.value);
		      //console.log(event.target.value);
                  }}
                />
		      <button type="button" onClick={() => {updateEmployeeGender(val.id);}}>*</button>
                <input
                  type="text"
                  placeholder={val.position}
                  onChange={(event) => {
                      setNewPosition(event.target.value);
		      //console.log(event.target.value);
                  }}
                />
		      <button type="button" onClick={() => {updateEmployeePosition(val.id);}}>*</button>
                <input
                  type="text"
                  placeholder={val.email}
                  onChange={(event) => {
                      setNewEmail(event.target.value);
		      //console.log(event.target.value);
                  }}
                />
		      <button type="button" onClick={() => {updateEmployeeEmail(val.id);}}>*</button>
                <input
                  type="number"
                  placeholder={val.number}
                  onChange={(event) => {
                      setNewNumber(event.target.value);
		     // setNewName(event.target.value);

                  }}
                />
		 <button type="button" onClick={() => {updateEmployeeNumber(val.id);}}>*</button>

                <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
          </Route>
            <Route path="/load">
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
	        <div className="information">
                <label>ID:</label>
                <input
            type="text"
            onChange={handleChange}
        value={state.key_id}
                />
            <div class="wrapper">
            <button onClick={getId} class="small-but">Load</button>
            <button onClick={() => {
                getEmployeesId(state.key_id);
                console.log(state.key_id)
            }}>search</button>
        </div>



                     {employeeList.map((val, key) => {

                 return (
		         <div>
                         <div className="employee">
		         <h3>Id: {val.tag_id}</h3>
                         <h3>Name: {val.name}</h3>
                         <h3>Gender: {val.gender}</h3>
                         <h3>Position: {val.position}</h3>
                         <h3>Email: {val.email}</h3>
                         <h3>Phone Number: {val.number}</h3>
                         </div>
                         </div>

          );
                     })}

                </div>
                </Route>
          <Route path="/">

	    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
	<div className="information">
        <label>ID:</label>
        <input
          type="text"
          onChange={handleChange}
            value={state.key_id}
        />
            <div class="wrapper">
            <button onClick={getId} class="small-but">Load</button>

            </div>
                <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
            }}

        />
        <label>gender:</label>
        <input
          type="text"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          />
        <label>Phone Number:</label>
        <input
          type="number"
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Card</button>
      </div>
	      <div className="employees">
	    <button onClick={getEmployees}>Show Card</button>

      </div>
            </Route>
        </Switch>
      </div>
    </Router>


      </div>

    </div>
    );}
                   }

export default App;
