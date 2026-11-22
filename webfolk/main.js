(function () {
    var b = document.querySelector('.burger'), n = document.getElementById('nav');
    b.addEventListener('click', function () { var o = n.classList.toggle('open'); b.setAttribute('aria-expanded', o) });
    document.getElementById('yr').textContent = new Date().getFullYear();
    var f = document.getElementById('cf');
    if (f) {
        f.addEventListener('submit', function (e) {
            e.preventDefault(); var m = document.getElementById('fm'), d = new FormData(f);
            if (!d.get('name') || !d.get('email') || !d.get('msg') || !f.email.validity.valid) { m.style.color = '#b3261e'; m.textContent = 'Please fill in your name, a valid email and a short message.'; return }
            var s = 'New ' + d.get('svc') + ' enquiry from ' + d.get('name');
            var t = 'Name: ' + d.get('name') + '\nEmail: ' + d.get('email') + '\nService: ' + d.get('svc') + '\n\n' + d.get('msg');
            m.style.color = ''; m.textContent = 'Opening your email app to send this message.';
            location.href = 'mailto:webfolk57@gmail.com?subject=' + encodeURIComponent(s) + '&body=' + encodeURIComponent(t)
        })
    }
})();
