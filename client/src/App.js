import "./App.css";
import { useState } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import $ from 'jquery';
import { useEffect } from 'react';
import useScript from './hooks.js';
import moment from 'moment';

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

    var dom = document.getElementById('texti');


    const handleChange = (e) => {
    setState({
      [e.target.key_id]: e.target.value
    });

  };

    const addEmployee = () => {
        console.log(state.key_id);
    Axios.post("http://localhost:4000/create", {
	idd:state.key_id,
	name: name,
	gender: gender,
	position:position,
	email:email,
	number:number,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
	tag_id:state.key_id,
	name: name,
	gender: gender,
	position:position,
	email:email,
	number:number,
        },
      ]);
    });
  };

    const addEmployeeauto = (val) => {
    Axios.post("http://localhost:4000/createauto", {
	idd:val.tag_id,
	name: val.name,
	gender: val.gender,
	position:val.position,
	email:val.email,
	number:val.number,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
	tag_id:val.tag_id,
	name: val.name,
	gender: val.gender,
	position:val.position,
	email:val.email,
	number:val.number,
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
            getEmployeesId(response.data.UIDresult);
            console.log( response.data.UIDresult)

        }); }, 3000);
      };


    //             var previousValue =state.key_id;
    // if(dom != null){
    //     if ($('#texti').val().length != 0 || undefined && previousValue!=null)
    //     {
    //         alert("test");

    //   //               {employeeList.map((val, key) => {
    //   //                   addEmployeeauto(val);
    //   //                   console.log(val.name);
    //   // })}
    //     }

    // }


    useScript('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js');
 var Request = function(action, payload) {
	this.Action = action;
	this.Payload = payload || null;
    };

            console.log("once")
    var Service = function(url) {
	this.Url = url;

	var self = this;
	var ws = null;
	var isStart = false;

	var responseHandlers = [];

	this.AttachResponseHandler = function(contextAction, handler) {
	    responseHandlers.push({
		ContextAction: contextAction,
		Handle: handler
	    });

	    return this;
	};

	this.GetResponseHandler = function(contextAction) {
	    for(var i in responseHandlers) {
		if(responseHandlers[i].ContextAction == contextAction) {
		    return responseHandlers[i];
		}
	    }

	    return null;
	};

	this.Start = function(callback) {
	    if(isStart) {
		throw "Service has been already started";
	    }

	    isStart = true;

	    ws = new WebSocket('ws://' + this.Url);
            console.log( this.Url);

	    ws.onopen = function() {
		callback(self);
	    };

	    ws.onmessage = function (evt) {
		var response = JSON.parse(evt.data);
		var responseHandler = self.GetResponseHandler(response.Context.Action);

		if(responseHandler != null) {
		    responseHandler.Handle(response.Payload, self);
		}
	    };

	    ws.onclose = function() {};
	};

	this.SendRequest = function(request) {
	    ws.send(JSON.stringify(request));
	};

	return this;
    };

    var TAGS = null;

    var getTagById = function(id) {
	for(var i in TAGS) {
	    if(TAGS[i].Id == id) {
		return TAGS[i];
	    }
	}

	return null;
    };

    var $entry = function(entry) {
	var _tag = getTagById(entry.TagId);

	return $('<li />')
	    .addClass('entry')
	    .append($('<span />').addClass('name').append(_tag.Name))
            .append($('<span />').addClass('time').append(moment(entry.Time, 'x').format('DD.MM.YYYY HH:mm:ss')))
	    .append($('<span />').addClass('dir').append(entry.Dir));
    };

    $(document).ready(function() {
	new Service('192.168.110.101:8080')
	    .AttachResponseHandler('GetEntries', function(entries) {
		var $entries = $('.entries');

		$.each(entries.reverse(), function() {
		    $entries.append($entry(this));
		});
	    })
	    .AttachResponseHandler('GetTags', function(tags, service) {
		TAGS = tags;

		var $tags = $('.tags');

		$.each(tags, function() {
		    $tags
			.append(
			    $('<li />')
				.addClass('tag')
				.addClass('id' + this.Id)
				.addClass(this.CurrentDir == null ? 'OUT' : this.CurrentDir.Dir)
				.append(this.Name)
                                .append('<img src="https://www.freeiconspng.com/thumbs/person-icon/clipart--person-icon--cliparts-15.png" alt="ghassen" width="200" height="200">')

			);
		});

		service.SendRequest(new Request('GetEntries'));
	    })
	    .AttachResponseHandler('TagModified', function(entry) {
		$('.tag.id' + entry.TagId)
		    .removeClass('IN')
		    .removeClass('OUT')
		    .addClass(entry.Dir);

		$('.entries').prepend($entry(entry));
	    })
	    .Start(function(service) {
		service.SendRequest(new Request('GetTags'));
	    });
    });




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

        		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
		<title>Rfid Manager</title>


            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"/>
	        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"/>
	        <div className="information">
                <label>ID:</label>
            <input
        id="texti"
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

                <ul class="tags" id="tags"></ul>
		<div style={{clear : 'both'}}></div>
		<ul class="entries"></ul>

        </div>


                     {employeeList.map((val, key) => {

                 return (
		         <div>
                         <div className="employee">
		         <h4 >Id: {val.tag_id}</h4>
                         <h4>Name: {val.name}</h4>
                         <h4>Gender: {val.gender}</h4>
                         <h4>Position: {val.position}</h4>
                         <h4>Email: {val.email}</h4>
                         <h4>Phone Number: {val.number}</h4>
                         <button  onClick={() => {
                             addEmployeeauto(val);
                                  }}>save</button>
                             </div>
                         </div>


          );
                     })}

                </div>
                </Route>
                <Route path="/">

                    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js"></script>
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
