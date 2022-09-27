const submit_btn = document.getElementById('submit_btn');
const rating_mode = document.getElementById('rating_mode');
const conclusion_mode = document.getElementById('conclusion_mode');
const rating_h2_elm = document.querySelectorAll('h2')[0];
const conclusion_h2_elm = document.querySelectorAll('h2')[1];
let input_radios = document.querySelectorAll(`input[type="radio"]`);
let input_labels = document.querySelectorAll('label');
let rates;
let elm;
let count_i = rating_h2_elm.innerText.length - 1;
let count_ii = rating_h2_elm.innerText.length - 1;
let count_iii = conclusion_h2_elm.innerText.length - 1;
let count_iv = conclusion_h2_elm.innerText.length - 1;
let rating_h2_text;
let rating_h2_array = [];
let conclusion_h2_text;
let conclusion_h2_array = [];

while(count_i>=0) {
    rating_h2_array.push(rating_h2_elm.innerText[count_i]);
    count_i--;
}

while(count_iii>=0) {
    conclusion_h2_array.push(conclusion_h2_elm.innerText[count_iii]);
    count_iii--;
}

rate_pop();

submit_btn.addEventListener('click', function(e) {
    e.preventDefault();
    input_radios.forEach(input_radio => input_radio.checked === true ? input_radio.classList.add('rate_selected') : input_radio.classList.remove('rate_selected'));
    
    if(document.querySelectorAll('.rate_selected').length<=0) {
        rate_pop();
    } 
    else {
        rates = document.querySelectorAll('.rate_selected').length;
        rating_mode.style.display = "none";
        conclusion_mode.style.display = "flex";
        document.querySelector('h4').children[0].innerHTML=rates;

        setTimeout(() => {
            document.querySelector('h4').children[0].innerHTML=0;
            conclusion_mode.style.display = "none";
            rating_mode.style.display = "flex";
            rate_pop();
        }, 5000);
    }
});

input_radios.forEach(input_radio => 
    input_radio.addEventListener('click', function() {
    
        if(input_radio.classList.contains('rate_selected')) {
            toggle_rates(input_radio.id,false);
        }
        else {
            toggle_rates(input_radio.id,true);
        }
    })
);

function rate_pop() {
    input_radios.forEach(input_radio => input_radio.checked = false);
    input_labels.forEach(input_label => input_label.classList.add('pop'));
    setTimeout(() => { input_labels.forEach(input_label => input_label.classList.remove('pop')); }, 2500);

    rates_undone();
}

function toggle_rates(input_id,sts) {
    input_radios.forEach(input_radio => input_radio.checked = true);

    if(sts == true) {
        switch(input_id) {
            case "rate_1_otof_5" :
                input_radios[0].checked = true;
                input_radios[0].classList.add('rate_selected');
                input_radios[1].checked = false;
                input_radios[1].classList.remove('rate_selected');
                input_radios[2].checked = false;
                input_radios[2].classList.remove('rate_selected');
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_2_otof_5" :
                input_radios[1].checked = true;
                input_radios[1].classList.add('rate_selected');
                input_radios[2].checked = false;
                input_radios[2].classList.remove('rate_selected');
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_3_otof_5" :
                input_radios[2].checked = true;
                input_radios[2].classList.add('rate_selected');
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_4_otof_5" :
                input_radios[3].checked = true;
                input_radios[3].classList.add('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_5_otof_5" :
                input_radios[4].checked = true;
                input_radios[4].classList.add('rate_selected');
            break;
        }
    }
    else {
        switch(input_id) {
            case "rate_1_otof_5" :
                input_radios[0].checked = false;
                input_radios[0].classList.remove('rate_selected');
                input_radios[1].checked = false;
                input_radios[1].classList.remove('rate_selected');
                input_radios[2].checked = false;
                input_radios[2].classList.remove('rate_selected');
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_2_otof_5" :
                input_radios[1].checked = false;
                input_radios[1].classList.remove('rate_selected');
                input_radios[2].checked = false;
                input_radios[2].classList.remove('rate_selected');
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_3_otof_5" :
                input_radios[2].checked = false;
                input_radios[2].classList.remove('rate_selected');
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_4_otof_5" :
                input_radios[3].checked = false;
                input_radios[3].classList.remove('rate_selected');
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
            case "rate_5_otof_5" :
                input_radios[4].checked = false;
                input_radios[4].classList.remove('rate_selected');
            break;
        }
    }
}

function rates_undone() {
    rating_h2_elm.innerHTML = '';
    conclusion_h2_elm.innerHTML = '';
    let cls = '';

    while(count_ii>=0) {
        count_ii%2==0 ? cls="even" : cls="odd";
        rating_h2_elm.innerHTML = rating_h2_elm.innerHTML + `<span class='title_spans ${cls}'>${rating_h2_array[count_ii]}</span>`;
        count_ii--;
    }

    while(count_iv>=0) {
        count_iv%2==0 ? cls="even" : cls="odd";
        conclusion_h2_elm.innerHTML = conclusion_h2_elm.innerHTML + `<span class='title_spans ${cls}'>${conclusion_h2_array[count_iv]}</span>`;
        count_iv--;
    }
    
    count_i = rating_h2_elm.innerText.length - 1;
    count_ii = rating_h2_elm.innerText.length - 1;
    count_iii = conclusion_h2_elm.innerText.length - 1;
    count_iv = conclusion_h2_elm.innerText.length - 1;

    if(!document.querySelectorAll('title_spans').length<=0) {
        let spns = document.querySelectorAll('title_spans');
        spns.forEach(function(spn) {
            if(spn.classList.contains('odd')) { spn.classList.remove('odd'); setTimeout(() => { spn.classList.add('even'); }, 500); }
            else { spn.classList.remove('even'); setTimeout(() => { spn.classList.add('odd'); }, 500); }
        });
        
        setTimeout(() => {
            rating_h2_elm.innerHTML = rating_h2_elm.innerText;
            conclusion_h2_elm.innerHTML = conclusion_h2_elm.innerText;
        }, 2500);
    }    
}
