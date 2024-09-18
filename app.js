let inputtask=document.getElementById('inputtask');
let tasklist=document.getElementById('tasklist');

let btn=document.getElementById('btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputtask.value==''){
        alert('Enter a task details')
    }
    else{
        tasklist.innerHTML=tasklist.innerHTML+`
         <div id='task'>
         <span>${inputtask.value}</span>
         <button id="delbtn"><i class="fa-solid fa-trash" style="color: #050505;"></i></button>
         </div>
        `
    }
    let alltasks=document.querySelectorAll('#delbtn')
     for(i=0;i<alltasks.length;i++){
        alltasks[i].onclick=function(){
            this.parentNode.remove()
        }
     }
     inputtask.value=''
})