import React, {useState, useEffect, useContext} from 'react';
import Login from './components/Users/Login';
import Register from './components/Users/Register';
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import UserAuthContext from './context/UserAuthContext';

function App() {
  
  const context = useContext(UserAuthContext);
  const [userInfo, setUserInfo] = useState({});
  let history = useHistory();

  useEffect(()=>{
    if(Object.keys(userInfo).length>0){
      console.log(userInfo);
    }
  },[userInfo]);

  return (
    <Router>
      <div className="App">
        <Route path="/Register">
          <Register setUserInfo={setUserInfo} />
        </Route>
        {/* <Route path="/" exact>
          {registerDone && <Login setUserInfo={setUserInfo} />}
          {!registerDone && <Register setUserInfo={setUserInfo} />}
        </Route> */}
        <Route path='/Login'>
          <Login setUserInfo={setUserInfo} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
