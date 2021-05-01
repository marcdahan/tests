(() => {
    function getData(url, callControl, boo, response) {
        if (response ) console.log(response)
        return new Promise(function(resolve, reject) {
            console.log("calling")
            let res = `: url: "${(url)}", callControl: "${(callControl)}" + boo: "${(boo)}"`
            if (!url || callControl <= 0) res = `NOT resolved + ${res}`
            else res = `RESOLVED + ${res}`
            resolve(res)
        });
    }
    
    
    let tsearch = new getData("wifi", 0, true)
    
    tsearch
    .then(result => {return new getData("wifi", 2, true, result)})
    .then(result => {return new getData(null, 2, true, result)})
    .then(result => console.log(result))
    .catch(reason => console.log(reason))
    .finally(() => console.log("Done"))
    })();