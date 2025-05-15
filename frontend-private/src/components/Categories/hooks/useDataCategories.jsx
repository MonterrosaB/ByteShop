import React, { useState, useEffect, use} from "react";

const useDataCategories = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [id, setId] = useState("");

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:4000/api/categories");

    if (!response.ok) {
      throw new Error("Hubo un error al obtener las categorias");
    }

    const data = await response.json();
    setCategories(data);
    setLoading(false);
  };

  const saveCategory = async (e) => {
    e.preventDefault();

    const newCategory = {
      name: categoryName,
      description: categoryDescription,
    };

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
  };

  // useEffect
  useEffect(() => {
    fetchCategories();
  }, []);

  const deleteCategory = async (id) => {
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
  };

  const updateCategory = async (category) => {
    setId(category._id);
    setCategoryName(category.name);
    setCategoryDescription(category.description);
    setActiveTab("form");
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    const updateCategories = {
      name: categoryName,
      description: categoryDescription,
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
  };

  return ({
    activeTab, setActiveTab,
  categories, setCategories,
  loading, setLoading,
  categoryName, setCategoryName,
  categoryDescription, setCategoryDescription,
  id, setId,
  saveCategory, deleteCategory,
  updateCategory, handleEdit
})
};
export default useDataCategories;

