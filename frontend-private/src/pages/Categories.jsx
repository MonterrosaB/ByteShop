import React from "react";

import RegisterCategory from "../components/Categories/RegisterCategories";
import ListCategories from "../components/Categories/ListCategories";
import useDataCategories from "../components/Categories/hooks/useDataCategories";

const Categories = () => {
  const {
    activeTab,
    setActiveTab,
    categories,
    loading,
    categoryName,
    setCategoryName,
    categoryDescription,
    setCategoryDescription,
    id,
    saveCategory, deleteCategory,
  updateCategory, handleEdit
  } = useDataCategories();
  return (
    <>
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
  );
};

export default Categories;
