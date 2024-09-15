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
         <span>$(inputtask.value)</span>
         <button id="delbtn"><i class="fa-solid fa-trash" style="color: #eb190a;"></i></button>
         </div>
        `
    }
    let alltasks=document.getElementById('delbtn')
    
})