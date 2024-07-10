import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import quizData from '../quizData.js';

const StartQuiz = () => {
  const [questions, setQuestions] = useState(null);
  const [category, setCategory] = useState(null);
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params;

  useEffect(() => {
    setCategory(item);
  }, [item]);

  useEffect(() => {
    if (category) {
      getQuiz();
    }
  }, [category]);

  const getQuiz = () => {
    setIsLoading(true);
    const filteredQuestions = quizData.filter(question => question.category === category);
    setQuestions(filteredQuestions);
    setOptions(generateOptions(filteredQuestions[0]));
    setIsLoading(false);
  };

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptions(questions[ques + 1]));
    console.log(incorrectQuestions,"incorect")
  };

  const generateOptions = (_question) => {
    const options = [..._question.options];
    return options;
  };

  const handlSelectedOption = (_option) => {
    if (_option === questions[ques].correctOption) {
      setScore(score + 10);
    }else{
      setIncorrectQuestions([...incorrectQuestions, questions[ques]]);
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptions(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleShowResult = () => {
    navigation.navigate('QuizResult', { score: score,incorrectQuestions:incorrectQuestions });
  };

  return (
    <View style={styles.container}>
      {isLoading || !questions ? (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Text style={{ fontSize: 32, fontWeight: '700' }}>LOADING...</Text>
        </View>
      ) : (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>Q. {decodeURIComponent(questions[ques].question)}</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handlSelectedOption(1)}>
              <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handlSelectedOption(2)}>
              <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handlSelectedOption(3)}>
              <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handlSelectedOption(4)}>
              <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {ques !== 9 && (
              <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
            )}
            {ques === 9 && (
              <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                <Text style={styles.buttonText}>SHOW RESULTS</Text>
              </TouchableOpacity>
            )}
          </View>
          
        </View>
      )}
    </View>
  );
};

export default StartQuiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1A759F',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
