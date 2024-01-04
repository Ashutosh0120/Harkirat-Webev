/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
var transactions=[
  {
    itemname: "pepsi", category: "drink",
    price: 20, timestamp: "1-Jan-2024"
  },
  {
    itemname: "miranda", category: "drink",
    price: 25, timestamp: "2-Jan-2024"
  },
  {
    itemname: "samosa", category: "food",
    price: 5, timestamp: "3-Jan-2024"
  }
]

function solve(t){
  var ans=[]; // key-value like a map
  for(var i=0;i<t.length;i++){
    var curr=t[i];
    if(ans[curr.category]) ans[curr.category]+=curr.price;
    else ans[curr.category]=curr.price;
  }
  var k=Object.keys(ans);  // keys of categories
  console.log(ans);
  console.log(k);
  var finalans=[];  // Final ans
  for(var i=0;i<k.length;i++){
    var arr={
      category: k[i],
      price: ans[k[i]]
    }
    finalans.push(arr);
  }
  console.log(finalans);
}
solve(transactions);