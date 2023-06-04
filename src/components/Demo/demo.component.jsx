import React from 'react';
import { Link } from 'react-router-dom';
import im from '../../assets/images/Besant1.jpg'

import '../../assets/style.css'

class DemoComponent extends React.Component {

    render() {
        return (

            <div>    
           <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  
  <img src={im} height="50px" width="50px"></img>
  <center><h1>Besant</h1></center>
  
           
                        <ul className='menu'>
                         <li>
                                <Link to="/menu1">Menu 1</Link>
                            </li>
                            <li>
                                <Link to="/menu2">Menu 2</Link>
                            </li>
                            <li>
                                <Link to="/menu3">Menu 3</Link>
                            </li>
                        </ul>
                        </nav>
                    </div>
                  
 
        );
    }
}

export default DemoComponent