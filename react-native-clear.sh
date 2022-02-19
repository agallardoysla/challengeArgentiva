cd ios; pod deintegrate;
watchman watch-del-all; 
rm -rf $TMPDIR/react-native-packager-cache-; 
rm -rf $TMPDIR/metro-bundler-cache-; 
rm -rf node_modules/;
yarn install;
cd ios; pod install;
cd ..;
react-native run-ios;