import React, {Component} from 'react';

export default class Header extends Component {
    render(){

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
    }
}
