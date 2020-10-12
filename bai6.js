let a = {
    name: 'HTML',
    complete: false,
};
let b = {
    name: 'CSS',
    complete: false,
};
let c = {
    name: 'Basics of javascript',
    complete: false,
};
let d = {
    name: 'Node package manager (Npm)',
    complete: false,
};
let e = {
    name: 'Git',
    complete: false,
};
let g = [];
a.push(a);
a.push(b);
a.push(c);
a.push(d);
a.push(e);

//6.1

for (let i = 0; i < a.length; i++){
    console.log(`${i+1}. ${a[i].name}`);
    console.log(`Complete: ${a[i].complete}`);
   
}