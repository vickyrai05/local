import React,{Component} from 'react';
import "./Facebook.css";
import opl from './opl.png';
class Facebook extends Component{

    render(){
        var myStyle={
            
            
        }
            return(
           
                <div className="main" style={myStyle}>
                  <div className="inner"> 
                  <h1 className="logo">facebook</h1>
                  <table className='ab'>
                    <tbody>
                    <tr>
                      <td>Email or Phone</td> 
                      <td>Password</td> 
                    </tr>
                    <tr>
                     <td><input type="text"/></td>
                     <td><input type="text"/></td>
                     <td><button className='lo'>Login</button></td>
                    </tr>
                    <tr>
                        <td><input type='checkbox'/>Keep me Logged</td>
                        <td>Forget Your Password</td>
                    </tr>
                     </tbody>
                  </table> 
                   </div>
                       <div className='mn'>
                          <div className='inn'>
                               <div className='n1'>
                               <img src={opl} height='300' />

                               </div>
                               <div className='n2'>
                               <h2>Connect with Friend Faster,
                               <br></br>whenever you are.</h2>	

                               <h3>The facebook application is now<br></br>aviable on 2500+ phones</h3>

                               <ul class="square">
                                     <li>faster,smoother browsing</li>
                                     <li>works with phone's camera and contacts</li> 
                                     <li>No Periodic updates-just I easy download</li>
                                    </ul>

                                    <input type="button" class="dfg" value="Get Facebook mobile"/> 
									<hr size="1"/>		
                               </div>
                               
                               <div className='n3'>
                               <table class="righttable">
                                <tbody>
			      <tr>
				     <td colspan="2" class="su">SignUp</td>
				  </tr>
				  <tr>
					      <td colspan="2">it's free always will be </td>
					   </tr>
					       <tr>
					      <td colspan="2"><hr size="1"/></td>
					   </tr>
                       <tr>
                      <td align="right">First Name:</td>
					  <td><input type="text"/></td>
                   </tr>
				   <tr>
                      <td align="right">Last Name:</td>
					  <td><input type="text"/></td>
                   </tr>
                   <tr>
				       <td align="right">Your Email:</td>
					  <td><input type="text"/></td>
				  </tr>	
                   <tr>
				       <td align="right">Re-Enter Email:</td>
					  <td><input type="text"/></td>
				  </tr>	
                  <tr>
				       <td align="right">New Password:</td>
					  <td><input type="text"/></td>
				  </tr>	

                  <tr>
                       <td align="right">I am:</td>
                       <td><select name="select sex">
					        <option>select sex</option>
					       <option>Male</option>
						    <option>Female</option>
							 <option>Transgender</option> 
                        </select>
                         </td>	
                    </tr>	

                    <tr>
                       <td align="right">Birthday:</td>
                       <td><select name="Month">
					       <option>month</option>
						    <option>Feb</option>
							 <option>March</option> 
                        </select>
                         		
                       
                      <select name="day">
					       <option>day</option>
						    <option>2</option>
							 <option>3</option> 
                        </select>
	                     
                       <select name="year">
					       <option>year</option>
						    <option>2001</option>
							 <option>2000</option> 
                        </select>
                         </td>	
                    </tr>
                    <tr>
					       <td></td> 
						     <td>Why do I need to provide my birthday ?</td>
							 </tr>
						  <tr>
                               <td></td>
                               <td></td>
                          </tr> 							   
                         <tr>
                               <td></td>
                               <td></td>
                          </tr> 						
                          <tr>
					       <td></td>
						    <td> By clicking sign up,you agree to our <a href="first.html">Terms</a> and that you<br/>have read and
							 understand our <a href="first.html">Data Use Policy</a>, Including<br/><a href="first.html">our Cookie</a> Use.
							      
							</td>
                       </tr>
                       <tr>
					       <td></td>
						     <td><input type="button" class="jkl"value="SignUp"/></td>
                       </tr>
					   <tr>
					       <td></td>
						     <td colspan="2"><hr size="1"/></td>
             </tr>
             <br/>
               <tr>
						     <td colspan="2"> <a href="f9uu">Create a page </a>for a  celebrity,hand or business.</td>
               </tr>						   

					
                         </tbody>
                       </table>
                   
                               </div>
                              
                          </div>
                          <div className='footer' >
                          <ul class="flist1">
			      <li>English(US)</li>
				  <li>हिंदी</li>
				  <li>হিন্দি</li>
				  <li>ਪੰਜਾਬੀ</li>
				  <li>اردو</li>
				  <li>ಕನ್ನಡ</li>
				  <li>portugalština</li>
				  <li>பிரான்ஸ்</li>
				  <li> ⌨</li>
              </ul>
              <hr size="1" class="fhr"/>
              <div class="fdiv">facebook 2012 &copy;English(Us)</div>
              <ul class="flist2">
			      <li>Mobile'</li>
				  <li>Find Friends'</li>
				  <li>Badges'</li>
				  <li>People'</li>
				  <li>Pages'</li>
				  <li>About'</li>
				  <li>Advertising'</li>
				  <li>Create a Page'</li>
				  <li>People'</li>
				  <li>Developers'</li>
				  <li>Careers'</li>
				  <li>Privacy'</li>
				  <li>Help</li>
              </ul>
                          </div>
                     </div> 
                  
                </div> 
        
            )
    }
}

export default Facebook;