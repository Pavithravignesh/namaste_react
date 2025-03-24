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

7. what is diff-algorithm?
- this algorithm finds diffference between newly updated version virtual DOM with previously available virtual DOM, 

8. what is reconcillation algorithm AKA react fibre?
- updates, only newly updated portion which diff -algorithm fins as new from the previous version of the whole virtual DOM object, then actual DOM in the borwser will be get updated. 