import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";


function CategoriesScreen({navigation}){
    function renderCategoryItem(itemData){

        function pressHandler(){
            navigation.navigate('MealsOverviewScreen',{
                categoryId: itemData.item.id, // itemın id'si mealsOverview ekranına aktarılır.
            })
        }
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler} />
        )
    }

    return(
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2} // 2 columns oluşturur yanyana
            />
    )
};

export default CategoriesScreen;