const path = 'https://marktplaatsbackend.azurewebsites.net/'
const userId = localStorage.getItem("id")

console.log("UserId: ", userId)
const settings = {path, userId}
export default settings

