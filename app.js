console.log('Opaaa eto me i men')

let targets = document.querySelectorAll('.container')
console.log(targets)

targets.forEach(target => {
    observer.observe(target);
});