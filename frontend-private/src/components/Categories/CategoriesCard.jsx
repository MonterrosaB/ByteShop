import React from 'react'
import Button from '../Button'

const CategoriesCard=({category, deleteCategory, updateCategory})=>{
    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Categoría: {category.name}
          </h2>

          <Button
          label={"Eliminar"}
          actionButton={()=> deleteCategory(category._id)}
          />
         
         <Button
          label={"Editar información"}
          actionButton={()=> updateCategory(category)}
          />
       
        </div>
      </div>
        )

}

export default CategoriesCard;

/*
   <button
            className=" ml-2 mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
          >
            Editar información
          </button>
*/