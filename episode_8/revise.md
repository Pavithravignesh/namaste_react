# React component cycle method

## for class-based-component

### render at ever-first

1. constructor
2. render
3. componentDidMount()

## what is react component life cycle?
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### mounting cycle
1. constructor method,
2. render method,
3. react updates the DOM,
4. compoundDidMount method

### in my cause


<-- MOUNTING -->

<-- render phase -->

1. parent constructr()
2. parent render()

    1. child contructor() one name
    2. child render() one name

    3. child constructor two name()
    4. child render two name()

<-- commit phase -->

 7. child compoundDidMount() one name
 8. child compoundDidMount() two name

9. parent compundDidMount() 

<-- UPDATING -->

<-- render phase -->

10.  updating the state at parent constructor()
11.  updating the newly value at render() as updating the existing data, which already been there,

<-- commit phase -->

12. compoundDidUpdate()

<-- Unmounting --> 

13. should clear things out while leaving the page?

