let list = document.getElementById('list');
let li = document.getElementById('list').children;
let id = document.getElementById('id');
let firstname = document.getElementById('firstname');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');
let input = document.querySelectorAll('.data');
let button = document.querySelectorAll('.buttons');
let idArr = [];
let isId=true;

id.addEventListener('change',validate);
function validate(){      
    let regex= /\D/g;
    if(regex.test(this.value)){
        id.value='';
        alert('Please, enter only digits!!!')
    }
}

age.addEventListener('change',validate);
function validate(){     
    let regex= /\D/g;
    if(regex.test(this.value)){
        age.value='';
        alert('Please, enter only digits!!!')
    }
}

create.addEventListener('click', makeLi);
function makeLi() {
    newId = id.value;
    for (i = 0; i < idArr.length; i++) {
        if (newId == idArr[i]) {
            alert('This id already exist!');
            for (i = 0; i < input.length; i++) {
                input[0].value = "";

            }
        };
    };

    if (id.value == '' || firstname.value == '' || lastname.value == '' || age.value == '') {
        alert('Some fields are empty!!!');
         } else {
        idArr.push(input[0].value);
        let newLi = document.createElement('li');
        for (i = 0; i < input.length; i++) {
            newLi.innerHTML += `<div>${input[i].value}</div>`;
            input[i].value = "";
            list.append(newLi);
        }
    }
}
update.addEventListener('click', updateLi);
function updateLi() {
    if (id.value == '' || firstname.value == '' || lastname.value == '' || age.value == '') {
        alert('Some fields are empty!!!');
    } else {
        newId = id.value;
        isId = true;
        for (i = 0; i < idArr.length; i++) {
            if (newId == idArr[i]) {
                isId = false;
                let repeat = idArr.indexOf(newId);
                li[repeat].innerHTML = '';
                for (i = 0; i < input.length; i++) {
                    li[repeat].innerHTML += `<div>${input[i].value}</div>`;
                    input[i].value = "";
                }
            }
        }
    }
    if (isId == true) {
        alert('This id is absent');
    }
    isId = false;

}
del.addEventListener('click', deleteLi);
function deleteLi() {
    newId = id.value;
    isId = false;
    for (i = 0; i < idArr.length; i++) {
        if (newId == idArr[i]) {
            let repeat = idArr.indexOf(newId);
            id.value = "";
            li[repeat].remove();
            idArr.splice(repeat,1);
            isId=true;
        }
    }
    if (isId == false) {
        alert('This id is absent');
        
    }
    isId = true;
}
