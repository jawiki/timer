let args = process.argv;
args = args.slice(2);

function simpleTimer (num) {
    let count = 0
    for (let i = 0; i < num.length; i ++){
        count = Number(num[i]);
        setTimeout(() => {console.log(num[i])},count * 1000)
        process.stdout.write('\x07');
    }
}

simpleTimer(5);