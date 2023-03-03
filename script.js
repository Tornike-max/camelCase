document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;
const clck = document.querySelector('button');


clck.addEventListener('click', function(){
   const text = document.querySelector('textarea').value;
   const rows = text.split('\n')
   for(let [i,row] of rows.entries()){
    let [first,second] = row.toLowerCase().trim().split('_')
    let camel = first + second[0].toUpperCase() + second.slice(1);
    console.log(`${camel.padEnd(20)} ${'❇️'.repeat(i + 1)}`)
   }
   
})

// underscore_case   ❇️
//   First_name      ❇️❇️
//  Some_Variable    ❇️❇️❇️
//   calculate_AGE   ❇️❇️❇️❇️
// delayed_departure ❇️❇️❇️❇️❇️

