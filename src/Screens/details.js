import React from "react";
import { Text, View, StyleSheet, Image, SafeAreaView, Linking } from "react-native";
import DetailsHeader from '../components/DetailsHeader'
import InfoSquare from '../components/InfoSquare'
import RepoLink from '../components/RepoLink'
const details = ({ route }) => {
    const { data } = route.params
    const openRepoUrl = () => {
        Linking.openURL(data.item.html_url);
    };
    return (
        <View style={styles.container}>
            <DetailsHeader
                imageSrc={data.item.owner.avatar_url}
                title={data.item.full_name}
            />
            <Text style={styles.sectionTitle}>Description</Text>
            <View style={{ width: 60, height: 4, backgroundColor: "black", marginTop: 8 }}>
            </View>
            <Text style={styles.desc}>{data.item.description}</Text>
            <Text style={styles.sectionTitle}>Additional Information</Text>
            <View style={{ width: 60, height: 4, backgroundColor: "black", marginTop: 8 }}>
            </View>
            <View style={styles.AddInfroContainer}>
                <View style={styles.fourBox}>
                    <InfoSquare
                        IconName={"star"}
                        iconColor={'#F8B703'}
                        number={data.item.stargazers_count}
                        title={"Stars"}
                        color={'#F8B703'}
                    />
                    <InfoSquare
                        IconName={"alert"}
                        iconColor={'#DD1212'}
                        number={data.item.open_issues}
                        title={"Issues"}
                        color={'#DD1212'}
                    />
                </View>
                <View style={styles.fourBox}>
                    <InfoSquare
                        IconName={"git-network"}
                        iconColor={'green'}
                        number={data.item.forks}
                        title={"Forks"}
                        color={'green'}
                    />
                    <InfoSquare
                        IconName={"eye"}
                        iconColor={'grey'}
                        number={data.item.watchers}
                        title={"Watchers"}
                        color={"grey"}
                    />
                </View>
            </View>
            <Text style={styles.sectionTitle}>Repo Link</Text>
            <View style={{ width: 60, height: 4, backgroundColor: "black", marginTop: 8 }}>
            </View>
            <RepoLink
                onPress={openRepoUrl} />
        </View>
    );
    {/* <Octicons name="repo-forked" size={24} color="black" /> */ }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingLeft: 25,
        paddingRight: 25,
    },
    sectionTitle: {
        paddingTop: 25,
        fontWeight: "bold",
        fontSize: 24,

    },
    desc: {
        marginTop: 7,
        borderBottomWidth: 2,
        borderBottomColor: "#E7E7E7",
        paddingBottom: 20
    },
    fourBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
    AddInfroContainer: {
        borderBottomWidth: 2,
        borderBottomColor: "#E7E7E7",
        paddingBottom: 20
    }
})
export default details;