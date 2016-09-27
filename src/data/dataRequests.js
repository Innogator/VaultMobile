export const GetMenuList = () => {
  fetch('http://cwhite-l7.advent.com:5000/api/file/root/children')  
  .then(function(response) {
    return response.json()
  })
}

export const GetFileList = (folderId) => {
  fetch(`http://cwhite-l7.advent.com:5000/api/file/root/${folderId}`)  
  .then(function(response) {
    return response.json()
  })
}