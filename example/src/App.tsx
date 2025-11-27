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
          <Text>{isActive ? 'Active' : 'Inactive'}</Text>
        </Pressable>

        <UnmountWrapper placeholderStyle={styles.placeholder}>
          <View style={styles.heavy}>
            <Text>Heavy Component</Text>
          </View>
        </UnmountWrapper>
      </UnmountProvider>
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
    marginBottom: 10,
    borderRadius: 5,
  },
  heavy: {
    backgroundColor: 'darkgray',
    padding: 20,
    borderRadius: 3,
  },
  placeholder: {
    backgroundColor: 'lightgray',
  },
});
