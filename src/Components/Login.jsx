import React from 'react';
import { useGlobalContext } from '../context';
import { FormWrapper } from './StyledComponents';
import { Redirect } from 'react-router';


const Login = () => {
    const {userData, formData, updateFormData, updateUserData} = useGlobalContext();

    const handleInput = (e) => {
        updateUserData({
            ...userData,
            [e.target.name]: e.target.value.trim()
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateFormData({
            ...formData,
            user: userData.user
        })
    }

    if (formData.user) {
        return <Redirect to={'/'} />
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <h1 className="title">Добро пожаловать!</h1>
                    <div>
                        <div className="option extra-option">
                            <label htmlFor="login" id="login">Email</label>
                            <input type="email" name="user" placeholder="Oleg@naRabote.ok" required onChange={handleInput} value={userData.user}/>
                        </div>
                        <div className="option extra-option">
                            <label htmlFor="password" id="password">Пароль</label>
                            <input type="password" name="password" placeholder="твой пароль" required min="5" onChange={handleInput} value={userData.password}/>
                        </div>
                    </div>
                    <button>Войти!</button>
        </FormWrapper>
    )
}

export default Login;