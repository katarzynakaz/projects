.closest or querySelector

props for elements are 
ignotre text nodes
.children
.firstElementChild
.lastElementChild
.previousElelementSibling


props for nodes
give text nodes
el.childNodes
el.parentNode

most cases want elelemnt selectors

removing elements from DOM if created bvia
const p = document.createElement('p')
p.textContent = 'I will be removed'
document.body.appendChild(p)

$0.remove()
elements still exist 
as it exists in js memory and still have access to it