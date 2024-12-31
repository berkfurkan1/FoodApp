import { View, Text, StyleSheet, FlatList } from "react-native";
import {MEALS , CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

function MealsOverviewScreen({route, navigation}){

    const catId = route.params.categoryId; // ekrana geçirmiş olduğumuz parametreleri içeren bir nesne alan durum.

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    // useLayoutEffect animasyon ile bir bileşenin aynı zaman diliminde oluştuğu durumlarda kullanılır.
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
        title : categoryTitle,
    });
    },[catId,navigation])

    function pressHandler(){
        navigation.navigate('MealDetailScren')
    }

    return <MealsList  items={displayedMeals} />
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({

});