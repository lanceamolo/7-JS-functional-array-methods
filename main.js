// items.forEach(function (item) {
//   console.log(item.price)
// })

//Question 1

// let allPrices = items.map(function (item) {
//   return item.price
// })

// console.log(allPrices)

// average = allPrices.reduce(function (avg, value, _, { length }) {
//   return avg + value / length
// }, 0)
// console.log(average)

let prices = items.map(function (item) {
  return item.price
})
console.log(prices)
average =
  prices.reduce(function (a, b) {
    return a + b
  }) / prices.length
console.log(average)

// Question 2

const question2 = items
  .map(function (items) {
    if (items.price > 14 && items.price < 18) return items.title
  })
  .join("")

console.log(question2)

// Question 3

const question3 = items
  .map(function (items) {
    if (items.currency_code == "GBP")
      return items.title + " cost £" + items.price
  })
  .join("")

console.log(question3)

// Question 4

const question4 = items
  .map(function (items) {
    if (items.materials[0] == "wood") return items.title
  })
  .join("")

console.log(question4)

// Question 5

let highMatTitle = ""
const highMats = items.map(function (mats) {
  if (mats.materials[0] > mats.materials[7]) {
    return mats.title
  }
})

console.log(highMats)

// const question5Title = items
//   .map(function (items) {
//     if (items.materials > items.materials[8]) return items.title
//   })
//   .join("")

// console.log(question5Title)

// const question5Mats = items
//   .map(function (items) {
//     return items.materials
//   })
//   .join("")

// console.log(question5Mats)

// // const question5 = items
// //   .map(function (items) {
// //     if (items.materials > items.materials[8]) return items.title + " has "
// //   })
// //   .join("")

// // console.log(question5)

// Question 6

const question6 = items.filter(function (item) {
  return item.who_made === "i_did"
})

console.log(question6.length + " were made by the seller.")
