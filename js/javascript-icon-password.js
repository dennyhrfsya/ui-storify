(function() {
var input = document.getElementById('password'),
        icon = document.getElementById('icon-login'),
        myImage = document.querySelector('#icon-login');

       icon.onclick = function () {

         if(input.className == 'form-password input-d') {
            input.setAttribute('type', 'text');
            myImage.setAttribute ('src', 'images/eye-slash.svg');
            input.className = 'form-password-show css';

           } else {
              input.setAttribute('type', 'password');
              myImage.setAttribute ('src', 'images/eye.svg');
              input.className = 'form-password input-d';

        }
       }
  })();