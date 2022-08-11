const xhr = new XMLHttpRequest();

const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

xhr.open('GET', url)

xhr.onreadystatechange = () => {
    if(xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)

        let m=9,y=2021
        let template = ''
        for(let i=0; i < response.length; i++) {
            if(i % 10 ==0){
                template +=`<h2 class="post-date">Posted: ${m}/${y}</h2>`
                m+=1
                if(m>12){
                    m=m-12
                    y+=1
                }
            }
                template += 
                    `
                    <div class="blog-items" style="width: 100%; padding: 12px; margin: 1em;">
                    <h3 class="blog-title">${response[i].title}</h3>
                    <p class="blog-body">${response[i].body}</p>
                    <a href="#" class="blog-rm">[Read More]</a>
                    </div>
                    `
            }
            document.querySelector('#my-container').innerHTML = template
        }
    }
xhr.send()
