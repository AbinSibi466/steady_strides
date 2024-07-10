import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Color,Colornew, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import ScreenC from "./ScreenC";
import axios from "axios"; // Import Axios
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { parse } from "node-html-parser"; // Import parse function from node-html-parser

import { WebView } from "react-native-webview";


const Wikipedia = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [imageURL, setImageURL] = useState("");
  
    // Function to sanitize HTML tags from snippet
    const sanitizeSnippet = (snippet) => {
      const root = parse(snippet); // Parse the HTML snippet
      return root.text; // Return the text content without HTML tags
    };
  
    const handleSearch = async () => {
      try {
        console.log("helloooo");
        const response = await axios.get(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${searchTerm}`
        );
        const firstSearchResult = response.data.query.search[0];
    
        if (firstSearchResult) {
          const imageUrlResponse = await axios.get(
            `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${encodeURIComponent(
              firstSearchResult.title
            )}&pithumbsize=300`
          );
          const pages = imageUrlResponse.data.query.pages;
          const pageId = Object.keys(pages)[0];
          const imageInfo = pages[pageId].thumbnail;
          if (imageInfo) {
            setImageURL(imageInfo.source);
          }
          // Sanitize the snippets and set search results
          setSearchResults({
            ...firstSearchResult,
            snippet: sanitizeSnippet(firstSearchResult.snippet),
          });
        } else {
          // No search results found
          setSearchResults({});
          setImageURL(""); // Reset image URL
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        // Display error message or handle the error as needed
        setSearchResults({}); // Reset search results
        setImageURL(""); // Reset image URL
      }
    };
    
    return (
      <View style={styles.androidLarge7}>
        <Text style={[styles.wikipedia, styles.wikipediaTypo]}>Wikipedia</Text>
  
        <TextInput
          style={styles.searchInput}
          label=""
          placeholder="Search Wiki"
          placeholderTextColor="#000"
          mode="outlined"
          theme={{ colors: { background: "rgba(169, 67, 171, 0.8)" } }}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onSubmitEditing={handleSearch}
        />
  
        <Image
          style={styles.searchIcon}
          contentFit="cover"
          source={require("../assets/Search.png")}
        />
  
        <LinearGradient colors={["#ffff", "#ffff"]} style={styles.textArea}>
          <Text key={searchResults.pageid} style={styles.name}>
            {searchResults.title}
          </Text>
          {imageURL ? (
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={{ uri: imageURL }}
            />
          ) : (
            <Text style={styles.image1Icon}>No image available</Text>
          )}
        </LinearGradient>
        <Text style={styles.description}>{searchResults.snippet}</Text>
  
        {/*  */}
      </View>
    );
  };
  
const styles = StyleSheet.create({
    textArea: {
        borderRadius:7,
        top:180,
        height:450,
        margin:20,
        borderWidth:1,
        borderColor:'red',
    },
    xboxMenuIconPosition: {
        height: 53,
        top: 0,
        position: "absolute",
    },
    searchResultImage: {
        width: 200, // Adjust width according to your UI requirements
        height: 200, // Adjust height according to your UI requirements
        resizeMode: 'cover', // Or adjust to your desired image resizing mode
        marginVertical: 10, // Adjust spacing according to your UI requirements
    },
    wikipediaTypo: {
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.interRegular,
        position: "absolute",
    },
    androidLarge7Child: {
        top: 148,
        left: -2,
        width: 400,
        height: 454,
        position: "absolute",
    },
    androidLarge7Item: {
        left: 0,
        borderRadius: 5,
        backgroundColor: "#403838",
        width: 400,
    },
    xboxMenuIcon: {
        left: 5,
        width: 50,
    },
    wikipedia: {
        top: 68,
    left: 140,
    fontSize: 25,
    fontFamily: FontFamily.interRegular,
    color: Colornew.colorWhite,
    position: "absolute",
    },
    backArrowIcon: {
        top: 155,
    left: 168,
    width: 57,
    height: 51,
    position: "absolute",
    },
    androidLarge7Inner: {
        top: 154,
        left: 29,
        borderRadius: 6,
        fontSize:22,
        width: 337,
        height: 48,
        position: "absolute",
        color:Colornew.colorWhite
    },
    searchWiki: {
        top: 170,
        left: 75,
        textAlign: "left",
        color: Color.colorWhite,
        fontFamily: FontFamily.interRegular,
    },
    searchIcon: {
        top: 161,
        left: 320,
        width: 27,
        height: 31,
        position: "absolute",
    },
    rectangleIcon: {
        top: 228,
        left: 26,
        borderRadius: 9,
        width: 337,
        height: 452,
        position: "absolute",
    },
    loremIpsumDolor: {
        top: 435,
        left: 35,
        fontSize: 20,
        width: 302,
        height: 339,
    },
    image1Icon: {
        top: 30,
        left: 115,
        width: 127,
        height: 177,
        position: "absolute",
    },
    androidLarge7: {
        backgroundColor: "black",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
    searchInput:{
        backgroundColor:Color.colorWhite,
        width:250,
        top:150,
        left:50,
        borderWidth:1,
        borderColor:'red'
    },
    description:{
        top:-20,
        width:210,
        left:90,
        color:Color.black
    },
    name:{
        top:220,
        width:200,
        left:125,
        fontWeight: 'bold',
        color:Color.black
        
    }
});

export default Wikipedia;
