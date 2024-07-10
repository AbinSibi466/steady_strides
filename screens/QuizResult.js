import React from 'react';
import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Title } from 'react-native-paper';

const QuizResult = ({ navigation, route }) => {
  const { score, incorrectQuestions } = route.params;

  const resultBanner = score > 10 ? "https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png" : "https://cdni.iconscout.com/illustration/free/thumb/concept-about-business-failure-1862195-1580189.png";

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Title titleText='RESULTS' />
        <Text style={styles.scoreValue}>Score: {score}</Text>
        <View style={styles.bannerContainer}>
          <Image
            source={{ uri: resultBanner }}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>
        <View style={styles.incorrectQuestionsContainer}>
          <Text style={styles.incorrectQuestionsHeader}>Incorrect Questions:</Text>
          {incorrectQuestions.map((question, index) => (
            <View key={index} style={styles.questionContainer}>
              <Text style={styles.questionText}>Question {index + 1}: {question.question}</Text>
              <Text style={styles.optionsText}>Options:</Text>
              {question.options.map((option, optionIndex) => (
                <Text key={optionIndex} style={styles.optionText}>{option}</Text>
              ))}
              <Text style={styles.correctOptionText}>Correct Option: {question.correctOption}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('QuizHome')} style={styles.button}>
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default QuizResult;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center',
    marginBottom: 20,
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  incorrectQuestionsContainer: {
    marginBottom: 20,
  },
  incorrectQuestionsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  questionContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  optionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  correctOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
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
