function doFetch(name) {
  fetch('https://api.github.com/users/' + name)
  .then(res => res.json())
  .then(json => {
    let avatar = document.createElement('img');
    if(json.avatar_url != null) {
      avatar.src = json.avatar_url;
    } else {
      document.body.innerHTML= ('Аватар отсутствует<br>');
    }
    let link = document.createElement('a');
    link.href = json.html_url;
    if(json.login != null) {
      link.innerHTML = json.login + '<br>';
    } else {
      link.innerHTML = 'Нет информации об имени';
    }
    if(json.bio != null) {
      document.body.innerHTML= json.bio;
    } else {
      document.body.innerHTML= ('Нет информации о биографии<br>');
    }
    document.body.append(link);
    document.body.append(avatar);
    })
  .catch(err => document.body.innerHTML = ('Информация о пользователе недоступна'));
}
let userName = 'viktoriya-zubtsova';
doFetch(userName);
