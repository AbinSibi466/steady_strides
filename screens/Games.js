import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const Games = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [gameData, setGameData] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  // Function to fetch game data based on selected mood
  const fetchGameData = () => {
    // Check if a mood is selected
    if (!selectedMood) {
      // If no mood is selected, display a message and return
      setShowMessage(true);
      return;
    }
    const gamesByMood = {
      "Relaxing": [
        {
          "title": "Stardew Valley",
          "genre": "Farming simulator",
          "description": "Build your own farm, manage crops and animals, interact with the quirky locals, and find love in this relaxing and heartwarming experience.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/xrpmydnu9rpxvxfjkiu7.png"
        },
        {
          "title": "Animal Crossing: New Horizons",
          "genre": "Life simulation",
          "description": "Build your own island paradise, decorate your home, befriend adorable animal villagers, and enjoy the laid-back charm of island life.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3wls.png"
        },
        {
          "title": "Tetris Effect",
          "genre": "Puzzle",
          "description": "A visually stunning and musically immersive take on the classic puzzle game Tetris.  Experience a unique blend of challenge and relaxation.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_small/co2kfy.png"
        }
      ],
      "Energetic": [
        {
          "title": "Just Dance",
          "genre": "Rhythm",
          "description": "Get active and unleash your inner dancer in this popular rhythm game. Follow on-screen prompts and bust a move to a variety of upbeat songs.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/co7rm5.png"
        },
        {
          "title": "Overcooked 2",
          "genre": "Party game",
          "description": "A chaotic and hilarious co-op cooking game where you work together (or against) your friends to prepare and serve food in increasingly ridiculous kitchens. The frantic pace and teamwork create guaranteed laughs.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_small/co1usu.png"
        },
        {
          "title": "Cuphead",
          "genre": "Run and gun",
          "description":  "A challenging and visually striking run-and-gun game inspired by 1930s cartoons.  Battle quirky bosses and explore a vibrant world.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/co65ip.png"
        }
      ],
      "Focused": [
        {
          "title": "Portal 2",
          "genre": "Puzzle-platformer",
          "description": "Think with portals and solve mind-bending puzzles in this critically acclaimed sequel to the innovative puzzle-platformer Portal.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_small/co1rs4.png"
        },
        {
          "title": "Slay the Spire",
          "genre": "Roguelike deck-building",
          "description": "Build a powerful deck of cards, battle enemies, and explore an ever-changing spire in this strategic and challenging roguelike.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_small/co82c5.png"
        },
        {
          "title": "Tetris Effect",
          "genre": "Puzzle",
          "description": "(Can also be relaxing - see above). A visually stunning and musically immersive take on the classic puzzle game Tetris.  Experience a unique blend of challenge and focus.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/co2kfy.png"
        }
      ],
      "Nostalgic": [
        {
          "title": "Pokemon Red/Blue/Yellow",
          "genre": "RPG",
          "description": "Catch, train, and battle iconic Pokemon in this classic RPG that defined a generation. Revisit the Kanto region and experience the joy of monster collecting once again.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_small/co7k6q.png"
        },
        {
          "title": "Super Mario World",
          "genre": "Platformer",
          "description":  "Jump, stomp, and spin your way through colorful levels as Mario in this classic platformer. Relive the joy of side-scrolling adventures and iconic enemies.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/co4az5.png"
        },
        {
          "title": "Sonic the Hedgehog",
          "genre": "Platformer",
          "description": "Run at breakneck speeds and collect golden rings as Sonic the Hedgehog. This classic platformer brings back memories of fast-paced action and catchy tunes.",
          "imageUrl": "https://images.igdb.com/igdb/image/upload/t_cover_big/co7pn7.png"
        
     },
        // Add more games as needed
      ],
      // Add more moods and their corresponding games
    };

    // Select a random game from the games of the selected mood
    const games = gamesByMood[selectedMood];
    const randomIndex = Math.floor(Math.random() * games.length);
    const selectedGame = games[randomIndex];
    setGameData(selectedGame);
    setShowMessage(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Know Games</Text>
      <Text style={styles.description}>Description about games...</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedMood}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedMood(itemValue)}
          dropdownIconColor="white" // Set the color of the picker arrow
        >
          <Picker.Item label="Select Mood" value="" />
          <Picker.Item label="Nostalgic" value="Nostalgic" />
          <Picker.Item label="Focused" value="Focused" />
          <Picker.Item label="Energetic" value="Energetic" />
          <Picker.Item label="Relaxing" value="Relaxing" />
          {/* Add more mood options */}
        </Picker>
      </View>
      {showMessage && (
        <Text style={styles.message}>Please select a mood.</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={fetchGameData}>
        <Text style={styles.buttonText}>Get Game</Text>
      </TouchableOpacity>
      {gameData && (
        <View style={styles.gameContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: gameData.imageUrl }} style={styles.image} />
          </View>
          <View style={styles.displayContainer}>
            <Text style={styles.gameName}>{gameData.title}</Text>
            <Text style={styles.gameDescription}>{gameData.description}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  },
  description: {
    marginBottom: 20,
    color: 'white',
  },
  pickerContainer: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
    overflow: 'hidden', // Hide the default border of Picker
  },
  picker: {
    color: 'white',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  gameContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  displayContainer: {
    borderWidth: 2,
    // borderColor: 'red',
    borderRadius: 10,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  gameName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  gameDescription: {
    textAlign: 'center',
    color: 'white',
  },
  message: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Games;
