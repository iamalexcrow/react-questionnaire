import React from 'react';
import { useGlobalContext } from '../context';
import { FormWrapper } from './StyledComponents'; 
import { Link } from 'react-router-dom';

const Form = () => {
    const {formData, updateFormData} = useGlobalContext()

    const handleChange = (e) => {
        if (e.target.name === 'position') {
            updateFormData({
                ...formData,
                [e.target.name]: e.target.value.trim()
            })
        } else if(e.target.checked) {
            updateFormData({
                ...formData,
                [e.target.name]: true
            })
        } else {
            updateFormData({
                ...formData,
                [e.target.name]: false
            })
        }
        // если убираем галочку с 'другая' то введеная информация стирается 
        if(e.target.name === 'hasOther' && !e.target.checked) {
            console.log('woops')
            updateFormData({
                ...formData,
                hasOther: false,
                position: ''
            })
        }
    }

    return (
        <FormWrapper onSubmit={(e)=> e.preventDefault()}>
            <h1 className="title">Ваша роль в компании?</h1>
            <div className='options'>
                <div className="option">
                    <input type="checkbox" name="frontEnd" value="front-end" checked={formData.frontEnd}  onChange={handleChange}/>
                    <span className="checkmark"></span>
                    <label htmlFor="front" id="front" value="front">Front-end</label>
                </div>
            
                <div className="option">
                    <input type="checkbox" name="backEnd" value="back-end" checked={formData.backEnd} onChange={handleChange}/>
                    <label htmlFor="back" id="back" value="back">Back-end</label>
                </div>

                <div className="option">
                    <input type="checkbox" name="hasOther" value="other" checked={formData.hasOther} id="otherOption" onChange={handleChange}/>
                    <label htmlFor="other" id="other" value="other">Другая</label>
                </div>

                {formData.hasOther &&
                    <div className="option extra-option">
                        <label htmlFor="Укажи свою должность" id="otherPosition">И что же это?</label>
                        <input type="text" name="position" placeholder="Напиши тут" value={formData.position} required onChange={handleChange}/>
                    </div>
                }
            </div>
            <div className="button-box">
                {formData.user 
                ? <Link to="/ThankYou"><button type="submit">Отправить</button></Link> 
                : <Link to="/login"><button type="submit">Отправить</button></Link>}
            </div>
        </FormWrapper>
    )
}

export default Form;
