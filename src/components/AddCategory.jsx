import { useState } from "react"

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = ({target}) =>{
        console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>

        
    )
}

export default AddCategory
