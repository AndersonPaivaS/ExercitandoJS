let corRosa = document.querySelector('#rosa')
let corAzul = document.querySelector('#azul')
let corAmarelo = document.querySelector('#amarelo')

let hor = document.querySelector('#horas')
let min = document.querySelector('#minutos')
let seg = document.querySelector('#segundos')


let ButtonMenu = document.querySelector('#menu')

function rosa() {
    document.body.style.background = 'linear-gradient(to bottom, #eaa2fd, #801155)'
}

function azul() {
    document.body.style.background = 'linear-gradient(to bottom, #72B2E4, #92E1E2)'
}

function amarelo() {
    document.body.style.background = 'linear-gradient(to bottom, #E5A663, #FAEE9E)'
}

const relogio = setInterval( function time() {
    dateToday = new Date();
    h = dateToday.getHours();
    m = dateToday.getMinutes();
    s = dateToday.getSeconds();

    if(h <=9) h = `0${h}`
    if(m <=9) m = `0${m}`
    if(s <=9) s = `0${s}`

    hor.textContent = `${h}h`;
    min.textContent = `${m}min`;
    seg.textContent = `${s}seg`; 
})

// CONTADOR DE LIKES /////////////////////////////////////////////

let gostei = document.querySelector('#b-like')
let gostei_respon = document.querySelector('#b-like-respon')
let p_like = document.querySelector('#p-like')
curtidas = 0
let b_like_r = document.querySelector('b-like-r')

function like() {
    gostei.textContent = '+1';
    gostei_respon.textContent = '+1';

    curtidas = curtidas + 1
    
    if(curtidas <= 1) {
        p_like.textContent = `Foi feita ${curtidas} curtida nessa publicação! Será que conseguimos chegar às 20?`;
    } else if(curtidas < 20) {
        p_like.textContent = `Foram feitas ${curtidas} curtidas nessa publicação! Faltam ${20 - curtidas} curtidas para a nossa meta!`;
    } else {
        p_like.textContent = `Foram feitas ${curtidas} curtidas nessa publicação! Meta de 20 curtidas batida!`;
    }
    
    b_like_r.body.style.display = 'flex'
}

// CRONOMETRO /////////////////////////////////////////////

let timer = document.querySelector('#timer')

let h_cro = 0
let m_cro = 0
let s_cro = 0

let formato
let interval

function cronometro() {
    s_cro++
    formato = (h_cro < 10 ? '0'+h_cro : h_cro) + ':' + (m_cro < 10 ? '0'+m_cro : m_cro) + ':' + (s_cro < 10 ? '0'+s_cro : s_cro);
    timer.textContent = formato

    if(s_cro == 60) {
        s_cro = 0

        m_cro ++
        s_cro ++
    }

    if(m_cro == 60) {
        m_cro = 0

        h_cro ++
    }
    
}

function iniciar() {
    interval = setInterval(cronometro, 1000)
}

function parar() {
    clearInterval(interval)
}

function reiniciar() {
    clearInterval(interval);
    h_cro = 0;
    m_cro = 0;
    s_cro = 0;

    formato = '00:00:00'
    timer.textContent = formato
}

// CALCULADORA

/*let teclas = document.querySelector('.num')

function digitar(e) {
    console.log(teclas.value)
} */

