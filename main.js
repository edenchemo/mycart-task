const xhr = new XMLHttpRequest();
const url = 'http://gocreate.fun/recode/getcartitems.php'

xhr.responseType = 'json'
xhr.onreadystatechange = () => {

 if (xhr.readyState === XMLHttpRequest.DONE) {

 }
};

xhr.open('GET', url);
xhr.send();
