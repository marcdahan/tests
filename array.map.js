"use strict";
const foo = await getFoo (state, commit ) {
    try {
      parlamenty = {data : [ "one", "two", "three", "four", "five"]}     
      parlamenty.newData = parlamenty.data.map((currentValue, index, array)  => {
         return `${currentValue}-index-${index}-mapped `;
      })
      commit("updateParlamenty", `parlamenty.data : ${parlamenty.data.toString()}, parlamenty.newData : ${parlamenty.newData.toString()}`);
    } catch (err) {
      console.log(err);
    }
  }
  let t = getFoo ({do: "nothing", parlamenty : "john"}, function(par1, par2) { console.info(`par1 is ${par1}, and par2 is ${par2}`)})
  console.log(t)