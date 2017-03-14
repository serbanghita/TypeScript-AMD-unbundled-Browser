# workflow.ts

* `git clone https://github.com/serbanghita/workflow.ts.git`
* `cd workflow.ts`
* `npm init`
* create `.gitignore`
  * add `.idea`, add `node_modules`
* `mkdir src && mkdir src/client && mkdir src/common && mkdir src/server`
* `mdir dist && mkdir dist/js`
* `cd dist/js`
  * `curl -O http://requirejs.org/docs/release/2.3.3/comments/require.js`
  * create `index.html` file
  ```html
  <script data-main="bundle" src="js/require.js"></script>
  <script src="js/bundle.amd.js"></script>
  <script>require(["main"]);</script>
  ```
* `npm install typescript --save-dev`
* `tsc --init` (if not in `PATH` use `./node_modules/.bin/tsc`)
  * Edit `tsconfig.json`
  ```json
  {
    "compilerOptions": {
        "module": "amd",
        "target": "es5",
        "noImplicitAny": false,
        "sourceMap": false,
        "rootDir": "src",
        "outFile": "dist/js/bundle.amd.js"
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
  }
  ```
* create `.ts` files in `src`
* run `tsc`
* `npm install browser-sync --save-dev`
 * add `startServer` task to `packages.json`
 * `node_modules/.bin/browser-sync start --s \"dist\" --f \"dist\" --port 3000 --reload-debounce 1500 --no-open --no-ui`
* `npm run startServer`
