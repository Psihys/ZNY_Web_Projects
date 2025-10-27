const html = document.documentElement
const switchThemeButton = document.getElementById('checkbox')

const setThema = () => {
  if (!switchThemeButton.checked) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const theme = localStorage.getItem('theme')
if (theme === 'dark') {
  switchThemeButton.checked = false
  html.classList.add('dark')
} else {
  switchThemeButton.checked = true
  html.classList.remove('dark')
}

switchThemeButton.addEventListener('change', () => setThema())
