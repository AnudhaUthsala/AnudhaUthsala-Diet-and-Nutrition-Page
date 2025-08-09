import React, { useState } from "react";

const meals = {
  breakfast: ["Oats with berries 🍓", "Green tea 🍵"],
  lunch: ["Grilled chicken with quinoa and veggies", "Apple"],
  dinner: ["Lentil soup with multigrain bread"],
};

// MealCard with slide toggle
const MealCard = ({ title, items, details }) => {
  const [eaten, setEaten] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="meal-card">
      <div className="meal-title">{title}</div>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <div className="meal-actions">
        <button onClick={() => setEaten(!eaten)}>
          {eaten ? '✅ Eaten' : 'Mark as Eaten'}
        </button>
        <button onClick={() => setShowDetails(!showDetails)}>
          ℹ️ Details
        </button>
      </div>

      <div className={`details-wrapper ${showDetails ? 'open' : ''}`}>
        <div className="meal-details">
          <p><strong>Calories:</strong> {details.calories} kcal</p>
          <p><strong>Carbs:</strong> {details.carbs}g</p>
          <p><strong>Protein:</strong> {details.protein}g</p>
          <p><strong>Fat:</strong> {details.fat}g</p>
          {details.ingredients && (
            <p><strong>Ingredients:</strong> {details.ingredients.join(', ')}</p>
          )}
        </div>
      </div>
    </div>
  );
};



const MealPlan = () => {
  return (
    <div className="section">
      <MealCard
        title="🍽️ Breakfast"
        items={["Oats with berries 🍓", "Green tea 🍵"]}
        details={{
          calories: 320,
          carbs: 45,
          protein: 8,
          fat: 5,
          ingredients: ["Oats", "Berries", "Green Tea"]
        }}
      />
      <MealCard
        title="🍱 Lunch"
        items={["Grilled chicken with quinoa and veggies", "Apple"]}
        details={{
          calories: 550,
          carbs: 40,
          protein: 35,
          fat: 20,
          ingredients: ["Chicken", "Quinoa", "Broccoli", "Apple"]
        }}
      />
      <MealCard
        title="🍲 Dinner"
        items={["Lentil soup with multigrain bread"]}
        details={{
          calories: 410,
          carbs: 55,
          protein: 20,
          fat: 10,
          ingredients: ["Lentils", "Vegetables", "Multigrain Bread"]
        }}
      />
    </div>
  );
};


export default MealPlan;
