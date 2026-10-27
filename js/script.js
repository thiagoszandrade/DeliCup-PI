// ============================================================
// SEÇÃO 1 — CABEÇALHO / MENU
// Responsável: (Thiago)
// ============================================================
const btnToggle = document.getElementById('menu-btnToggle')
const menuNavegacao = document.getElementById('menuNavegacao')

btnToggle.addEventListener('click', () => {
    const aberto = menuNavegacao.classList.toggle('aberto')
    btnToggle.setAttribute('arial-expanded', aberto)
    btnToggle.textContent = aberto ? '✕' : '☰'
})

// ============================================================
// SEÇÃO 2 — HOME
// Responsável: (Vitor Moret)
// ============================================================


// ============================================================
// SEÇÃO 3 — SOBRE A DELICUP
// Responsável: (Vitor Ferrer)
// ============================================================
const carrosselManualTrack = document.getElementById('carrosselManualTrack')
const carrosselPrev = document.getElementById('carrosselPrev')
const carrosselNext = document.getElementById('carrosselNext')

let carrosselManualIndex = 0
const totalSlidesManual = 3

const TEMPO_AUTO = 3000
const TEMPO_RETOMADA = 6000

let intervaloAuto = null
let timeoutRetomada = null

function irParaSlideManual(index) {
  carrosselManualIndex = index
  carrosselManualTrack.style.transform = `translateX(-${index * 33.33334}%)`
}

function iniciarAuto() {
  clearInterval(intervaloAuto)
  intervaloAuto = setInterval(() => {
    irParaSlideManual((carrosselManualIndex + 1) % totalSlidesManual)
  }, TEMPO_AUTO)
}

function pausarEVoltarDepois() {
  clearInterval(intervaloAuto)
  clearTimeout(timeoutRetomada)
  timeoutRetomada = setTimeout(iniciarAuto, TEMPO_RETOMADA)
}

carrosselNext.addEventListener('click', () => {
  irParaSlideManual((carrosselManualIndex + 1) % totalSlidesManual)
  pausarEVoltarDepois()
})

carrosselPrev.addEventListener('click', () => {
  irParaSlideManual((carrosselManualIndex - 1 + totalSlidesManual) % totalSlidesManual)
  pausarEVoltarDepois()
})

iniciarAuto()
// ============================================================
// SEÇÃO 4 — PRODUTOS
// Responsável: (Vitória)
// ============================================================


// ============================================================
// SEÇÃO 5 — DIFERENCIAIS
// Responsável: (Fernando)
// ============================================================


// ============================================================
// SEÇÃO 6 — NOSSA HISTÓRIA
// Responsável: (João Morais)
// ============================================================


// ============================================================
// SEÇÃO 7 — MISSÃO, VISÃO E VALORES
// Responsável: (João Paulo)
// ============================================================


// ============================================================
// SEÇÃO 8 — EQUIPE
// Responsável: (Cauã)
// ============================================================


// ============================================================
// SEÇÃO 9 — CONTATO / LOCALIZAÇÃO
// Responsável: (Thiago)
// ============================================================


// ============================================================
// SEÇÃO 10 — RODAPÉ (FOOTER)
// Responsável: (Thiago))
// ============================================================