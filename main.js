const whiteKeyArray = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'q', 'w', 'e', 'r', 't', 'y', 'u']
const blackKeyArray = ['s', 'd', 'g', 'h', 'j', '2', '3', '5', '6', '7']

document.addEventListener('keydown', e => {  //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = whiteKeyArray.indexOf(key)
  const blackKeyIndex = blackKeyArray.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}