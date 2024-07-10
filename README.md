# React Native Architecture: Dynamic Styling and State Management

This project follows the architectural principles designed by Mubashir Ali Kalhoro, emphasizing dynamic styling and robust state management. The setup ensures that the app is responsive, easily maintainable, and ready to handle state changes such as themes, sizes, and orientations.

## Installation

To set up the project, clone the repository and install the necessary dependencies:

1.  download the code in zip
2.  delete `.gitignore` from downloaded zip
3.  paste it inside your project and run the command below

Add the following dependencies:

```bash
yarn add @react-native-async-storage/async-storage @react-navigation/native @react-navigation/native-stack @reduxjs/toolkit react-redux redux-persist axios react-native-screens react-native-safe-area-context
```

## Key Features of the Architecture

### 1. **Dynamic Styling**

The architecture is designed to handle dynamic styling efficiently:

- **Responsive Dimensions**: The application listens for changes in window size and updates the dimensions accordingly. This ensures a seamless experience across different devices and orientations.
- **Theming via Device Style**: Colors and themes are managed through the current appearance of the device. This ensures that any changes to the theme are instantly reflected throughout the app, providing a consistent user experience.
- **Global Styles**: Common styles are defined globally to maintain consistency across different components. This approach reduces redundancy and simplifies the maintenance of styles.

### 2. **State Management**

Robust state management is a core component of this architecture:

- **Redux Toolkit**: Utilizes Redux Toolkit for efficient state management. This reduces boilerplate code and simplifies the creation of slices and reducers.
- **Redux Persist**: Ensures that the app state is persisted across sessions. This is particularly useful for maintaining user preferences and session data.
- **Asynchronous Storage**: Uses `@react-native-async-storage/async-storage` for persistent storage solutions, ensuring that critical data is not lost between sessions.

### 3. **Navigation**

The navigation setup leverages `@react-navigation/native` and `@react-navigation/native-stack` to provide a seamless navigation experience:

- **Stack-Based Navigation**: Implements stack navigation for easy and intuitive navigation between screens.
- **Screen Optimization**: Uses `react-native-screens` to optimize screen transitions and improve performance.

### 4. **API Handling**

API calls are managed using `axios` to ensure efficient data fetching and error handling:

- **Centralized API Handling**: All API calls are handled in a centralized manner, making it easier to manage and debug network requests.
- **Error Handling**: Robust error handling mechanisms are in place to manage network errors gracefully.

### 5. **Safe Area Handling**

Uses `react-native-safe-area-context` to manage safe area insets, ensuring that the UI components are displayed correctly on devices with notches or rounded corners.

## Project Structure

```
/src
  /assets          # Asset files like images, fonts, etc.
    / fonts
    / icons
    / images
  /components      # Reusable components
    /global
  /utils           # constants (api endpoints, app data)
  /navigators      # Navigation setup
  /store           # Redux setup (slices, store, etc.)
  /screens         # Screen components
    /App
    /Auth
  /utils           # Utility functions and helpers
/App.tsx           # Main entry point
```

## Running the App

To run the app on an emulator or a physical device:

```bash
yarn start
yarn android
# or
yarn ios
```

## Conclusion

This architecture, inspired by Mubashir Ali Kalhoro, focuses on dynamic styling and robust state management to ensure a responsive, maintainable, and user-friendly React Native application. By leveraging modern libraries and best practices, it provides a solid foundation for building scalable mobile applications.
