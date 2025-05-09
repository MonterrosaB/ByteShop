import React from 'react'
import Button from '../Button'

const RegisterCategory=({saveCategory,setCategoryName, categoryName, setCategoryDescription, categoryDescription, handleEdit, id})=>{
    return(
        <div className="">  
        <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nombre Categoría: {categoryName}
            </label>
            <input
              type="text"
              name="name"
             value={categoryName}
             onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: Nombre"
            />
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Descripción Categoría: {categoryDescription}
            </label>
            <input
              type="text"
              name="description"
             value={categoryDescription}
             onChange={(e) => setCategoryDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Escribre aquí..."
            />
          </div>

          {(!id) ?            <Button
            label={"Guardar"}
            actionButton={(e) => {
              saveCategory(e);
            }}
          /> :          
           <Button
            label={"Editar"}
            actionButton={(e) => {
              handleEdit(e);
            }}
          />
         }

            </form>  
        </div>
        
    )

}

export default RegisterCategory;

/**
 * 
 * 
          {(!id) ?           <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={(e) => {
              saveBrand(e);
            }}
          >
            Guardar
          </button> :          
           <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={(e) => {
              handleEdit(e);
            }}
          >
            Editar
          </button>}
 */