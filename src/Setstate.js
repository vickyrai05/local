import React from "react";

class setState extends React.Component{
      constructor(props){
        super(props);


        this.state={

            
            header:"Old Value"
        } 
         this.show = this.show.bind(this);
      }
      show()
      {
         this.setState({header:'New Value'})
      };

      render(){
          return(
            <div>
                <button onClick={this.show}>Click</button>
                <p>{this.state.header}</p>
            </div>
          );
      }
}
  
    export default setState;
  