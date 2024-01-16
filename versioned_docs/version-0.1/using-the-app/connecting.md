---
sidebar_position: 1
description: 'Learn how to connect to your database'
---
import conn from './img/connections-form.png'
import list from './img/connections-list.png'

# 🔌 Add a new connection

The first thing you are presented with when you open Noir is the **add new connection form**. This is where you can add connections.
In order to add a new connection, fill in the form, click **Test** to test the connection and then **Add new connection** to save it.

<img src={conn} width={500} style={{ borderRadius: 10 }} />

Once you add a connection, it will appear in the connection list on the right

<img src={list} width={500} />

Clicking on the **Enter** icon will open the connection in a new tab.

Right-clicking on the connection will give you the option to **Delete** the connection.

Once a connection is established, if you choose not to close it manually, on next app launch it will be restored unless the database is unreachable.
