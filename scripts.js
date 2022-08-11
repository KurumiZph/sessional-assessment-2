const xhr = new XMLHttpRequest();

const searchValue = document.querySelector('#my-text').value

const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

xhr.open('GET', url)

xhr.onreadystatechange = () => {
    if(xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)

        let template = ''
        for(let i=0; i < response.length; i++) {
            template += `
                <div class="blogs">
                    ${response.userId[i].id[i]}
                </div>
            `
        }

        document.querySelector('#my-container').innerHTML = template
    }
}

xhr.send()