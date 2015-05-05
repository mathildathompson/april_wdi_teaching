var addToLocalStorage = function(input){
  var currentShoppingList = JSON.parse(localStorage.getItem('shoppingList'));
  currentShoppingList.push(input);
  localStorage.setItem('shoppingList', JSON.stringify(currentShoppingList));
}

var updateHTML = function(input){
  $('ul').append('<li class="item">' + input + '</li>')
};

var initialize = function(){
  var shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
  $.each(shoppingList, function(index, item){
    console.log(index, item);
    $('ul').append('<li class="item">' + item + '</li>');
  })
}

$(document).ready(function(){
  initialize();
  $('input').on('keypress', function(event){
    if (event.keyCode === 13){
      var input = $(this).val();
      $(this).val('');
      addToLocalStorage(input);
      updateHTML(input)
    }
  });
});

























