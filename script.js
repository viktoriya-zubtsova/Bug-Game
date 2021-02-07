function doFetch(link) {
  fetch(link)
  .then(res => res.json())
  .then(json => {
    let avatar = document.createElement('img');
    if(json.avatar_url != null) {
      avatar.src = json.avatar_url;
    } else {
      document.body.innerHTML= ('Аватар отсутствует<br>');
    }
    let name = document.createElement('a');
    name.href = json.html_url;
    if(json.login != null) {
      name.innerHTML = json.login + '<br>';
    } else {
      name.innerHTML = 'Нет информации об имени';
    }
    if(json.bio != null) {
      document.body.innerHTML= json.bio;
    } else {
      document.body.innerHTML= ('Нет информации о биографии<br>');
    }
    document.body.append(name);
    document.body.append(avatar);
    })
  .catch(err => document.body.innerHTML = ('Информация о пользователе недоступна'));
}
doFetch('https://api.github.com/users/viktoriya-zubtsova');
