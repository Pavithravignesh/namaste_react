# separate file's for separate components

1. why is "src"?

2. what is difference between export defult & NAMED export?
- in a single file you're exporting more than one thing to export then, NAMED export attached to the const declaration will be way!
- export default will be one file, one component!
- that why while importing the NAMED export thing it all will wrapped a {}, export default will be normal the variable itself!

3. never ever have hard coded data at the component file, put those all in the utils folder!

4. can I have the both way of export in a same files?

5. why UI didn't get udpated as it does using useState?
- here's where react does better hand!
- fast DOM manipulation,
- efficient DOM manipulation,
- virtual DOM,
- Diff algorithm,
- reconcillation algorithm,
- react fiber,

# utility fn()

6. useState?
- give 

## whenever state variable change react will re-render the page!

# RECONCILLATION algorithm (react fiber) - react 16
- have a scenario, initial the the container having 8 card's to display, due to some change in state result 3 card's in place of 8 card's,
- react will have VIRTUAL DOM representation of actual DOM,
    - which is a object way representation of older DOM and newly updated DOM,
    - comparing a two object is way easiler than comparing a two html file, that's the reason why while on reconcillation phase DOM element has converted into js object.

# DIFF algorithm
- which compare the old and newly updated virtual DOM, and update the actually update the actual DOM

7. what is virtual DOM?
- object way representation of DOM element in the browser,
- there's two virtual DOM;
    - one is older virtual DOM of browser, which hasn't been updated yet, 
    - another one is newly updated virtual DOM as interaction occures in the UI,
    - comparsion of virtual DOM will occures and finally actual DOM will get updated,


8. what is increamental rendering?