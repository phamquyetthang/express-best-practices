# Best practice to build a express node server

## Projects structure:
```
src
├── components
|   |──example
|   |   ├──controllers
|   |   ├──interfaces
|   |   ├──models
|   |   └── router.ts
|   └── router.ts
├── constants
|   ├──index.ts
|   └── etc ...
├── helpers
├── middleware
│   ├── Dashboard
│   └── etc ...
└── index.js
```

## Start:
### Install node_modules ( required node version 16):
``` npm install ``` 
### Dev scripts:
``` npm run dev ```
### Init a new component:
``` npx plop ```