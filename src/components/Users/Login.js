import React, {useState, useEffect} from 'react'
import FiledsTemplate from '../../pages/Login/FiledsTemplate';

const Login = ({setUserInfo}) => {

    const [values, setValues] = useState({});

    function checkForm(e){
        e.preventDefault();
        console.log(values)
    }

    function onChangeInput(e){
        setValues(prev=>{
            return ({...prev ,[e.target.name] : e.target.value.trim()});
        });
    }

    const fields = [
        {id: 1, fieldName: 'Username', fieldPlaceholder: 'Enter your Username please...',type: 'text', required: '' },
        {id: 2, fieldName: 'Password', fieldPlaceholder: 'Enter your password please...',type: 'password', required: '',},
        {id: 3, fieldName: 'Robot test', fieldPlaceholder: 'Enter the name of website please...',type: 'text', required: ''}
    ];
    const name = 'Login'

    return (
        <div>
            {fields && <FiledsTemplate name={name} fields={fields} setUserInfo={setUserInfo} checkForm={checkForm} onChange={onChangeInput} />}
        </div>
    )
}

export default Login

