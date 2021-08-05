import React, {useState, useEffect} from 'react'
import FiledsTemplate from '../../pages/Login/FiledsTemplate'
import { useHistory } from "react-router-dom";

const Register = ({setUserInfo}) => {

    const [values, setValues] = useState({});
    const [status, setStatus] = useState([]);
    const [isRegistered, setIsRegistered] = useState(false)
    let history = useHistory();
    const reqFields = ['Username','Email', 'Password', 'Confirm password', 'Robot test'];

    async function checkForm(e){
        e.preventDefault();
        setUserInfo({});
        console.log(values)
        const checkField = checkFields();
        if(checkField && isRegistered===false){
            setIsRegistered(true)
            setUserInfo(values);
            setInterval(()=>{
                history.push('/Login?username='+values.Username);
                setUserInfo({});
            }, 3000);        
        }
    }

    function checkFields(){
        setStatus([]);
        let errors = [];
        reqFields.map(field=>{
            if(values[field]===undefined || values[field]==='')
                errors.push(field);
        });
        if(errors.length>0){
            setStatus(errors);
            return false
        }
        return true;
    }

    function onChangeInput(e){
        setValues(prev=>{
            return ({...prev ,[e.target.name] : e.target.value.trim()});
        });
    }

    const fields = [
        {id: 1, fieldName: 'Username', fieldPlaceholder: 'Enter your Username please...',type: 'text', required: '', length: '5',},
        {id: 2, fieldName: 'Email', fieldPlaceholder: 'Enter your email please...',type: 'email', required: '', length: '9',},
        {id: 3, fieldName: 'Password', fieldPlaceholder: 'Enter your password please...',type: 'password', required: '', length: '6',},
        {id: 4, fieldName: 'Confirm password', fieldPlaceholder: 'Enter your password again please...',type: 'password', required: '', length: '6',},
        {id: 5, fieldName: 'Robot test', fieldPlaceholder: 'Enter the name of website please...',type: 'text', required: '', length: '',},
    ];
    const name = 'Register'

    return (
        <div>
            <FiledsTemplate name={name} fields={fields} checkForm={checkForm} onChange={onChangeInput} status={status} isRegistered={isRegistered} />
        </div>
    )
}

export default Register
