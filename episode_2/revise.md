1. what is package.json(approximate) and what it does?
- configuration for npm, 
- having track of what all are package which used in the project,
- npm takes care of package related information at package.json

2. what is dependancy?
3. what is difference between package vs dependancy?
4. what is webpack, bundler, parcel and vite role's here?
5. what is the best bundler usage of moving the code to production?

6. Dev and normal dependancy?
- dev dependance is something which can be only allowed to use while in development process,
- normal dependancy is something which can be make it way to the running production as well, which something restricted only at development phase.

7. how to mention it's aa dev dependancy while installing?
- npm i -D parcel

8. what ~ and ^ means in the package.json file?
- ^ automatically updates even any minor version of updates arrives,
- ~ automatically updates only the major version updates!

9. what is package-lock.json(exact)?
- have a track of exact version that been install,
- 

10. what is transitive dependency?
11. what is node_modules?
- collection of dependancy

11. what is npx?
- npx -> execution that package,

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