(function(header, humberger){
  let nav_bar_drop = false;

  window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    // console.log(this);
    header.classList.toggle('sticky', this.scrollY > 0)
    if(nav_bar_drop){
      document.querySelector('#navbar').classList.remove('hide')
      header.classList.remove('drop')
      humberger.innerHTML = '_';
    }
  });


  humberger.innerHTML = '_';
  humberger.addEventListener('click', function(){
    humberger.innerHTML = '&times;';
    header.classList.toggle('drop')

    nav_bar_drop = header.classList.value == 'drop' || header.classList.value == 'sticky drop';
    if(nav_bar_drop){
      document.querySelector('#navbar').classList.toggle('hide')
    }else {
      document.querySelector('#navbar').classList.toggle('hide')
      humberger.innerHTML = '_';
      humberger.style.color = 'teal';
    }
  
  });
})(document.querySelector('header'),document.getElementById('humberger'))

