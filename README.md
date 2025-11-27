# React Native Unmount

Unmount inactive views to save memory!

## Installation

```sh
npm install react-native-unmount
```

## Usage

```tsx
import { useIsFocused } from '@react-navigation/native';
import { UnmountProvider, UnmountWrapper } from 'react-native-unmount';

function HomeScreen() {
  // Use React Navigation or any other navigation library
  const isActive = useIsFocused();

  return (
    <UnmountProvider isActive={isActive}>
      <LightContent />
      <UnmountWrapper>
        <HeavyComponent />
      </UnmountWrapper>
    </UnmountProvider>
  );
}
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
