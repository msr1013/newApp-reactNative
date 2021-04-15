import React , {useContext} from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import NewsContext from '../store/contexts/NewsContext'


const HomeScreen = props => {
    const newsContext = useContext(NewsContext)

    const getAllData = () => {
        newsContext.getNews()
    }  

    React.useEffect(() => {
        getAllData()
    },[])

    console.log("NEWS",newsContext.allNews)

    return <View style={styles.screen}>
        <FlatList
            data={newsContext.allNews}
            renderItem={({item}) => <Text>{item.title}</Text>}
            keyExtractor = {(item,i)=>i.toString()}
            ListEmptyComponent = {()=><Text>Loading</Text>}
        />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor:'#fff'

    }
})

export default HomeScreen