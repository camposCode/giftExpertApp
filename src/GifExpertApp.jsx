import { useState } from "react";
import { v4 as uuid } from 'uuid';
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {

    const unique_id = uuid();

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
        {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory />
            {/* listado de Gif */}
            <ol>
                { 
                    categories.map(category => {
                        return <li key={unique_id}>{ category }</li>
                    })
                }
            </ol>

            {/* Gif Item */}
        </>
    )
}

export default GifExpertApp
