1. written a class based components as it derived from functional components, and render both of those,

2. using props,

3. order of execution inside the class,

4. life cycle of the component,

5. things which all are can be or should be done at compountDidMount()

6. detailed view on how react component render via it's life cycle,

<!-- after the initial render -->
useEffect(()=>{},[]) 
componentdDidMount(){}

<!-- for conditional -->
useEffect(()=>{},[conditional]);
componentDidMount(){
    if (conditional === conditional1){
        <!-- logic -->
    }
}

<!-- for more than conditional -->
useEffect(()=>{},[conditional, conditional1]);
componentDidMount(){
    if (conditional === conditional || conditional1 === conditional1){
        <!-- logic -->
    }
    
}

<!-- after leaving the page -->
useEffect(()=>{
    return ()=>{clearInterval(timer)}
},[])
componentWillUnmount(){
    clearInterval(this.timer);
}