import {useState} from 'react'
import { AddCategory, GiffGrid } from './components';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState( ['One Punch']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);
    }

      return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />
                {  
                    categories.map(category => (
                            <GiffGrid 
                                key={category} 
                                category={category}
                            />
                    ))
                }

        </>
        )
}
