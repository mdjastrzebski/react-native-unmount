import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { UnmountProvider, UnmountWrapper } from 'react-native-unmount';

export default function App() {
  const [isActive, setIsActive] = React.useState(true);

  return (
    <View style={styles.container}>
      <UnmountProvider isActive={isActive}>
        <Pressable
          style={styles.button}
          onPress={() => setIsActive((active) => !active)}
        >
          <Text style={styles.buttonText}>
            {isActive ? 'Active' : 'Inactive'}
          </Text>
        </Pressable>

        <UnmountWrapper
          style={styles.wrapper}
          placeholderStyle={styles.placeholder}
        >
          <HeavyComponent />
        </UnmountWrapper>

        <UnmountWrapper
          style={styles.wrapper}
          placeholderStyle={styles.placeholder}
        >
          <HeavyComponent />
        </UnmountWrapper>

        <UnmountWrapper
          style={styles.wrapper}
          placeholderStyle={styles.placeholder}
        >
          <HeavyComponent />
        </UnmountWrapper>
      </UnmountProvider>
    </View>
  );
}

function HeavyComponent() {
  return (
    <View style={styles.heavy}>
      <Text style={styles.heavyText}>Heavy Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 25,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  heavy: {
    width: '100%',
    height: '175',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heavyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaa',
  },
  wrapper: {
    alignSelf: 'stretch',
    margin: 20,
    marginVertical: 10,
  },
  placeholder: {
    backgroundColor: '#eee',
  },
});
