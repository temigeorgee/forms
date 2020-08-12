


const todos = [];

function newElement() {

    // getthe value of input
    let input = document.getElementById('myInput').value;
    
    // check if input is empty
    if (input == ''){
        alert('Please enter a To Do')
    } else {
        // else continue
        todos.push(input)
        alert(todos);
    }

    var html = 
}


// function newElement() {
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("myInput").value;
//     var text = document.createTextNode(inputValue);
//     li.appendChild(text);
//     if (inputValue === '') {
//       alert("You must write something!");
//     } else {
//       document.getElementById("myList").appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
  
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//       }
//     }
//   }
  