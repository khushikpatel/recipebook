import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Recipeform = ({ onSignupSuccess }) => {
    const [recipe_name, setrecipe_name] = useState('');
    const [description, setdescription] = useState('');
    const [instructions, setinstructions] = useState('');
    const [prep_time, setprep_time] = useState('');
    const [cook_time, setcook_time] = useState('');
    const [servings, setservings] = useState('');
    // const [image, setImage] = useState('');
    const [category, setcategory] = useState('');
    const [ingredient_name, setingredient_name] = useState('');
    const [nutritions, setnutritions] = useState('');
    const [ingredient_quantity, setingredient_quantity] = useState('');
    const [quantity_unit, setquantity_unit] = useState('');
    const navigate = useNavigate();
    const auth = localStorage.getItem('authToken');
    const decodeToken=jwtDecode(auth)
    console.log(decodeToken)
    // console.log("This Is Creator Status",decodeToken.is_creator)
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission reload
        console.log("This Is Creator Status",decodeToken.is_creator)
        if (decodeToken.is_creator === true) {
            const formData = new FormData();
            formData.append('recipe_name', recipe_name);
            formData.append('category', category);
            formData.append('description', description);
            formData.append('instructions', instructions);
            formData.append('prep_time', prep_time);
            formData.append('cook_time', cook_time);
            formData.append('servings', servings);
            formData.append('ingredient_name', ingredient_name);
            formData.append('ingredient_quantity', ingredient_quantity);
            formData.append('quantity_unit', quantity_unit);
            formData.append('nutritions', nutritions);
            // formData.append('image', image); // Correctly append the image file
   
            axios.post('http://127.0.0.1:8000/api/create-recipe/', 
                {  
                recipe_name: recipe_name,
                category: category,
                description: description,
                instructions:instructions,
                prep_time:prep_time,
                cook_time:cook_time,
                servings: servings,
                ingredient_name:ingredient_name,
                ingredient_quantity:ingredient_quantity,
                quantity_unit:quantity_unit,
                nutritions: nutritions,
                }
                
                , 
                    { headers: { Authorization: `Bearer ${auth}` }
            })
            .then(response => {
                console.log("Recipe added successfully!", response.data);
                navigate('/Home');
            })
            .catch(error => {
                console.error("Recipe not added", error);
            });
        } else {
            alert("You are not authorized to create a recipe!");
            navigate('/Home');  
        }
    };
   
    const categorie = [
        { id:1, name: 'Breakfast'},
        {id:2, name: 'Brunch'},
        {id:3, name: 'Lunch' },
        {id:4, name: 'Dinner'},
        {id:5, name: 'Ice Cream' },
        {id:6, name: 'Dessert'},
        { id: 1, name: 'Indian'},
        { id: 2, name: 'Maxican'},
        { id: 3, name: 'Italian'},
        { id: 4, name: 'Korean'},
        { id: 5, name: 'Thai'},
        { id: 6, name: 'Turkish'},
        { id: 1, name: 'Birthday' },
        { id: 2, name: 'Fathers Day'},
        { id: 3, name: 'Holidays'},
        { id: 4, name: 'Mothers Day'},
        { id: 5, name: 'NewYears'},
        { id: 6, name: 'Party',},
        { id: 1, name: 'Indian' },
        { id: 2, name: 'Maxican' },
        { id: 3, name: 'Italian' },
        { id: 4, name: 'Korean'},
        { id: 5, name: 'Thai'},
        { id: 6, name: 'Turkish'}
    ];
    // const handleImageChange = (e) => {
    //     setImage(e.target.files[0]);  // Handle image file input
    // };


    return (
        <div className="container mt-5">
        <div className="card">
            <div className="card-header">
                <h5>Add a New Recipe</h5>
            </div>
            <div className="card-body">
            <form encType="text/form-data" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={(e) => setrecipe_name(e.target.value)}
                            placeholder="Recipe Name"
                        />
                    </div>
                    <div className="mb-3">
                    <select
                    name="category"
                    className="form-select"
                     // Ensure this matches your state
                    onChange={(e) => setcategory(e.target.value)}
                >
                    <option value="">Select Category</option>
                    {categorie.map(category => (
                        <option key={category.id} >{category.name}</option>
                    ))}
                </select>
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="description"
                            onChange={(e) => setdescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="instructions"
                            onChange={(e) => setinstructions(e.target.value)}
                            placeholder="Instructions"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="prep_time"
                            onChange={(e) => setprep_time(e.target.value)}
                            placeholder="Prep Time (minutes)"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="cook_time"
                            onChange={(e) => setcook_time(e.target.value)}
                            placeholder="Cook Time (minutes)"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="servings"
                            onChange={(e) => setservings(e.target.value)}
                            placeholder="Servings"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="ingredient_name"
                            onChange={(e) => setingredient_name(e.target.value)}
                            placeholder="Ingredient Name"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            name="ingredient_quantity"
                            onChange={(e) => setingredient_quantity(e.target.value)}
                            placeholder="Ingredient Quantity"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="quantity_unit"
                            onChange={(e) => setquantity_unit(e.target.value)}
                            placeholder="Quantity Unit (e.g., grams)"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="nutritions"
                            onChange={(e) => setnutritions(e.target.value)}
                            placeholder="Nutrition Information"
                        />
                    </div>
                    {/* <div className="mb-3">
                        <input
                            type="file"
                            className="form-control"
                            name="image"
                            onChange={handleImageChange}
                        />
                    </div> */}
                    <button type="submit" className="btn btn-primary">Add Recipe</button>
                </form>
            </div>
        </div>
    </div>
    );
};
export default Recipeform;
