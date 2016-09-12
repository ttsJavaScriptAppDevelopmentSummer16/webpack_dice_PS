var $ = require ('jquery');
var _ = require('lodash');

module.export = $(document).ready(function(){
  var button = $('#roll');
  var header = $('#dice');
  var body = $('#results')

  button.on('click',function(event){
    body.children().remove();
    diceRoll = _.random(1,6);
    // console.log(diceRoll);
    body.append("<h1>" + diceRoll + "</h1>");
    alert('Play Again?')
  })
  }
)
