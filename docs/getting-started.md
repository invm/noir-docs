---
sidebar_position: 1
slug: /
---
import showcase from './app-showcase.png'

# 🚀 Getting Started

Let's discover **Noir in less than 10 minutes**.

<img src={showcase} width={800} />

Noir is a modern cross-platform database client that tries to deliver a great experience.

## 🔥 Features

- 👋 Free and open source!
- 💻 Cross-platform - Linux, Macos and Windows
- 👨‍👩‍👦‍👦 Multiple simultaneous connections
- 🗂️ Multiple query tabs
- 📄 Export as CSV or JSON array
- 📝 Slick editor, with autocomplete, vim mode, formatting and more
- 📊 Modern, fast grid for results display
- 🏃‍♂️ Run multiple queries at once and paginate between results
- ⌨️ Keyboard-driven, achieve everything with only the keyboard
- 🎡 Modify ui, grid and editor themes however you like
- 📈 Viewcomplex rows in a JSON mod which allows search
- 👉 Quick actions

### Supported databases

1. **Postgresql**
2. **MySQL**
2. **SQLite**

## 🛠️ Installation

Download the latest release from [here](https://github.com/invm/noir/releases) for your platform.

### MacOS

MacOS users will choose between arm-based and intel-based processors.
In the files above the arm-based processor files are ending with `_aarch64.dmg` and the intel-based processor files are ending with `_x64.dmg`.

### Linux

Linux users can choose between the `.deb` package and the AppImage.

### Windows

Windows users can choose between the `.exe` installer and the `.msi` installer.

## ⚙️ Mechanics

Noir implements a smart cache technique by caching queries by tabs and their position in that tab for each connection.
Meaning in case of:

```sql
select name from user;

select id from product;
```

Each query will be executed separately and cached in its own file. The cache lives in a temporary folder that clears upon system restarts.
