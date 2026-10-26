// ============================================================
// SEÇÃO 1 — CABEÇALHO / MENU
// Responsável: (Thiago)
// ============================================================


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

function irParaSlideManual(index) {
  carrosselManualIndex = index
  carrosselManualTrack.style.transform = `translateX(-${index * 100}%)`
}

carrosselNext.addEventListener('click', () => {
  irParaSlideManual((carrosselManualIndex + 1) % totalSlidesManual)
})

carrosselPrev.addEventListener('click', () => {
  irParaSlideManual((carrosselManualIndex - 1 + totalSlidesManual) % totalSlidesManual)
})

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