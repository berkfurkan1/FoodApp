import { View, Text,Image, StyleSheet, ScrollView, Button} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";


function MealDetailScreen({route, navigation}){
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId );

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId); // favori olup olmadığını değerlendiriyo

    function changeFavoriteStatusHandler(){
        if(mealIsFavorite){
            favoriteMealsCtx.removeFavorite(mealId); // favoriden kaldırır.
        }else{
            favoriteMealsCtx.addFavorite(mealId); // favoriye ekler
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                onPress={changeFavoriteStatusHandler}
                icon={mealIsFavorite ? 'star' : 'star-outline'} 
                color='white'/>
            }
        })
    },[navigation, changeFavoriteStatusHandler])

    return(
        <ScrollView style={styles.rootContainer} >
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
            <Text style={styles.title} >{selectedMeal.title} </Text>
            <MealDetail 
            duration={selectedMeal.duration} 
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability} 
            textStyle={styles.detailText} />
            <View style={styles.listOuterContainer} >
                <View style={styles.listContainer} >
                    <Subtitle>Ingredient</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
            
        </ScrollView>
    )
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },
    image:{
        width: '100%',
        height: 350,
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white'
    },
    detailText:{
        color:'white',
    },
    listContainer:{
        width:'80%',
    },
    listOuterContainer:{
        alignItems:'center',
    }
})