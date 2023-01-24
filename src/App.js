import phone from './images/illustration-phones.svg';
import deskcircle from './images/illustration-editor-desktop.svg';
import lapcircle from './images/illustration-laptop-desktop.svg';
import allow from './images/icon-arrow-light.svg';
// import desktop from './images/college.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

function App() {

  const  [drop ,setDrop] = useState(false);
  return (

    <>
    
    <div className="row nav1">
<div className="col-md-3 logo">
  
   <h1>Blogr</h1>
   </div>



<div className="col-md-6 nenu">

<div className='navbarr' >
<ul>
<a href="url"><li>Product <img src={allow} className='allow'/> </li></a>
<a href="url"><li className='lii1' >Company <img src={allow} className='allow'/> </li></a>

    
  <li  style={{position:"relative"}} onClick={()=>setDrop(!drop)}>Connect <img src={allow} className='allow'/>
  <ul  style={{position:"absolute",display:drop?"block":"none",color:"black",padding:"1rem",top:"2rem",left:"0"}}>
  <li>Contact</li>
    <li>Newsletter</li>
    <li>Linkedln</li> 


  </ul>


    </li>
  </ul>
</div>
</div>
    <div className="col-md-3 btn_aside">

      <div className='aside'>
          <button className='buttom'>Login</button> 
          <button  className='buttom'>Sign up </button>
       </div>


    </div>

    <div className="col-md-3"></div>
    <div className="col-md-6 content" >
        <h2 style={{color:"white"}} >Modern publishing platform</h2>
        <p>Grow your audience and build your online bland</p>
        <div className='aside-btn'>
          <button className='buttom2'>Start for Free</button> 
          <button  className='buttom2'>Learn More</button>
       </div>
    </div>
    <div className="col-md-3"></div>
    
</div>

<div className="row">
  <div className="col-md-12  secondrow"> <h2>Desgned for the future</h2></div>
</div>

<div className="row">
<div className="col-md-6  row3">
   <h2>Modern publishing platform</h2>
   <p>In the above code, we are using the Navbar, Nav, NavDropdown, Form, FormControl, and Button components from the react-bootstrap library to create the Navbar. The Navbar.Brand component is used to display the logo and the title of the app on the left side of the Navbar. The Navbar.Toggle component is used to toggle the visibility of the Navbar on smaller screens. 
    The Navbar.Collapse component is used to wrap the content of the Navbar and show</p>

    <h2>Modern publishing platform</h2>
   <p>In the above code, we are using the Navbar, Nav, NavDropdown, Form, FormControl, and Button components from the react-bootstrap library to create the Navbar. The Navbar.Brand component is used to display the logo and the title of the app on the left side of the Navbar. The Navbar.Toggle component is used to toggle the visibility of the Navbar on smaller screens. 
    The Navbar.Collapse component is used to wrap the content of the Navbar and show</p>
  </div>

  <div className="col-md-6  secondrow">
  <img src={deskcircle} className='deskcircle'/>
  </div>
</div>



<div className="row blackrow">
<div className="col-md-6  row3"> 
  
  <img src={phone} className='phone'/>
   

   
  </div>

  <div className="col-md-6  fo">
  <h2>State of the Art infrastructure</h2>
   <p> In the above code, we are using the Navbar, Nav, NavDropdown,
     Form,In the above code, we are using the Navbar, Nav, NavDropdown, Form,  </p>
  </div>

</div>



<div className="row">

<div className="col-md-6  secondrow">
<img src={lapcircle} className='lapcircle'/>
  </div>
<div className="col-md-6  row3">
   <h2>Modern publishing platform</h2>
   <p>In the above code, we are using the Navbar, Nav, NavDropdown, Form, 
    FormControl, and Button components from the react-bootstrap library to create
     the Navbar. The Navbar.Brand component is used to display the logo and the title of the
      app on the left side of the Navbar. The 
     Navbar.Toggle component is used to toggle </p>
     <br/><br/>

    <h2>Modern publishing platform</h2>
   <p>In the above code, we are using the Navbar, Nav, NavDropdown, Form, FormControl, and Button 
    components from the react-bootstrap library to create the Navbar. The Navbar.Brand component
     is used to display the logo</p>
  </div>

 

</div>



<div className="row footer">

<div className="col-md-3  footer1">
<h1>Blogr</h1>
</div>
   
  
<div className="col-md-3  footer2"> 
<b><h6>product</h6> <br></br></b>
<ul>
    <li></li>
    <a href="url"><li>Overview</li></a>
    <a href="url"><li>Pricing</li></a>
    <a href="url"><li>Mrketplace</li></a>
    <a href="url"><li>Features</li></a>
    <a href="url"><li>Integrations</li></a>
</ul>
</div>
 
 
<div className="col-md-3  footer3">
<b><h6>Company</h6> <br></br></b>
<ul>
<a href="url"><li>About</li></a>
<a href="url"><li>Team</li></a>
<a href="url"><li>Blog</li></a>
<a href="url"><li>Careers</li></a>
  </ul>
</div>
   
  
<div className="col-md-3  footer4">
<b><h6>Connect</h6> <br></br></b>
<ul>
<a href="url"><li>Contact</li></a>
<a href="url"><li>Newsletter</li></a>
<a href="url"><li>Linkedln</li></a>
  </ul> </div>
 

</div>


    </>
  );
}

export default App;
