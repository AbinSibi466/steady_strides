import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { useCallback, useEffect, useState } from 'react';
import supportedLanguages from '../utils/supportedLanguages';
import { translate } from '../utils/translate';
import * as Clipboard from 'expo-clipboard';
// import { useDispatch, useSelector } from 'react-redux';
// import { addHistoryItem, setHistoryItems } from '../store/historySlice';
import TranslationResult from '../components/TranslationResult';
import uuid from 'react-native-uuid';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { setSavedItems } from '../store/savedItemsSlice';

// const loadData = () => {
//     return async dispatch => {
//         try {
//             const historyString = await AsyncStorage.getItem('history');
//             if (historyString !== null) {
//                 const history = JSON.parse(historyString);
//                 dispatch(setHistoryItems({ items: history }));
//             }

//             const savedItemsString = await AsyncStorage.getItem('savedItems');
//             if (savedItemsString !== null) {
//                 const savedItems = JSON.parse(savedItemsString);
//                 dispatch(setSavedItems({ items: savedItems }));
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

export default function HomeScreen(props) {
    const params = props.route.params || {};

    // const dispatch = useDispatch();
    // const history = useSelector(state => state.history.items);

    const [enteredText, setEnteredText] = useState("");
    const [resultText, setResultText] = useState("");
    const [languageTo, setLanguageTo] = useState("fr");
    const [languageFrom, setLanguageFrom] = useState("en");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (params.languageTo) {
            setLanguageTo(params.languageTo);
        }

        if (params.languageFrom) {
            setLanguageFrom(params.languageFrom);
        }
    }, [params.languageTo, params.languageFrom]);


    // useEffect(() => {
    //     dispatch(loadData());
    // }, [dispatch]);

    // useEffect(() => {
    //     const saveHistory = async () => {
    //         try {
    //             await AsyncStorage.setItem('history', JSON.stringify(history));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     saveHistory();
    // }, [history]);

    const onSubmit = useCallback(async () => {

        try {
            setIsLoading(true);
            const result = await translate(enteredText, languageFrom, languageTo);

            if (!result) {

                setResultText("");
                return;
            }
            console.log(result,"hyllooo")

            const textResult = result.translated_text[result.to];
            setResultText(textResult);

            const id = uuid.v4();
            result.id = id;
            result.dateTime = new Date().toISOString();

            // dispatch(addHistoryItem({ item: result }));
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }

    }, [enteredText, languageTo, languageFrom]);

    const copyToClipboard = useCallback(async () => {
        await Clipboard.setStringAsync(resultText);
    }, [resultText]);

  return (
    
      <View style={styles.container}>
        <Text style={styles.head}>Translate with ease</Text>
        <View style={styles.languageContainer}>
            <TouchableOpacity
                style={styles.languageOption}
                onPress={() => props.navigation.navigate("languageSelect", { title: "Translate from", selected: languageFrom, mode: 'from' })}>
                <Text style={styles.languageOptionText}>{supportedLanguages[languageFrom]}</Text>
            </TouchableOpacity>

            <View style={styles.arrowContainer}>
                <AntDesign name="arrowright" size={24} color={'red'} />
            </View>

            <TouchableOpacity
                style={styles.languageOption}
                onPress={() => props.navigation.navigate("languageSelect", { title: "Translate to", selected: languageTo, mode: 'to' })}>
                <Text style={styles.languageOptionText}>{supportedLanguages[languageTo]}</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
                multiline
                placeholder='Enter text'
                style={styles.textInput}
                onChangeText={(text) => setEnteredText(text)}
            />

            <TouchableOpacity
                onPress={isLoading ? undefined : onSubmit}
                disabled={enteredText === ""}
                style={styles.iconContainer}>

                {
                    isLoading ?
                    <ActivityIndicator size={'small'} color={colors.primary} /> :
                    <Ionicons 
                        name="arrow-forward-circle-sharp"
                        size={24} 
                        color={enteredText !== "" ? colors.primary : colors.primaryDisabled} />
                }
                
            </TouchableOpacity>
        </View>

        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{resultText}</Text>

            <TouchableOpacity
                onPress={copyToClipboard}
                disabled={resultText === ""}
                style={styles.iconContainer}>
                <MaterialIcons 
                    name="content-copy"
                    size={24} 
                    color={resultText !== "" ? colors.textColor : colors.textColorDisabled} />
            </TouchableOpacity>
        </View>

        <View style={styles.historyContainer}>
            <FlatList
                // data={history.slice().reverse()}
                renderItem={itemData => {
                    return <TranslationResult itemId={itemData.item.id} />
                }}
            />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    backgroundColor: 'black',
  },
  head:{
    left:120,
    marginBottom:50,
    fontSize:19,
    color:'white'
  },
  languageContainer: {
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1
  },
  languageOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  arrowContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageOptionText: {
    color: 'white',
    fontFamily: 'regular',
    letterSpacing: 0.3
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1,

  },
  textInput: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: 'regular',
    letterSpacing: 0.3,
    height: 280,
    color: 'white'
  },
  iconContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultContainer: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 280,
    paddingVertical: 15
  },
  resultText: {
    fontFamily: 'regular',
    letterSpacing: 0.3,
    color: 'white',
    flex: 1,
    marginHorizontal: 20
  },
});