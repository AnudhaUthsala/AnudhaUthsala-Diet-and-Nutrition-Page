// components/NutritionTips.jsx
import React from 'react';


const tips = [
  "💧 Sunday: Drink 8 glasses of water daily",
  "🍳 Monday: Add an egg or beans for extra protein",
  "🥦 Tuesday: Eat 5 servings of vegetables and fruits",
  "🥣 Wednesday: Choose whole grains over refined grains",
  "🧂 Thursday: Reduce salt intake – use herbs and spices",
  "🍫 Friday: Avoid sugary snacks – try dark chocolate",
  "🍵 Saturday: Green tea helps with digestion",
];

const NutritionTips = () => {
  const todayIndex = new Date().getDay(); // 0–6
  const todayTip = tips[todayIndex];

  return (
    <div className="section">
      <div className="tip-card animated-tip">
        {todayTip}
      </div>
    </div>
  );
};

export default NutritionTips;
