import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Animated,
    View
} from 'react-native';
import RepoHeader from '../components/ReposHeader';
import RepoCard from '../components/RepoCard';
import getAllRepos from '../apis/client';

function repos({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const _onLoad = async () => {
        const _data = await getAllRepos(page);
        setData([...data, ..._data]);
        setLoading(false);
    };

    useEffect(() => {
        _onLoad();
    }, [page]);
    // var itemSize = 120
    const renderItem = (data) => {
        // const inputRange = [
        //     -1,
        //     0,
        //     5,
        //     10,
        //     parseInt(itemSize * index),
        //     parseInt(itemSize = (index + 2))
        // ]
        // const Scale = scrollY.interpolate({
        //     inputRange,
        //     outputRange: [1, 1, 1, 0]
        // })
        return (
            <RepoCard
                key={data.item.id}
                title={data.item.full_name}
                description={data.item.description}
                imageSrc={data.item.owner.avatar_url}
                issuesNumber={data.item.open_issues}
                providerName={data.item.owner.login}
                starsNumber={data.item.stargazers_count}
                numberOfLines={1}
                onPress={() => navigation.navigate('details', { data: data })}
            />

        );
    };

    const increasePageNumber = () => {
        setLoading(true);
        setPage((val) => val + 1);
    };
    // const scrollY = React.useRef(new Animated.Value(0)).current
    return (
        <View>
            <RepoHeader text={"All repositories"} />
            <Animated.FlatList
                data={data}
                renderItem={renderItem}
                // onScroll={Animated.event(
                //     [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                //     { useNativeDriver: false }
                // )}
                onEndReached={increasePageNumber}
                onEndReachedThreshold={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            />
            {loading && <ActivityIndicator />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        marginHorizontal: 30,
        marginVertical: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
})
export default repos;