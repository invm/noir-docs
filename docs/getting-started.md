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
- 📚 Multiple simultaneous connections
- 🗂️ Multiple query tabs
- 📄 Export as CSV or JSON array
- 📝 Sleek editor, with autocomplete, vim mode, formatting and more
- 📊 Modern, fast grid for results display
- 🏃 Run multiple queries at once and paginate between results
- ⌨️ Keyboard-driven, achieve everything with only the keyboard
- 🎡 Modify ui, grid and editor themes however you like
- 📈 View complex rows in a JSON mod which allows search
- 👉 Quick actions

### Supported databases

1. **Postgresql**
2. **MySQL**
3. **MariaDB**
4. **SQLite**

## ⚙️ Mechanics

Noir implements a smart cache technique by caching queries by tabs and their position in that tab for each connection.
Meaning in case of:

```sql
select name from user;

select id from product;
```

Each query will be executed separately and cached in its own file. The cache lives in a temporary folder that clears upon system restarts.
