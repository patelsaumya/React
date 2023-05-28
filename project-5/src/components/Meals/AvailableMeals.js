import React, {useEffect, useState} from "react";
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import security from "../../assets/config/security.json";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        // This effect function should not return a promise
        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch(security.mealsUrl);
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();
            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch(err => {
            setIsLoading(false);
            setHttpError(err.message);
            console.log(err);
        });
    }, []);

    if (isLoading) {
        return (
          <section className={classes.MealsLoading}>
              <p>Loading...</p>
          </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const mealsList = meals.map(meal => <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;