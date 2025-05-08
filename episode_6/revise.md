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

# whats the difference between Redux vs ContextAPI
1. 