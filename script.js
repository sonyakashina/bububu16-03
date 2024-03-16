let add_btn = document.querySelector("#add_item_btn");
add_btn.addEventListener("click", () => {
    let new_text = document.querySelector("#add_item_name").value; 
    document.querySelector("#add_item_name").value = ""; 

    let item_list = document.querySelector("#item_list"); 

    let new_item = document.createElement("div");
    new_item.setAttribute("class", "item");

    let item_text = document.createElement("p"); 
    item_text.setAttribute("class", "item_text"); 
    console.log(new_text);
    item_text.innerHTML = new_text; 

    let item_btn = document.createElement("button"); 
    item_btn.setAttribute("id", "item_btn"); 
    item_btn.innerHTML = "Удалить";

    new_item.appendChild(item_text); 
    new_item.appendChild(item_btn);
    item_list.appendChild(new_item);
  
    item_btn.addEventListener("click", () => {
        let parent = item_btn.parentNode;
        parent.parentNode.removeChild(parent);
    });
});