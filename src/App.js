import  { React , Component } from 'react';



class Appp extends Component{
constructor(){
  super();
  this.state={
    employeeData : []
  }
}

handleSubmit=(e)=>{
  e.preventDefault();
  let employeeData = this.state.employeeData;
  let Title = this.refs.txtTitle.value;
  let Description = this.refs.txtDescription.value;

  let newEmployee = {
    "Title" : Title,
    "Description" : Description
  }

  employeeData.push(newEmployee);
  this.setState(
    {
      employeeData: employeeData
    }
  )

  this.refs.myForm.reset();
}

// handleEdit=(i)=>{

// }



// handleDelete=(i)=>{
//   let employeeData=this.state.employeeData;
//   employeeData.splice(i,1);
//   this.setState({
//     employeeData:employeeData
//   });
// }

render(){
  let employeeData= this.state.employeeData;
  return(
    <div>
    <form ref ="myForm">

<label>Title</label>
<input type="text" ref="txtTitle" placeholder="Enter Tittle"></input>
   
   
   <label>Description</label>
   <input type ="text area" ref="txtDescription" placeholder="Enter Description"/>
   <button onClick={e => this.handleSubmit(e)}>Save</button>
   
    </form>
<table>
<tr>
  <th>Title</th>
  <th>Description</th>
</tr>
{
  employeeData.map((data , i) =>
  <tr key ={i}>
    <td>{data.Title}</td>
    <td>{data.Description}</td>
     {/* <td>

      <button onClick={this.handleEdit(i)}>Edit</button>
    
     </td>
     <td>
     
      <button onClick={this.handleDelete(i)}>Delete</button>
      
    </td> */}

  </tr>
  )
}
</table>

</div>


     )
}  
}
export default Appp;