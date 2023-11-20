const HeaderLoginInButton = document.querySelector('.login-in__btn');
const HeaderLoginInWrapper = document.querySelector('.login-in');
HeaderLoginInButton.addEventListener('mouseover', function() {
	HeaderLoginInButton.style.color = '#9802B1';
	HeaderLoginInWrapper.style.boxShadow = '3px 3px 5px rgba(252, 198, 247), -3px -3px 5px rgba(153, 94, 246)';
})

HeaderLoginInButton.addEventListener('mouseout', function() {
	HeaderLoginInButton.style.color = '';
	HeaderLoginInWrapper.style.boxShadow = '';

})

console.dir(HeaderLoginInButton.style)