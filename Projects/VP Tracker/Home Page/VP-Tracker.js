var coll = document.getElementsByClassName("collapsible");
var i;

for(i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const select_elem = document.createElement('select');
langArray.forEach(d=> select_elem.add(new Option(d.display,d.value)));