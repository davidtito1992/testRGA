TestRGA
====================================

# Prerequisites

Follow the [official guide](https://facebook.github.io/react-native/docs/getting-started.html) to properly setup your environment.
We highly recommend using [nvm](https://github.com/creationix/nvm) instead of brew or aptitude to install nodejs.


# Proyect Set Up

## One time setup

### ENV setup
------------
create the `.env` file on the root.
```
BASE_URL=https://XXXXXXXX

```

Where the `BASE_URL` is the debug url api.

Then create the `.env.production` file on the root too, with the same data that the last,
but the `BASE_URL` must be the production url api.

-----------

### Android

---------------

Set the following variables in `~/.gradle/gradle.properties`
```
MY_PROYECT_RELEASE_STORE_FILE=my_proyect-key.keystore
MY_PROYECT_RELEASE_KEY_ALIAS=my_proyect-key
MY_PROYECT_RELEASE_STORE_PASSWORD=xxxxxxxx
MY_PROYECT_RELEASE_KEY_PASSWORD=xxxxxxxx
```

Update the file `android/app/build.gradle` according to this [guide](https://facebook.github.io/react-native/docs/signed-apk-android.html#adding-signing-config-to-your-app-s-gradle-config) using the variables set in `~/.gradle/gradle.properties`

Generate the file `my_proyect-key.keystore` using the following command from your terminal and place it in the `android/app` folder

```
$ keytool -genkey -v -keystore my_proyect-key.keystore -alias my_proyect-key -keyalg RSA -keysize 2048 -validity 10000

Enter keystore password: xxxxx
Re-enter new password: xxxxx
What is your first and last name?
  [Unknown]:  XName
What is the name of your organizational unit?
  [Unknown]:  XName
What is the name of your organization?
  [Unknown]:  XName
What is the name of your City or Locality?
  [Unknown]:  XName
What is the name of your State or Province?
  [Unknown]:  XName
What is the two-letter country code for this unit?
  [Unknown]:  wx
Is CN=XName, OU=XName, O=XName, L=XName, ST=XName, C=wx correct?
  [no]:  yes

Generating 2,048 bit RSA key pair and self-signed certificate (SHA256withRSA) with a validity of 10,000 days
	for: CN=XName, OU=XName, O=XName, L=XName, ST=XName, C=wx
Enter key password for <my_proyect-key>
	(RETURN if same as keystore password):  xxxxx
Re-enter new password: xxxxx
[Storing my_proyect-key.keystore]
```

--------------

### iOS

--------------
This is not configured.
--------------------


# Running aplication

--------------------
To run a Android simulator with `development` environment, just run:

ANDROID
`react-native run-android`

--------------------


# Outputs

## Android
Use the the command in the rootpath to generate the APK:
```
yarn run android:build
```
It will generate the apk file in the path `android/app/build/outputs/apk/app-release.apk`

If you want to test that file in a plugged devise use the command `yarn run android:install` to install it.