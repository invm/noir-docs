---
sidebar_position: 2
description: 'Explore the UI'
---
import sidebar from './img/sidebar.png'
import grid from './img/grid.png'
import editor from './img/editor.png'

# 🖥️ Console overview

After you connect to any of your connections, you will be presented with the **console** screen.

## Tab types

At any point in time the console will be on any of the following tab types:

### Query tab

The query tab is the default tab when opening a new one, and most used, it has the editor and the limited results grid.
The limitation of the grid are as follows:

- no option to edit rows from the table.
- no constraints icons on the columns

### Data tab

The data tab will be shown when you right click a table or a view and select show data, this tab has the results grid without the limitation mentioned above and allow to edit rows straight from the table and show constraints icons on columns header, making then uneditable.

When a change has been made on any row, 2 buttons will appear on the pagination component that will allow to either commit the changes or reset them.

### Table structure tab

Right clicking on a table or view and selecting the `table structure` option will open this tab and list the columns, indices, constraints and trigger associated with the table/view

:::tip[The sidebar is always visible on all tabs]
:::

## Console panes

The console screen consists of multiple panes

- a **sidebar**
- an **editor**
- **results list**

## Sidebar

<img src={sidebar} width={250} />

The sidebar on the right side of the screen contains the following items to interact with:

- Schema selection dropdown
- Database quick actions
  - Show process list
  - Refresh entities list
- Entities list
  - Tables
  - Views
  - Functions / Routines
  - Triggers

Interacting with each is pretty straight-forward.

### Schema dropdown

Select your schema from the schemas list, next time you'll connect it will be your default schema.

### Quick actions

Under quick actions you have the options to view the process list or activity on the database and refresh the entities list.

### Entities list

Click on tables/views to open a collapsed view of all the columns, clicking on each column while an editor is in view will automatically add the column to the editor, this helps when selecting specific columns from a table.

Right-clicking on an entity will show a context menu with multiple options to interact with it:
    Tables/Views:
       View the table structure.
       Show table data which will automatically open a new tab without an editor and query 1000 rows
       Truncate table (a confirmation modal will open)
    Function/Procedures/Triggers:
       Show entity
       Show create statement

## Editor

<img src={editor} width={500} />

On top of the editor you'll see tabs, that allows to move between query tabs, data tabs that show 1000 rows from a table and table structure tabs.
Opening a new tab will always open a new query tab. These are saved each time a query is executed and will be restored upon next app launch.

:::tip[Autocomplete]
The editor comes with a autocomplete functionality to suggest tables, and when prefixing column with a table name like `users.`, it will suggest columns names.
:::

You may write multiple queries at once, with a defined delimiter and run them all, on the backend, they are split into individual queries and ran separately, their results returning to the frontend independent of each other and allow to view results while other queries are ran in the background.

### Actions

The following actions are available on the actions panel:

- format
- execute
- copy query
- apply auto limit
- toggle vim mode

## Results grid

<img src={grid} width={800} />

### Pagination

This component contains multiple useful parts:

#### Result set pagination

Will appear when there is more than one query was executed in the editor, this will allow to move between result sets where each is associated to each query.

#### Row count

Will be at most 1000 when auto limit is applied, otherwise will show the rows in the result set.

#### Reset changes button

only when on data tab and changes have been made

#### Apply changes button 

only when on data tab and changes have been made

#### Export buttons

Exporting to either CSV or JSON will prompt you to provide a location to save the requested file.

#### Page size dropdown

#### Pagination buttons and page number

### Grid

Other then reviewing the results, the grid allow some actions when right-clicking any cell:

- View in JSON mode - will open a modal where the whole row has been serialized to JSON, (Ctrl/Cmd+f allow to search in the modal)
- Copy row
- Copy cell
- Edit row (only on data tab and the column is editable)
