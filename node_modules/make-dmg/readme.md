# make-dmg [![Build Status](https://travis-ci.org/gillesdemey/make-dmg.svg?branch=master)](https://travis-ci.org/gillesdemey/make-dmg)

> Create a good-looking [DMG](https://en.m.wikipedia.org/wiki/Apple_Disk_Image) for your macOS app in seconds

Imagine you have finished a macOS app, exported it from Xcode, and now want to distribute it to users. The most common way of distributing an app outside the Mac App Store is by putting it in a `.dmg` file. These are hard to create, especially good-looking ones. You can either pay for a GUI app where you have to customize an existing design or you can run some homebrewed Bash script and you still have to design it. This tool does everything for you, so you can play with your 🐈 instead.

<img src="screenshot-cli.gif" width="998">

*This tool is intentionally opinionated and simple. I'm not interested in adding lots of options.*


## Install

Ensure you have [Node.js](https://nodejs.org) 4 or later installed. Then run the following:

```
$ npm install --global make-dmg
```


## Usage

```
$ make-dmg --help

  Usage
    $ make-dmg <app>

  Example
    $ make-dmg 'Lungo.app'
```


## DMG

The DMG requires macOS 10.11 or later and has the filename `appName-appVersion.dmg`, for example `Lungo-1.0.0.dmg`.

It will try to code sign the DMG, but the DMG is still created and fine even if the code signing fails, for example if you don't have a developer certificate.

<img src="screenshot-dmg.png" width="772">


## License

MIT © [Gilles De Mey](https://gilles.demey.io)
