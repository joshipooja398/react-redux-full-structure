import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllPosts } from './store/Actions/TestAction'
import Users from './components/Users'
import Test from './components/Test'
import './assets/style/index.css'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])
  

  return (
    <div className="App">
       <Switch>
        <Route exact path="/" component={Users} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  );
}

export default App;
