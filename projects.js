// call github api

let get = function(url, responseType) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      promise.resolve(xhr.response);
    });
    xhr.addEventListener('error', () => {
      promise.reject();
    });
    if(responseType) {
      xhr.responseType = responseType;
    }
    xhr.open('get', url);
    xhr.send();
  });
  return promise;
}

module.exports.fetchProjects = function(render) {
  get('https://api.github.com/users/Objelisks/repos', 'json')
    .then((data) => {
      render(data);
    })
    .catch(() => {
      console.log('github must be down, because my code is flawless');
    });
}
