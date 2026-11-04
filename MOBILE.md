# Mobile app builds

The browser app stays in `index.html`. Capacitor copies it into the generated
`www/` directory and uses that same web app for the iOS and Android shells.

## Requirements

- Node.js 22 or newer and npm
- Android Studio and the Android SDK for Android builds
- macOS and Xcode for iOS builds and App Store submission

## Add a native platform

Install dependencies, then run one command for the platform you want:

```sh
npm install
npm run cap:add:android
npm run cap:open:android
```

On macOS, use `npm run cap:add:ios` and `npm run cap:open:ios` instead. After
editing the web app, run `npm run cap:sync` to copy the changes into the
generated native projects.

Before release, change the example application ID in `capacitor.config.json` to
an ID owned by the publisher, configure signing and store listings in the native
IDE, and provide production app icons and launch screens. The current CSS and
layout support safe areas and touch input. Tailwind, Chart.js, and the font are
still loaded from public CDNs, so the app currently needs a network connection
to load those resources.
