import React, { Component } from 'react';

class Form extends Component {
  
    constructor(props){
        super(props);
      // const {name,email,password,country,gender,skills}=this.props
        this.initialState= {
            name:'',
            email:'',
            password:'',
            country:'',
            gender:'',
            skills:[]
        };
        this.state = this.initialState;

    }


   


    handleChange = event => {
        

        if(event.target.type==='checkbox'){
           let skills = [];
           if(event.target.checked){
              skills = [...this.state.skills] ;
              skills.push(event.target.value);
              event.target.checked = 'false';
           }else{
               skills = this.state.skills.filter(skill=> skill != event.target.value);
           }
           this.setState({
               skills
           });
        }else{
            this.setState({
                [event.target.name] :event.target.value 
            });
            console.log(event.target.value);
            
        }
        
        
        }


    
    

    submitForm = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
       
        console.log(this.state);
       document.getElementById('myForm').reset();
        
    }
      

     
    render() { 

        const { name, email,password,country,gender,skills } = this.state; 

       const  styles={
            margin:'5px' , padding:'5px'
        }
        return ( 

            
    
     <div className="container mx-2 my-5" style={{width:'500px' }}>
     <form id="myForm">
     <div className="form-group">
     <input 
        type="text"
        name="name"
        placeholder="Name" 
         className="form-control"
         value={name} 
         onChange={this.handleChange}
         />
     </div>
     <div className="form-group">
     <input 
        type="email" 
        name="email"
        placeholder="Email"
        className="form-control"
        value={email} 
        onChange={this.handleChange}
         />
     </div>
     <div className="form-group">
     <input 
        type="password" 
        name="password"
        placeholder="password" 
        className="form-control"
        value={password} 
        onChange={this.handleChange}
        />
     </div>
     <div className="form-group">
     <select 
       className="custom-select"
       name="country"
       onChange={this.handleChange}
       >
         <option>Select your Country</option>
         <option>Afganstan</option>
         <option>Albenia</option>
         <option>Armenia</option>
         <option>Argentina</option>
         <option>Australia</option>
         <option>Austria</option>
         <option>Bangladesh</option>
         <option>Brazil</option>
         <option>Canada</option>
         <option>Denmark</option>
         <option>England</option>
         <option>France</option>
         <option>Germany</option>
         <option>Hungary</option>
         <option>Iceland</option>
         value={country} 
        
     </select>
     </div>
     <div className="form-group">
     <input
        type="radio" 
        name="gender"
        value="male"
        onChange={this.handleChange}
        /> Male
       
    <input 
        type="radio"
        name="gender" 
       value="female" 
       onChange={this.handleChange}
        
        /> Female
        
    <input 
        type="radio" 
        name="gender"
        value="other" 
        onChange={this.handleChange}
        /> Other
        
     </div>
     <div className="form-group">
     <input 
         type="checkbox"
         name="skills"
         value="javascript"
         onChange={this.handleChange}
         style={styles} /> Javascript
     <input 
         type="checkbox" 
         name="skills"
         value="react"
         onChange={this.handleChange}
         style={styles}/>React
     <input 
          type="checkbox" 
          name="skills"
          value="nodeJs"
          onChange={this.handleChange}
         style={styles}/>NodeJs
     <input 
          type="checkbox" 
          name="skills"
          value="mongoDB"
          onChange={this.handleChange}
          style={styles}/>MongoDB
     
     </div>
     <div className="form-group">
     <input type="submit"
      value="Submit" 
       className="btn btn-warning" 
       onClick={this.submitForm}/>
       
     </div>
     </form>
     </div>



         );
    }
}
 
export default Form;