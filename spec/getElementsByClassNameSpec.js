var htmlStrings = [
  '<p class="targetClassName"></p>',
  '<p class="otherClassName targetClassName"></p>',
  '<p><p class="targetClassName"></p></p>',
  '<p><p class="targetClassName"><p class="targetClassName"></p></p></p>',
  '<p><p></p><p><p class="targetClassName"></p></p></p>',
  '<p><p class="targetClassName"></p><p class="targetClassName"></p></p>',
  '<p><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></p>'
];

describe('getElementsByClassName', function(){

  it('should match the results of calling the built-in function', function(){

    $('body').addClass('targetClassName'); // add class to the body of the html page <body class = "targetClassName">
    htmlStrings.forEach(function(htmlString){
      var $rootElement = $(htmlString); //get reference to  string in htmlStrings
      $('body').append($rootElement); // append it to the body

      var result = getElementsByClassName('targetClassName'); 
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);

      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?

      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
