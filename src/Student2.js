import React from 'react'
  

class Student extends React.Component{
    constructor(props){
        super(props);
         this.state={
          header1:"",
          header2:"",
         
         }
     
    }
    render(){
     let  a = this.state.header1;
     let  b = this.state.header2;
     let add=[];
     for (let i = parseInt(a); i < parseInt(b);) {
           add.push(i);     
           i++;
           console.log(i);
     }
         return(

            <div>

                Enter Value1<input type="text"  placeholder="0" onChange={e=>this.setState({header1:e.target.value})} />
                Enter Value2<input type="text" placeholder="0"  onChange={e=>this.setState({header2:e.target.value})} />
              <div>
                <h1>{add}</h1>
                </div>  
            </div>
         )
    }
}
   export default Student;