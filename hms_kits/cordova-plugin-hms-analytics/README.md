# Cordova - HMS & GMS Availability Checker

This plugin is created to serve Huawei Mobile Services and Google Mobile Servies availability check functionality on the Android platform. 


## Usage

1. Add plugin to your projects.

```sh
cordova plugin add https://github.com/onurkenis/cordova-service-checker.git
```

2. Huawei Mobile Services availability.

```javascript
async function () {
    const isAvailable = await cordova.plugins.CordovaServiceChecker.isHmsAvailable();
    alert("isHmsAvailable: " + isAvailable);
}
```

3. Google Mobile Services availability.

```javascript
async function () {
    const isAvailable = await cordova.plugins.CordovaServiceChecker.isGmsAvailable();
    alert("isGmsAvailable: " + isAvailable);
}
```

4. Trigger functions based on your app logic.


## Contributing

Commit messages must comply with [conventional commits](https://www.conventionalcommits.org). Otherwise [commitlint](https://github.com/conventional-changelog/commitlint) will complain.

Thanks to [commitizen](https://github.com/commitizen), `npm run commit` command can be used to create commit messages complying with conventional commits.

Don't forget to install dependencies with `npm install` before to use commitizen.
