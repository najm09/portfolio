import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({children}) => {
  const style = {
    marginBottom: 30,
    marginRight: 10,
    display:'inline-block',
  } 
  return(
    <div>
      <div style = {{style  }}>
        <h3 style={style}><Link to = '/'>Home</Link></h3>
        <h3 style={style}><Link to = '/jokes'>Jokes</Link></h3>
        <h3 style={style}><Link to = '/music-master'>Music</Link></h3>
        <h3 style={style}><Link to = '/todo-tracker'>Todos</Link></h3>
      </div>
      {children}
    </div>
  )
}
export default Header;