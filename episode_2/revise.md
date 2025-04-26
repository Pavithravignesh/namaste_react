1. what is package.json(approximate) and what it does?

- configuration for npm,
- having track of what all are package which used in the project,
- npm takes care of package related information at package.json

2. what is dependancy?

- is somw portion of you're package, to which you're package has to work with in term reaching out the need,

3. what is difference between package vs dependancy?

- package is a chunk of code set, which is usable,
- place for all you're downloads to run you're project,

- whereelse, dependancy is a portion in you're downloaded reusable package, which is vital working, basically works alone with other things in the package,

4. what is webpack, bundler, parcel and vite role's here?

- webpack, parcel, vite all are bundler/build tools,
- those will take you're source file and package them as it works efficiently with browser,
- each of them has their own need to get invented,
- basically, combine all source code and dependancy into a big one single bundler for browser,
  A bundler like Webpack, Parcel, or Vite: ✅ Resolves dependencies
  ✅ Transpiles your code (e.g., TypeScript to JS)
  ✅ Optimizes it (e.g., minifies, tree-shakes)
  ✅ Outputs a few production-ready files you can ship to the browser

5. what is the best bundler usage of moving the code to production?

- Vite (Recommended for most modern projects)

6. Dev and normal dependancy?

- dev dependance is something which can be only allowed to use while in development process,
- dev edependancy won't be inculded even in the bundler wrapping,
  Build tools: webpack, vite, rollup
  Linters: eslint, prettier
  Testing: jest, vitest, cypress
  Compilers: babel, typescript

Formatters: sass, postcss, tailwindcss CLI

- normal dependancy is something which can be make it way to the running production as well, hese are packages your app needs to run — both in development and production.
  UI libraries: react, vue, tailwindcss
  HTTP clients: axios, fetch
  Routing: react-router-dom
  State management: redux, zustand

7. how to mention it's a dev dependancy while installing?

- put "-D" before it,
- npm i -D parcel

8. what ~ and ^ means in the package.json file?

- ^ automatically updates even any minor version of updates arrives,
- ~ automatically updates only the major version updates!

9. what is package-lock.json(exact)?

- have a track of exact version that been install,

10. what is transitive dependency?

- A transitive dependency is a dependency of a dependency.

- You don’t install it directly, but it’s still pulled into your project because something you depend on needs it. 11. what is node_modules?

- and there can be many levels of Transitive Dependencies,

10.1. what is node_modules?

- collection of dependancy

11. what is npx?

- CLI - a tool to talk to vite, npx, npm, all other thing which you've downloaded,
- npm - a tool to install, update, manage, and publish packages. it can be termed as "manager of your project’s tools and libraries.",
- npx (npm exec) - A tool to run CLI commands from npm packages, even without installing them globally.

- npx -> execution that package,

TODO:
1. I'm going to install and bundle up and run react, using webpack, parcel, and vite,

2. install the same across the same thing at globally and as well as locally,
- locally, installing thing,
- npm i lodash,
- npm list lodash,
- just inside to the porject,
- globally,
- npm i -g lodash,
- npm list -g lodash
- this will at the somewhere in AppData

TODO:
3. used all thing like; cli, npx, npm, vite, webpack, parcel babel. 

12. what does parcel does the porject?

- dev build,
- creates local server,
- HMR -> Hot Module Replacement,
- using File watching algorithm, which written using c++,
- using caching, for faster build,
- parcel does image optimization as well,
- minification,
- bundling,
- compressing the file,
- consisting hashing,
- differential bundling -> which provides you support access various browsers,
- does beautifully dianogtic,
- provides better error,
- can also host in https, http,
- tree shaking algorithm -> remove unused code,
- different dev and prod bundle,

13. how to make project compatible for older version as well?

- browsers list - a npm package,

14. does npm run start & npm start are same?
