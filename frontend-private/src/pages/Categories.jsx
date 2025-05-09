
import React, { useState, useEffect, use} from "react";
import RegisterCategory from "../components/Categories/RegisterCategories";
import ListCategories from "../components/Categories/ListCategories";

const Categories = () => {

    const [activeTab, setActiveTab] = useState("list");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoryName, setCategoryName]=useState("");
    const [categoryDescription, setCategoryDescription]=useState("");
    const [id, setId]=useState("");


    const fetchCategories = async () => {
    const response = await fetch("http://localhost:4000/api/categories");
    
    if (!response.ok) {
        throw new Error("Hubo un error al obtener las categorias");
    }

    const data = await response.json();
    setCategories(data);
    setLoading(false);
    
    }

    const saveCategory = async (e) => {
    e.preventDefault();

    const newCategory={
        name: categoryName,
        description : categoryDescription
    }

    const response = await fetch("http://localhost:4000/api/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
    });

    if (!response.ok) {
        throw new Error("Hubo un error al registrar la categoría");
      }

    const data = await response.json();

    alert("Categoría registrada correctamente");
    fetchCategories();
    setCategoryName("");

    }


    // useEffect 
    useEffect(() => {
        fetchCategories();
    }
    , []);

    const deleteCategory = async (id)=>{
        const response = await fetch(`http://localhost:4000/api/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Hubo un error al eliminar el modelo");
          }

        const data = await response.json();

        alert("Modelo eliminado correctamente");
        fetchCategories();

    }

const updateCategory = async (category) => {
    setId(category._id);
    setCategoryName(category.name);
    setCategoryDescription(category.description);
    setActiveTab("form");
}

const handleEdit = async (e) => {
    e.preventDefault();

    const updateCategories = {
        name: categoryName,
        description : categoryDescription
    };

    const response = await fetch(`http://localhost:4000/api/categories/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCategories),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar la modelo");
      }

      
      const data = await response.json();
      alert("Modelo actualizado exitosamente");
      setCategoryName("");
      setCategoryDescription("");
      setId(""); // Limpiar el ID
      fetchCategories(); 


}


return(<>
   <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Categorías</h1>
          <div>
            <div className="flex border-b border-gray-200 mb-4">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                onClick={() => setActiveTab("list")}
              >
                Lista de Modelos
              </button>
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                onClick={() => setActiveTab("form")}
              >
                Gestionar Modelo
              </button>
            </div>
            <div>
              {activeTab === "list" && (
                <div>
                    <ListCategories
                    categories={categories}
                    loading={loading}
                    deleteCategories={deleteCategory}
                    updateCategories={updateCategory}
                    
                    />
                </div>
              )}
              {activeTab === "form" && (
                <div>
                    <RegisterCategory
                    saveCategory={saveCategory}
                    setCategoryName={setCategoryName}
                    setCategoryDescription={setCategoryDescription}
                    categoryName={categoryName}
                    categoryDescription={categoryDescription}
                    handleEdit={handleEdit}
                    id={id}
                    
                    />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

</>

)
}

export default Categories;