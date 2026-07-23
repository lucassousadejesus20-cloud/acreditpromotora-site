
const toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('.menu');
if(toggle){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});}
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>{menu?.classList.remove('open');document.body.classList.remove('menu-open')}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const cookie=document.querySelector('.cookie');
if(cookie && !localStorage.getItem('acredit-cookie-ok')) cookie.classList.add('show');
document.querySelector('[data-cookie-ok]')?.addEventListener('click',()=>{localStorage.setItem('acredit-cookie-ok','1');cookie.classList.remove('show')});

const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{
 e.preventDefault();
 const d=new FormData(form);
 const subject=encodeURIComponent('Contato pelo site — '+(d.get('nome')||'Cliente'));
 const body=encodeURIComponent(`Nome: ${d.get('nome')}\nTelefone: ${d.get('telefone')}\nPerfil: ${d.get('perfil')}\n\nMensagem:\n${d.get('mensagem')}`);
 window.location.href=`mailto:auditoria@acreditpromotora.com.br?subject=${subject}&body=${body}`;
});}
