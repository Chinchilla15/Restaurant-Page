export default function initLoad(){
    const content = document.getElementById('content')

    const header = document.createElement('header')
    const title = document.createElement('h1')
    const description = document.createElement('p')

    title.innerHTML = "Coffe Shop"
    description.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam saepe ad reprehenderit voluptates amet alias in at quo provident sint laboriosam libero, ea debitis temporibus officia iure accusamus, cum iste!"

    header.appendChild(title);
    header.appendChild(description);

    content.appendChild(header)
}