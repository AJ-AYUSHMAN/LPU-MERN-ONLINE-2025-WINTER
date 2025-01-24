// PROMISE DEFINITION (MDN Docs)
// promise is an object
// that represents "eventual (time is not fixed)"
// "completion of failure"
// of an "asynchronous operation"
// and it "resulting value"

// FETCH is a PROMISE
const pr = fetch("https://api.github.com/users/likbalpande");

console.log(pr);

const cb2 = (data) => {
    console.log(data);
    // what every you want, you do it with this data
    document.write(data.login);
};

const cb = (val) => {
    console.log("DONE");
    console.log(val);

    // value is now having a readable Stream of data
    // i need to convert it in proper format
    const pr2 = val.json(); // this functionality is given to me by Browser
    pr2.then(cb2).catch(handleError);
};

const handleError = (val) => {
    console.log("Error Occurred", val);
};

pr.then(cb).catch(handleError);
