// code your solution here
function saturdayFun(activity="roller-skate"){
return (`This Saturday, I want to ${activity}!`)
}
saturdayFun();
saturdayFun('bathe my dog');
 
const mondayWork= function (place='go to the office') {
    return (`This Monday, I will ${place}.`)
}
function wrapAdjective(visual="*"){
    return function(adj="special") {
        return `You are ${visual}${adj}${visual}!`
    }
}
