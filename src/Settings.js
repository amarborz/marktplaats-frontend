const path = 'https://marktplaats.azurewebsites.net/'
const userId = localStorage.getItem('id')

console.log('UserId: ', userId)
const settings = { path, userId }
export default settings
