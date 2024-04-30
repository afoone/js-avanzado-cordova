```
cordova create hello com.example.hello HelloWorld
```

```bash
yarn add -D cordova
```


available platforms:

```bash
yarn cordova platform ls
```

```bash
yarn cordova platform add ios
yarn cordova platform add android

yarn cordova platform add android
```

### Install pre-requisites for building

To build and run apps, you need to install SDKs for each platform you wish to target. Alternatively, if you are using browser for development you can use browser platform which does not require any platform SDKs.


```bash
yarn cordova requirements
```

```bash
yarn cordova requirements browser
```

Run the following command to build the project for all platforms:

`$ cordova build`

You can optionally limit the scope of each build to specific platforms - 'ios' in this case:

`$ cordova build ios`

# running emulation

`$ cordova emulate ios`

Alternately, you can plug the handset into your computer and test the app directly:

`$ cordova run android`

## Add Plugins


You can modify the default generated app to take advantage of standard web technologies, but for the app to access device-level features, you need to add plugins.

`yarn cordova plugin search camera`


## Using merges to Customize Each Platform

the top-level merges directory offers a place to specify assets to deploy on specific platforms. Each platform-specific subdirectory within merges mirrors the directory structure of the www source tree, allowing you to override or add files as needed. For example, here is how you might use merges to boost the default font size for Android devices:

Edit the www/index.html file, adding a link to an additional CSS file, overrides.css in this case:

  <link rel="stylesheet" type="text/css" href="css/overrides.css" />
Optionally create an empty www/css/overrides.css file, which would apply for all non-Android builds, preventing a missing-file error.

Create a css subdirectory within merges/android, then add a corresponding overrides.css file. Specify CSS that overrides the 12-point default font size specified within www/css/index.css, for example:

  body { font-size:14px; }


  Templates 


  hot reloading

```bash
 yarn add -D watch
 ```

in package.json:

```json
 "dev": "watch 'cordova run browser' www"
```




