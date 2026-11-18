import { Toast, Tooltip } from './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const toastElement = document.getElementById('liveToast')
const toastMessage = document.getElementById('toastMessage')
const toast = Toast.getOrCreateInstance(toastElement)

document.getElementById('liveToastBtn')?.addEventListener('click', () => {
  toastMessage.textContent = 'The Bootstrap toast plugin is working.'
  toast.show()
})

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => {
  Tooltip.getOrCreateInstance(element)
})

document.getElementById('themeSwitch')?.addEventListener('change', event => {
  document.documentElement.setAttribute('data-bs-theme', event.currentTarget.checked ? 'dark' : 'light')
})

document.getElementById('demoForm')?.addEventListener('submit', event => {
  event.preventDefault()
  toastMessage.textContent = 'Demo form submitted successfully. No information was sent.'
  toast.show()
})
