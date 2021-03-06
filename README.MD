# Smartphone Based Balance Training

## App Simulation

- There are some limitations to run app on device. To deploy an iOS app, a Mac is required to build projects with native code, we will also need Xcode for iOS and Android Studio for Android. To work around these constraints, apps will be deployed to devices via [Expo app](https://expo.io/), the compiled code will be shipped to Expo client and Expo client will load up the app. To deploy the app natively via Xcode/Android Studio, do `npm run eject`. Native code will then be produced to be uploaded.

## Android Studio Installation

- Download and install [Android Studio](https://developer.android.com/studio/index.html)
- Make sure these items are checked during installation
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device
- On the splash screen, go to Configure > SDK Manager
  - SDK Platforms tab
    - Check the box next to "Show Package Detail" on the bottom right corner
    - For the Android version you are using (needs to be at least Android 10), make sure these are checked
      - `Android SDK Platform`
      - `Google APIs Intel x86 Atom System Image` or `Intel x86 Atom_64 System Image`
  - SDK Tools tab
    - Check the box next to "Show Package Detail" on the bottom right corner
    - Under Android SDK Build-Tools, make sure at least `29.0.2` is selected
- Add environment variables
  - Add these to your `$HOME/.bashrc` or `$HOME/.zshrc` (If you're using another shell, add it to the appropriate config file)
    ```
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```
  - Verify that this has been installed correctly by loading the config file into your current shell using `source $HOME/.bashrc` or `source $HOME/.zshrc` and running `echo $ANDROID_HOME`, which should return the Android SDK directory
