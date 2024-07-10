import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color,Colornew, FontFamily, FontSize } from "../GlobalStyles";
import { Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

const Quiz = () => {
    const navigation = useNavigation();
    const [category,setCategory] = React.useState();
    const route = useRoute();
    const {item} = route.params;
    React.useEffect(() => {
      setCategory(item); // Move setCategory inside useEffect to ensure it runs after item is set
      
    }, [item]);
    return (
      <View style={styles.container}>
        <Title  titleText='QUIZZLER' />
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png',
            }}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('StartQuiz',{item:category})}
          style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    banner: {
      height: 300,
      width: 300,
    },
    bannerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    container: {
      paddingTop: 40,
      paddingHorizontal: 20,
      height: '100%',
    },
    button: {
      width: '100%',
      backgroundColor: '#1A759F',
      padding: 16,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 30,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'white',
    },
  });

export default Quiz;
