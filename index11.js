let p = document.querySelectorAll('p');
p.forEach(i=> {
    i.innerHTML = i.textContent.replace(/\w+/g,'<span>$&</span>');
});


function checkArrayIsUnique(arr) {
    let arr1 = arr.sort();
    for (let i =0; i < arr1.length;i++) {
        if(arr1.indexOf(arr1[i]) !== arr1.lastIndexOf(arr1[i])) {
            return console.log('false')
        }
            } return console.log('true');
}

let span = document.querySelectorAll('span');

span.forEach(s=> {
   
    let arr = [];
    let colorsGenerate = span.length;
    let count = 0;
    while(count < colorsGenerate) {
        arr.push('#'+(Math.random()*0xFFFFFF<<0).toString(16));
        count++;
    }
   
    arr = arr.filter((item,index)=>arr.indexOf(item) === index);
    for (let i = 0; i < arr.length; i++) {
        s.style.color = arr[i];
    }
    checkArrayIsUnique(arr)
});
