---
sidebar_position: 2
slug: /installation
---

# 🛠️ Installation

Download the latest release from [here](https://github.com/invm/noir/releases) for your platform.

### MacOS

MacOS users will choose between arm-based and intel-based processors.
In the files above the arm-based processor files are ending with `_aarch64.dmg` and the intel-based processor files are ending with `_x64.dmg`.
After 

The app is not signed for mac, thus requiring to change app attributes after installation by running this command from the terminal:

```bash
xattr -cr ./Noir.app
```

### Linux

Linux users can choose between the `.deb` package and the AppImage.

#### How to run AppImage?

```
# Change permissions
chmod +x Noir.AppImage
./Noir.AppImage
```
**AppImages require FUSE version 2 to run. You may need to install and configure FUSE manually.**
https://github.com/AppImage/AppImageKit/wiki/FUSE

### Windows

Windows users can choose between the `.exe` installer and the `.msi` installer.
