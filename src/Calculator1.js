import React from 'react'


class Calculator1 extends React.Component{
    constructor(props){
        super(props);
         this.state={
          number1:"",
          number2:"",
      
         }
     
    }
      
    Calculate = () => {
        let  n1= parseInt(this.state.number1)
        let  n2= parseInt(this.state.number2)
        let  fe= n1+n2;
        alert(fe);
     }

     
   

    render(){
       

         return(

            <div>
                Enter Value1<input type="text"  onChange={(e)=>this.setState({number1:e.target.value})} />
                Enter Value2<input type="text"  onChange={(e)=>this.setState({number2:e.target.value})} />
               
                <button  onClick={this.Calculate}>Plus</button>
               
                
            </div>
            
         )
    }
}
   export default Calculator1;