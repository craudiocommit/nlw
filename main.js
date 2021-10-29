const LinksSocialMedia = {
        github: 'craudiocommit', // O Github está fora do bloco ul.
        youtube: 'branaut',
        facebook: 'branaut',
        instagram: 'branaut_',
        twitter: 'branaut_'
    }
    // Essa função serve pra mudar o direcionamento dos links sem precisar o valor dos href acima, ou seja mudando os valores da const LinksSocialMedia.
function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com.br/${LinksSocialMedia[social]}`

        //alert(li.children[0].href)  - O alert nesse caso foi usado para testar a chamada da função
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

getGitHubProfileInfos()