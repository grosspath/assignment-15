// GO!

// TASK 1 -- Show/Hide Nav
var alertBtn = document.querySelector('button')
var hideText = document.querySelector('.nav-menu')

alertBtn.addEventListener('click', function(){
  if (hideText.className === "nav-menu"){
    hideText.className = "nav-menu-hidden"
  } else hideText.className = "nav-menu"

})
// TASK 2 -- Select an Icon
var clicked = document.querySelectorAll('.option')
for ( var i = 0; i < clicked.length; i++) {
  clicked[i].addEventListener('click', function(event){
  if (event.currentTarget.className === 'option') {
    event.currentTarget.className = 'option selected'
  } else {
    event.currentTarget.className = 'option'
  }
  })
}

//
// // TASK 3 -- Move Item From List to List
//

var clicked = document.querySelectorAll('.point')
var total = document.querySelector('.total-points')
var totalSum = 0
var startNum = parseInt(total.textContent)
for (var i = 0; i < clicked.length; i++){
  var sumNum = parseInt(clicked[i].textContent)
  clicked[i].addEventListener('click', function(event){
    if (event.currentTarget.innerHTML === '1' && totalSum === 0 ) {
     totalSum =  startNum + 1
     newSum = totalSum
   } else if (event.currentTarget.innerHTML === '1'){
       newSum = newSum + 1
     }

    if (event.currentTarget.innerHTML === '2' && totalSum === 0 ) {
      totalSum =  startNum + 2
      newSum = totalSum
    } else if (event.currentTarget.innerHTML === '2') {
        newSum = newSum + 2
      }
    if (event.currentTarget.innerHTML === '3' && totalSum === 0 ) {
       totalSum =  startNum + 3
       newSum = totalSum
     } else if (event.currentTarget.innerHTML === '3'){
         newSum = newSum + 3
       }

total.textContent = newSum
})

}
// // TASK 4 -- Add Guest to List

var goodList = document.querySelectorAll('.good-standing-list li')
var badList = document.querySelectorAll('.probation-list li')
var bothLists = document.querySelectorAll('li')

for (var i = 0; i < bothLists.length; i++) {
  bothLists[i].addEventListener('click', function(event){
    for (var j = 0; j < goodList.length; j++){
      if (goodList[j] === event.currentTarget) {
      badList.parentNode.appendChild(event.currentTarget)
    }
    for (var k = 0; k < badList.length; k++){
      if (badList[k] === event.currentTarget) {
        goodList.parentNode.appendChild(event.currentTarget)
        }
      }
    }

})
}
//
// // TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
