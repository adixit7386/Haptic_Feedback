import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
function getImage(num: number): JSX.Element {
  switch (num) {
    case 1:
      return require('./assets/dice-1.png');
    case 2:
      return require('./assets/dice-2.png');
    case 3:
      return require('./assets/dice-3.png');
    case 4:
      return require('./assets/dice-4.png');
    case 5:
      return require('./assets/dice-5.png');
    case 6:
      return require('./assets/dice-6.png');
    default:
      return require('./assets/dice-1.png');
  }
}
export default function App() {
  const [images, setImages] = React.useState(require('./assets/dice-1.png'));
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const rollDice = () => {
    ReactNativeHapticFeedback.trigger('impactLight', options);

    const random = Math.floor(Math.random() * 6) + 1;
    let image = getImage(random);

    return setImages(image);
  };

  // const dice2 = `./assets/dice-${random}.png`;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.dices}>
          <View style={styles.img}>
            <Image source={images} style={styles.image} />
          </View>
          <View>
            <TouchableOpacity onPress={() => rollDice()} style={styles.button}>
              <Text style={styles.heading}>Roll</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 250,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  slices: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 6,
  },
});
