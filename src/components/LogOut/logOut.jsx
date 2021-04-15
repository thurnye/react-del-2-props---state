// When using JSX, React must be in scope
import React from 'react';

function logOut(props) {
  let log;

  if(props.IsLogged){
    log = (<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <button  class="dropdown-item" onClick = {() => props.logOut()}>Logout</button>
    </ul>)
  }else{
   log =  (<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <button  class="dropdown-item" onClick = {() => props.logIn()}>LogIn</button>
      </ul>)
  }
  return (
    <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        {props.name}
    </a>
    {log}
    
    
    
</div>
  );
}

export default logOut;