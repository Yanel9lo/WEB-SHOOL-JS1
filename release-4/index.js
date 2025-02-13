const calc = () => 
{
    let mathExpression = [];

    return (arg) => {
        mathExpression += arg;

        if ( typeof(arg) === 'number' )
            mathExpression = eval(mathExpression)
        //console.log(mathExpression);
        return mathExpression;
    }
} 

const myCalc = calc()
myCalc(5)
myCalc('+')
myCalc(3)
myCalc('/')
console.log (myCalc(4));
// 2

const useMemo = (func) => {
    var rememberFunc = [];
    return function(arg){
        if(rememberFunc[arg]){
            return(rememberFunc[arg]);
        }else{
            rememberFunc[arg]=func(arg);
            return(rememberFunc[arg]);
        }
    }
}
const cb = (num) => num + 1
const func = useMemo(cb)
console.log(func(1))
console.log(func(1))