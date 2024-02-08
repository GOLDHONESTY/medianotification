const sideNav = document.querySelector('.side-nav');
const drownDownBtn = document.querySelector('.btn-drop');
const arrUp = document.querySelector('.arr-up');
const arrDown = document.querySelector('.arr-down');

drownDownBtn.addEventListener('click', function() {
    if (sideNav.classList.contains('active')){
        sideNav.classList.remove('active');
        arrUp.style.display = 'none';
        arrDown.style.display = 'block';
        
    }else{
        sideNav.classList.add('active');
        arrUp.style.display = 'block';
        arrDown.style.display = 'none';
    }

});