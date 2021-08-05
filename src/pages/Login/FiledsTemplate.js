import React, {useEffect} from 'react'
import '../../core-ui/FieldsTemplate/fields.css';
import { Link } from "react-router-dom";
import RedirecModal from '../../components/Modals/RedirecModal';
import {useLocation} from "react-router-dom";

const FiledsTemplate = ({fields, name, checkForm, onChange, status, isRegistered}) => {

    function errorCreator(status){
        const alerts = document.querySelectorAll('.visible');
        if(alerts.length){
            alerts.forEach(el=>{
                el.classList.remove("visible"); 
            }) 
        }
        const alertMsg = document.createElement("div");
        alertMsg.appendChild(document.createTextNode("Complete this field"));
        if(status){
            status.map(err=>{
                document.querySelector(`input[name='${err}']`).nextSibling.classList.add("visible");
            })
        }
    }

    const location = useLocation();
    useEffect(() => {
        if(location.search.length){
            const exsistedUser = location.search.length ? location.search.replace('?username=', '') : '';
            document.querySelector('input[name="Username"]').value = exsistedUser;
        }
    }, [])

    return (
        <div className='mainDiv'>
            {isRegistered && <RedirecModal msg='You are registered successfully, please check your email.' happening={'Redirecting to Login page ...'} />}
            <form key='form' onSubmit={e=>checkForm(e)}>
                <div className="container">
                    { fields.length &&
                    fields.map(field=>{
                        let val = field.val? field.val: undefined; 
                        return(
                            <div className='fieldDiv' key={field.id}>
                                <label htmlFor={field.fieldName} key={field.fieldName} >{field.fieldName}</label>
                                <input minLength={field.length} type={field.type} name={field.fieldName} placeholder={field.fieldPlaceholder} key={field.id} onChange={onChange} required={field.required} value={val}/>
                                <div className='alert'>Complete this field</div>
                            </div>
                        )
                    })
                    }
                    {errorCreator(status)}
                    <div className='btnDiv'>
                        <button className='submitBtn' type='submit'>{name}</button>
                        {name==='Login' && <a className='loginOrReg' href="/Register">You don't have an account? Register here</a>}
                        {name==='Register' && <Link className='loginOrReg' to="/Login">You have an account? Login here</Link>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FiledsTemplate
