import { useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'

function Users() {
    const users = useSelector((state)=>state.Test.users);
    const history = useHistory();

    const handleClick = (user) =>{
        history.push({
          pathname: '/test',
          state: { user } // Replace with the props you want to pass
        });
    }

  return (
    <div>
      <h3>All USERS</h3>
      {users && users.map((user, index)=>{
        return(
            <div key={index}>
                <hr />
                <h4> Name: {user.name}</h4>
                <p> Phone : {user.phone} </p>
                <p> Website: {user.website} </p>
                <button className="btn btn-primary" onClick={() => handleClick(user)}>More Information</button>
            </div>
        )
      })}
    </div>
  )
}

export default Users
