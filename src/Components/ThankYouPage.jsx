import React from 'react';
import { useGlobalContext } from '../context';
import {Redirect} from 'react-router-dom';

const ThankYouPage = () => {
    const {formData} = useGlobalContext();

    if (!formData.user) {
        return <Redirect to='/'/>
    }
    return (
        <div>
            <h1>Спасибо {formData.user} за принятие участия в нашем опросе. Ваш голос важен для нас!</h1>
            <h2>Узнать побольше о кандидате можно на{' '}  
                <a href="https://hh.ru/resume/3b409582ff08e8c9f10039ed1f5a33664d3339">hh.ru</a>
            </h2>
        </div>
    )
}

export default ThankYouPage;