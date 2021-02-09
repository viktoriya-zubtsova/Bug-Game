let loading = document.getElementById('loading');
setTimeout(() => loading.classList.add('off'), 5000);

let url = window.location.search;
function getName(url) {
	let getUrl = url.split('=');
	let name = getUrl[1];
	if(name == null) {
	name = 'viktoriya-zubtsova';
	}
	return name;
}

let date = new Date();
let userUrl = `https://api.github.com/users/${getName(url)}`;

let getDate = new Promise((resolve, reject) => {
	setTimeout(() => date ? resolve(date) : reject('Дата не определена'), 2000)
});
let getUrl = new Promise((resolve, reject) => {
	setTimeout(() => userUrl ? resolve(userUrl) : reject('Ссылка не найдена'), 5000)
});

Promise.all([getUrl, getDate])
	.then(([userUrl, date]) => fetch(userUrl))
  .then(res => res.json())
  .then(json => {
    let avatar = document.createElement('img');
    if(json.avatar_url != null) {
      avatar.src = json.avatar_url;
    } else {
      document.body.innerHTML= ('Аватар отсутствует<br>');
    }
    document.body.prepend(avatar);

    let link = document.createElement('a');
    link.href = json.html_url;
    if(json.login != null) {
      link.innerHTML = '<br><br>' + json.login + '<br>';
    } else {
      link.innerHTML = 'Нет информации об имени<br>';
    }
    document.body.append(link);

		let bio = document.createElement('p');
    if(json.bio != null) {
      bio.innerHTML= json.bio +'<br>';
    } else {
      bio.innerHTML= ('Нет информации о биографии<br>');
    }
		document.body.append(bio);
    document.body.append(date);
    })
  .catch(err => document.body.innerHTML = ('Информация о пользователе недоступна'));
