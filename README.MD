# Smartphone Based Balance Training


## App Simulation
* There are some limitations to run app on device. To deploy an iOS app, a Mac is required to build projects with native code, we will also need Xcode for iOS and Android Studio for Android. To work around these constraints, apps will be deployed to devices via Expo app, the compiled code will be shipped to Expo client and Expo client will load up the app. To deploy the app natively via Xcode/Android Studio, do `npm run eject`. Native code will then be produced to be uploaded.