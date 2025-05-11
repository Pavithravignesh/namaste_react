## how can we able to call up API's and interact with the backend!

1. what is monolith architecture?
2. what is micro-services?
3. how they services in micro-service architecture?
4. what is separation of concerns?
5. what is single responsibility prinicple?

# every service's in the micro-service will run on their own respective port

- localhost:1234/ui
- localhost:3000/api
- localhost:4000/sms

# they connect using port URL itself,

# ideal time peroid to fetch the data's or way to fetch the dat form api!

1. loads -> API call -> render updated UI

# this is we do always ans better hand the other,
2. loads -> render initial UI -> API -> render updated UI


6. what is CORS policy?
- the borwser will do block api calls during one origin to another, this case I can't call swiggy's api from http://localhost:1234/

7. what is shimmer UI?

8. what is condition render?
- redner under concern of some condition, then it's condition rendering!

9. difference between local variable and state variable?

10. useRouterError()?

10. alternative to <a></a> tag, is link from react-router-dom

11. what is single page application?

12. how many types of routering in web apps?
    - client side routering - just a isngle page, only the components gets interchanges,
    - server side routering - ,

13. dynamic routing?

14. what does useParam() do?
- gets the id from the URL, of the element which you've clicked having,

15. nested router?
- at which component you're going to having child element, will be having <outlet/> from react-router-dom,
- then createBrowerRouter([]) will have all the object component with their requried info,
- RouterProvider conmponent at the reactDOM.render will be having AppRouter as paras

16. single responsibility prinicple?
17. modularity?

<!-- episode 9 -->
- let's making the code more optimized,

- looks every component should have single responsibility,

# as for Hero component it should be render the restaurtants

- fetch the data can be a customHook,

# useCustomHook();

- better place for this will be tils, one hook at a file,
- starts with use with lowercase 'u', which makes react to identify easily,
- it should return the required fetched data,

# whenever the component renders?
1. useEffect with empty dependency array, won't trigger for any change of state in the component, it only render itself when at the very first render, and nothing,
2. however in the case of two of custom hook's the useEffect tracks and response for the change in url, and change in online status, how this may happen?

# chunning
# coe splitting
# dynamic bundling
# on demand loading,
# lazy loading


lazy loading if you won't separate the import and export of component correctly!

<!-- episode 10 -->

# what is higher order comoponent?
- a component which can receive another component as a parameter, and return a component out of it,
- since you're having a component inside a another component, you can able to pass parameter to component itself(that's why it an higher order component) and can be pass parameter to the component which being return as a output!

# what is pure function?
- TODO:

# what is controlled and uncontrolled component?
- controlled - not having their own state,
- uncontrolled - having their own state,

# there are two main sort of layer in react;
1. UI layer - jsx,
2. data layer - state, props, 

18. lifting the state up in react?

# react context

1. what is props drilling,
2. what sort data flow does react having?
3. what does mean by top to bottom?
4. how can we use context hook inside class based component?

# ContextAPI
1. createContext,
2. provide it where ever you want, by using <UserContext.Provider value={{}}><UserContext.Provider>
3. consumer either by, hook way useContext(respectiveHook); or component way <UserContext.Consumer></UserContext.Consumer>

<!-- epi 12 -->
# whats the difference between Redux vs ContextAPI

# whats the difference between react-redux vs redux-toolkit
1. install @reduxjs/toolkit and react-redux
2. build our store
3. connect our store to our app
4. slice (cartSlice)
5. dispatch an action
6.  

# why redux?
1. is basically orffer better ways to manage the state for the project,
2. for complex data layer,
3. easiler to debug, with it's chorme extension and redux dev tool,

# what is react-redux and redux toolkit(RTK)?
1. reux-toolkit standard way for writing redux logic,
2. 

# step by step approach
1. create appStore out of configureStore({});
2. provide it via <Provide store={apptore}></Provide> out of react-redux
3. create createSlice({})
4. which includes some configuration; 
   1. name, 
   2. initialState:{items:[]},
   3. reducers:{
            <!-- action's - communicate with redux-store -->
            <!-- which make the communication with redux-store, like... -->
            <!-- modifies slice -->
            addItems:(state,action)=>{};
            updateItems:(state,action)=>{};
            deleteItems:(state,action)=>{};
            clearCart:(state,action)=>{};
            } 
4. export default cartSlice.reducer;
5. export const {}=cartSlice.action;
6. add back to the appstore as {reducer:{cart: cartReducer}}; appStore's bigger reducer will have every small reducer's,
7. cart: cartReducer
8. sibscribing to the store using selector,
9. useSelector((store)=>store.cart.items);

<!-- IMPORTANT THINGS TO NOTE -->
1. subcribing only to that particular portion of the store, not the whole store,
2. beening very conscious about referring reducer whether it is singular and plular,
   1. inside appStore = configureStore({reducer: thatParticularName:thatParticular}); it's singular,
   2. inside cartSlice = createSlice({reducers:{action:()=>{}}}), it's plular,
   3. via exporting it, now you're exporting the a one single reducer object which having some number of action inside to it, 
3. mutating the state in redux;
   1. in older days in redux, you cannot be mutate the state object stragihtaway, so, you have to make a copy of it and return as it replaces the global state,
   2. by using RTK, we can able to mutate the state, now return is not compulsory,
   3. console.log(current(state)); //current come from redux toolkit
   4. RTK - either you should mutate the state or return a new state,
4. redux dev tool

add just for test again