import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Kenaz']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GitExpertApp</h1>

            <AddCategory
                onNewCategory={ (value) => onAddCategory(value) }
            />

            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp
