import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import Rewards from '../../molecules/rewards/rewards';
import { useNavigation } from '@react-navigation/native';
import quizData from '../quizData.js';

const { width } = Dimensions.get("window");

const QuizHome = () => {
    const navigation = useNavigation();
    const [questions, setQuestions] = useState(quizData);
    const [isLoading, setIsLoading]= useState(false)
console.log(quizData,"lllllllllll")
    const uniqueCategories = new Set();
    useEffect(() => {
      getQuiz();
    }, []);
    const getQuiz = async () => {
      setIsLoading(true)
      console.log(quizData,"this is the qnzzz")
      setQuestions(quizData);
      setIsLoading(false)
    };  

questions.forEach(question => {
  console.log("tjis is the foreach")
    uniqueCategories.add(question.category);
});
const uniqueCategoriesArray = Array.from(uniqueCategories);

// Print or use the unique categories
console.log(uniqueCategoriesArray,"categories");


    const renderItem = ({ item }) => {
      const decodedCategory = decodeURIComponent(item.replace(/\+/g, " "));
        return (
            <TouchableOpacity onPress={() => navigation.navigate("Quiz", { item: decodedCategory })}>
                <View style={styles.box}>
                    <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/maths-class-5748771-4817936.png" }} style={styles.icon} />
                    <View style={styles.description}>
                        <Text style={styles.name}>{decodedCategory}</Text>
                        <Text style={styles.count}>10 Questions</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            {/* <Rewards /> */}
            <View style={styles.header}>
                <Text style={styles.title}>Let's Play</Text>
            </View>
            <FlatList
                data={uniqueCategoriesArray}
                numColumns={2}
                renderItem={renderItem}
                // keyExtractor={(item) => item.id.toString()}
                style={{ marginTop: 5 }}
                contentContainerStyle={{ alignItems: "center" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    header: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        paddingHorizontal: "6%"
    },
    title: {
        fontSize: 17,
        fontWeight: "700",
        color: "black",
        top:20,
        margin:10

    },
    box: {
        width: width / 2.3, 
        height: width / 2.2,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: "8%",
        alignItems: "center"
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 15,
    },
    description: {
        width: "100%",
        paddingHorizontal: "10%",
    },
    name: {
        fontSize: 16,
        fontWeight: "700",
        color: "black"
    },
    count: {
        fontSize: 12,
        fontWeight: "600",
        color: "gray",
        marginTop: 3
    }
});

export default QuizHome;



