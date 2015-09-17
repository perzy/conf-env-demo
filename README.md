## conf-env use demo


### sample

```bash
$ npm install conf-env-demo
$ cd ./node_modules/conf-env-demo
```

Then

Test development

```bash
$ export NODE_ENV=development && node app.js
```

Test production

```bash
$ export NODE_ENV=production && node app.js
```

Test staging

```bash
$ export NODE_ENV=staging && node app.js
```

Output
```js
package name is : conf-env-demo
current config env is :  development
current-> development.js
local -> read from local config
Enter any key to quit 
quiting... 
```