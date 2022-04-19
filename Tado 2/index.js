
    const form_data = document.querySelector('#add_task');
    const list_ele = document.querySelector('.task');
    const clear = document.getElementById('#reset');
    // add task
    form_data.addEventListener('submit', (e) =>{
        e.preventDefault();
        if (form_data.task_name.value != '' && form_data.category.value != '' && form_data.priority.value != '' && form_data.date.value != '')
        {
            let type = ''; 
            let logo = '';
           if(form_data.priority.value == 1){
            type = 'rgb(247, 157, 172)';
           }else if(form_data.priority.value == 2){
            type = '#fbc097';  
           }else if(form_data.priority.value == 3){
            type = '#fbe697';
           }
           if ( form_data.date.value < "2022-04-10" ) {
            logo = `<div class="cell logoCell" style="width: 15%;background-color:${type};">
            <p style="font-size: 22px;">❌</p>
          </div>`;
           }else if ( form_data.date.value >= "2022-04-10" &&   form_data.date.value <= "2022-04-12"  ){
            logo = `<div class="cell logoCell" style="width: 15%;background-color:${type};">
                <p style="font-size: 22px;">⚠️</p>
              </div>`;
           }else{
            logo = `<div class="cell logoCell" style="width: 15%;background-color:${type};"> </div>`;
           }
          
           let  html = `<div class="todo" style="background-color:${type};">
            ${logo}
            <div class="cell" style="width: 70%; text-align: left; background-color:${type};">
                <h3>${form_data.task_name.value}</h3>
                <h3>${form_data.date.value}</h3>
            </div>
            <div class="cell" style="width: 15%; margin-top:auto; background-color:${type};">
                <input class = "is_check" value = "${form_data.task_name.value}" type="checkbox" style="transform_data: scale(1.5);vertical-align: bottom;">
            </div>
            </div>`;
            list_ele.innerHTML += html;
            form_data.task_name.value = '';
            form_data.priority.value = '';
            form_data.date.value = '';
            form_data.category.value = '';
        }else{
            alert("Please Enter Data First!!");
        }
    });
    $('#done').click(function (){
        const compl_task = document.querySelector('#task_completed');
        if($(`.is_check`).is(":checked")){
            let current_date = new Date().toLocaleDateString();
            let name = $('input[type="checkbox"]').filter(':checked').toArray();
            let html = `<div class="todo" style="background-color: rgb(189, 236, 214);">
            <div class="cell logoCell" style="width: 15%; background-color: rgb(189, 236, 214);">
                <p style="font-size: 21px;">✔️</p>
            </div>
            <div class="cell" style="width: 70%; text-align: left; background-color: rgb(189, 236, 214);">
                <h3>${name[0].defaultValue}</h3>
                <h3>${current_date}</h3>
            </div>
            <div class="cell" style="width: 15%; margin-top:auto; background-color: rgb(189, 236, 214);">
            </div>
            </div>`;
            compl_task.innerHTML += html;
        }else{
            alert("Please Select Task First!");
        }
        
    });

    $('#clear').click(function(){
        form_data.task_name.value = '';
        form_data.priority.value = '';
        form_data.date.value = '';
        form_data.category.value = '';
    });
    