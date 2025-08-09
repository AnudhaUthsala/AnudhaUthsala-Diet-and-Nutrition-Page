import MealPlan from "./MealPlan";
import NutritionTips from "./NutritionTips";
import "./styles/global.css";
import UserPreferences from "./UserPreferences";

const NutritionPage = () => {
  return (
    <div id="no-bg" className="container">
      <UserPreferences />
      <MealPlan />
      <NutritionTips />
    </div>
  );
};

export default NutritionPage;
