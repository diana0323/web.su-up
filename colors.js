var Links = {
    setColor:function(color){
      $('.saw').css('color', color);
    }
  }
  var Body = {
    setColor:function (color){
      document.querySelector('body').style.color = color;
      //document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setBackgroundColor:function (color){
      document.querySelector('body').style.backgroundColor = color;
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color);
    }
  }
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day';
      Links.setColor('dimgray');
      $('#active').css('color', 'orange')
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.setColor('silver');
      $('#active').css('color', 'dodgerblue')
    }
  }