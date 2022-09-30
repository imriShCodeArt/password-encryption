**NOTE:**
For exposing components to remote apps- Remove the 'runtimeChunk' field from webpack.config.js > .optimization

**on the package.js file:**

1. Name your app on the package.json name field. the name you will type here would be injected to the index.html-title and to the ModuleFederation plugin inside the webpack.config.js

2. the field "build:start"- Update the port number if you need to.

3. update/add author name and details. 

4. Update your dependencies.


**on the webpack.config.js file:**

1. Update the 'port' variable.