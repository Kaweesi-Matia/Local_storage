if(localStorage.getItem("data")==null){
    localStorage.setItem('data',JSON.stringify([]))
}

const arr=JSON.parse(localStorage.getItem('data'))

class Boys{
constructor(kats,pop){
    this.kats=kats;
    this.pop=pop;
}}

const updateLS=()=>{
    localStorage.setItem('data',JSON.stringify(arr))
}

const addStudent=(fig,niv)=>{
    let boy=new Boys(fig,niv);
    arr.push(boy);
    updateLS();
}
let form=document.querySelector('.form')
form.addEventListener('submit',(e)=>
{
e.preventDefault();
const nam=document.querySelector('#nam').value;
const age=document.querySelector('#age').value;
addStudent(nam,age)
clearFields()

}

)
const clearFields=()=>{
    document.querySelector('#nam').value='',
document.querySelector('#age').value=''
}
console.log(arr)

// const der =()=> 'hello World'