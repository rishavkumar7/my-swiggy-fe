# my-swiggy-fe

- Transitive dependency - All the dependencies, dependencies of dependencies lies inside the node_modules
- Transpiled - The JSX code is converted to the javascript code by the Parcel (Babel)
- Functional Component/ Class Component
- Javascript inside JSX using '{}'
```
<ComponentName /> 
<ComponentName></ComponentName> 
{ComponentName()}
```
## App Layout is shown below :

- Header
    - Logo
    - Nav Items
        - Home
        - About
        - Cart
- Body
    - Search
    - Container
        - Container Items
            - Image
            - Name
            - Cost
            - Rating
- Footer
    - Copyright
    - Links

## Some useful node/npm/nvm/npx commands
```
node -v

npm -v
npm view axios
npm --help
npm init
npm i
npm i axios
npm i -D axios
npm uninstall axios
npm uninstall -D axios
npm i -g axios
npm uninstall -g axios
npm run myScript

nvm version
nvm install 20.0.0
nvm list
nvm current
nvm use 18.2.0

npx create-react-app my-app
```

## Semantic versioning

- ^2.29.3  ->   2.x.x   (upgrades to latest minor and patch version while downloading)
- ~2.29.3  ->   2.29.x  (upgrades to latest patch version while downloading)
- 2.29.3   ->   2.29.3  (no changes in the version while downloading)