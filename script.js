const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

function getNewItem() {
    let newItem = document.getElementById('item').value;
  
    document.getElementById("item").value = "";

    const itemLi = document.createElement('li');
    const itemTxt = document.createElement('span');
    const itemBtn = document.createElement('button');
    
    itemLi.classList.add('item-list');
    itemTxt.classList.add('item-text');
    itemBtn.classList.add('item-btn');

    itemTxt.textContent = newItem;
    itemBtn.textContent = 'Delete';
    
    itemBtn.setAttribute(
        'style', 'font-size:14px; color: lightgray; background-color: #333333'
    );

    function removeItem() {
        itemLi.remove();
    }
    
    itemBtn.addEventListener('click', removeItem);
    
    itemLi.appendChild(itemTxt);
    itemLi.appendChild(itemBtn);
    list.appendChild(itemLi);
    
    document.getElementById("item").focus();
}

btn.addEventListener('click', getNewItem);

