# Mobile app builds

AssetGoal uses Capacitor as a hybrid native shell: the installed iOS and
Android apps share this one UI codebase, but the screens are still rendered
from the bundled web assets. A fully native Swift/Kotlin rewrite would be a
different project and would require maintaining two app implementations.

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
IDE, and provide production app icons and launch screens. The current CSS and layout support safe areas, touch input, and small screens.
The web build includes an installable manifest, a basic cached app shell, and a
simple SVG app icon. Tailwind, Chart.js, and the font are still loaded from
public CDNs, so fully offline charts require bundling those assets locally
before release. Add an offline smoke test for the native shell.

The recurring planning flow includes fixed bills, variable spending, debt
minimums and balances, cash and retirement balances, employer match, and
goal-specific target dates and ownership costs. These are planning estimates,
not financial advice; projections assume the entered income, expenses, rates,
and contributions remain steady. While the emergency fund is below its target,
other savings goals and retirement contributions are paused; once a target is
reached, available contributions roll to the next active goal and then to the
HYSA. Emergency-fund balances continue earning the estimated HYSA rate after
reaching their target. The home page shows a simple safe-to-spend estimate,
goal completion guidance, and a next-step recommendation. Profile includes a
three-question monthly check-in. Goals show progress bars, and the home page
includes a simple spending breakdown,
recommendation, and monthly check-in. Profile also provides a JSON data backup.
Native builds use Capacitor Haptics when the haptics dependency is installed and
synced; web browsers use vibration only when the browser supports it. Profile
supports JSON backup restore, and shows when data was last saved on the device.
Native builds use Capacitor Preferences for the main app state, with browser
storage as a fallback for the web preview. This keeps the installed app's data
in native app storage without requiring separate iOS and Android data code.
The browser backup and restore flow remains available for moving data between
devices. SQLite is only needed later if the app grows into a much larger
dataset.
