# React Native
[Documentation](https://reactnative.dev/docs/getting-started)

## React Native History
* Native to Operating System
    * Apple iOS: Objective-C & Swift
    * Google playstore: Java & Koitlin
* Web (using webview to create hybrid apps, convenience at the cost of performance)
    * Cordova, Ionic, Progressive Web App
* Native-like
    * React Native, Flutter, Xamarin(.Net framework & C#)
* Why React Native
    * Developed by Facebook, has big community, which means more features/support when running into issues
    * Cross-platform, infinitely extensible(can include pure native code, Swift/Java, for high performance)

## React Native Internal
* React libraries provided components and API that allow developers to tap into the functionalities of the phone. React components will be compiled into Native code(Swift/Java) before being shipped but since the underlying program logic in React is written in Javascript, the JavaScript file will be shipped along with the native code when the app is deployed to the phone. The app works by running the native code that is shipped to first display the view and then communicate constantly with the Javascript thread through a Javascript virtual machine(RN bridge).
* Application is styled with Javascript, all core components accept a prop named `style`.

## Differences with React Web
* Uses `react-native` to render components instead of `react-dom`
* Web component to react native UI component: `<div>`: `<View>`, `<p>`: `<Text>` etc.
* `import StyleSheet` and create `styles` variable
    * camelCase instead of kebab-case in CSS
    * no unit in px, em etc
