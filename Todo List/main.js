$(document).ready(function(){
const form = document.querySelector('#form_id');
const list_ele = document.querySelector('.task');
const clear = document.querySelector('#reset');

let key = 0;

clear.addEventListener('click', (e) => {
    // $('#form_id :input').val('');
    form.name.value = '';
    form.priority.value = '';
    form.dead_line.value = '';
    form.category.value = '';
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let name = form.name.value;
    let category = form.category.value;
    let priority = form.priority.value;
    let dead_line = form.dead_line.value;
    if (name == '' || category == '' || priority == '' || dead_line == '') {
        alert("Please fill all required fields!");
    }else{
        let color = ''; 
        let logo = '';
       if(priority == 'high'){
        color = 'rgb(247, 157, 172)';
       }else if(priority == 'medium'){
        color = '#fbc097';  
       }else if(priority == 'low'){
        color = '#fbe697';
       }
       if (dead_line < "2022-04-10" ) {
        logo = `<div class="cell logoCell" style="width: 15%">
        <p style="font-size: 22px;">❌</p>
      </div>`;
       }else if (dead_line >= "2022-04-10" &&  dead_line <= "2022-04-12"  ){
        logo = `<div class="cell logoCell" style="width: 15%">
            <p style="font-size: 22px;">⚠️</p>
          </div>`;
       }else{
        logo = `<div class="cell logoCell" style="width: 15%"> </div>`;
       }
      
       let  html = `<div class="todo" style="background-color:${color};">
        ${logo}
        <div class="cell" style="width: 70%; text-align: left;">
            <h3>${name}</h3>
            <h3>${dead_line}</h3>
        </div>
        <div class="cell" style="width: 15%; margin-top:auto;">
            <input class = "is_check" value = "${name}" type="checkbox" style="transform: scale(1.5);vertical-align: bottom;">
        </div>
        </div>`;
        list_ele.innerHTML += html;
        key += 1;
        form.name.value = '';
        form.priority.value = '';
        form.dead_line.value = '';
        form.category.value = '';

    }
  });
});
$('.is_done').click(function (){
    const compl_task = document.querySelector('.completed_task');
    if($(`.is_check`).is(":checked")){
        let today = new Date().toLocaleDateString();
        let task_name = $('input[type="checkbox"]') // get all checkboxes
        .filter(':checked')  // get only checked
        .toArray()
        let html = `<div class="todo" style="background-color: rgb(189, 236, 214);">
        <div class="cell logoCell" style="width: 15%">
            <p style="font-size: 21px;">✔️</p>
        </div>
        <div class="cell" style="width: 70%; text-align: left;">
            <h3>${task_name[0].defaultValue}</h3>
            <h3>${today}</h3>
        </div>
        <div class="cell" style="width: 15%; margin-top:auto;">
        </div>
        </div>`;
        compl_task.innerHTML += html;
    }else{
        alert("Please Select Task First!");
    }
    
});
