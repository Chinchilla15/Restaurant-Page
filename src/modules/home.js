export default function initLoad(){
    const content = document.getElementById('content')

    const header = document.createElement('header')
    const title = document.createElement('h1')
    const description = document.createElement('p')
    const main = document.createElement('div')

    title.innerHTML = "Nitro Coffee"
    description.innerHTML = "Coffee Shop and Co-Working Space"
    main.classList.add("main")
    
    header.appendChild(title);
    header.appendChild(description);

    content.appendChild(header)
    content.appendChild(main)
}