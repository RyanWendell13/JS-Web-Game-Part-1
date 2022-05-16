function newImage(left, bottom, link){
    let image = document.createElement('img')
    image.src = link
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    return image
}

function newItem(left, bottom, link){
    let item = newImage(left,bottom,link)
    item.addEventListener('click', function(){
        item.remove()
    })

}

newImage('100px','100px', 'assets/green-character.gif')
newImage('450px','200px', 'assets/pine-tree.png')
newImage('200px','300px','assets/tree.png')
newImage('350px','100px', 'assets/pillar.png')
newImage('150px','200px', 'assets/crate.png')
newImage('500px','425px', 'assets/well.png')

newItem('500px','405px', 'assets/sword.png')
newItem('165px', '185px', 'assets/sheild.png')
newItem('600px', '100px', 'assets/staff.png')


