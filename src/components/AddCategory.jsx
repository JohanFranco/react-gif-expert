import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('')

    const onInputChanged = (e) => {
            setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());
    }


    return (

        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar gift" value={inputValue}
                onChange={onInputChanged}/>
        </form>

    )
}
