fever = document.querySelectorAll('#fever')
fever.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        fever.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index == 0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
cough = document.querySelectorAll('#cough')
cough.forEach((bathroom_obj,index)=>{
    
    bathroom_obj.addEventListener('click',()=>{
        
        cough.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index ==0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
breathing = document.querySelectorAll('#breathing')
breathing.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        breathing.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index ==0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
throat = document.querySelectorAll('#throat')
throat.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        throat.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index ==0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
pains = document.querySelectorAll('#pains')
pains.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        pains.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index ==0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
nose = document.querySelectorAll('#nose')
nose.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        nose.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index ==0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
diahrrehea = document.querySelectorAll('#diahrrehea')
diahrrehea.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        diahrrehea.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index ==0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
smell = document.querySelectorAll('#smell')
smell.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        smell.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index == 0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})
tiredness = document.querySelectorAll('#tiredness')
tiredness.forEach((bathroom_obj,index)=>{
    bathroom_obj.addEventListener('click',()=>{
        tiredness.forEach((temp_bathroom)=>{temp_bathroom.classList.remove('yes','no')})
        if(index == 0)
        bathroom_obj.classList.add('yes')
        else 
        bathroom_obj.classList.add('no')
    })
})

let get_result_list = function()
{
    let lst=[]
    error = document.getElementById('error_message')
    error.textContent=''
    fever_radio = document.querySelectorAll('#fever_radio')
    tiredness_radio = document.querySelectorAll('#tiredness_radio')
    cough_radio = document.querySelectorAll('#cough_radio')
    breathing_radio = document.querySelectorAll('#breathing_radio')
    throat_radio = document.querySelectorAll('#throat_radio')
    pains_radio = document.querySelectorAll('#pains_radio')
    nose_radio = document.querySelectorAll('#nose_radio')
    diahrrehea_radio = document.querySelectorAll('#diahrrehea_radio')
    smell_radio = document.querySelectorAll('#smell_radio')
    let cnt=0
    fever_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    tiredness_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    cough_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    breathing_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    throat_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    pains_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    nose_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    diahrrehea_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    smell_radio.forEach((item,index)=>
    {
        if(item.checked == true)
        {
            if(index == 0)
                lst.push(1)
            else
                lst.push(0)
            cnt++
        }
    })
    if(cnt != 9)
    {
        error.textContent='Please answer all questions!'
        return []
    }
    return lst
}
function detect_covid()
{
    let lst = get_result_list()
    if(lst.length==0) return
    url ='http://127.0.0.1:5000/fetch_results'
    data_dic={
        fever:lst[0],
        tiredness:lst[1],
        dry_cough:lst[2],
        difficulty_in_breathing:lst[3],
        sore_throat:lst[4],
        body_pains:lst[5],
        runny_nose:lst[6],
        diarrhea:lst[7],
        loss_of_smell:lst[8]
    }
    document.getElementById('change').addEventListener('click',()=>{document.getElementById('result_panel').style.display='none'})
    $.post(url,data_dic,function(data,status)
    {
        let vp = document.getElementById('result_panel')
        vp.style.display="block"
        vp.classList.remove('alert-success','alert-danger')
        if(data.covid_19 ==0)
            vp.classList.add("alert-success")
        else
            vp.classList.add("alert-danger")
        document.getElementById('result_label1').textContent='Percentage of covid-19 disease :'
        let rv1=document.getElementById('result_value1').textContent=`${data.covid_19_present_proba}%`
        let rl2=document.getElementById('result_label2').textContent='Percentage of Not covid-19 disease :'
        let rv2=document.getElementById('result_value2').textContent=`${data.covid_19_not_present_proba}%`
        let final=''
        if(data.covid_19==1)
            final='You Have Higher chances of infected by covid! so go for government covid 19 testing.'
        else
            final='You Are Safe! but Make sure to take proper precausions.'
        document.getElementById('final_statement').textContent=final
    })
}