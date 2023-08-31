function date(){
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
const dateDisplayElement = document.getElementById('dateDisplay');
dateDisplayElement.textContent = formattedDate;
}
date();


window.addEventListener('load',() => {
    const input1 = document.getElementById("input1");
    const addbtn = document.getElementById("addbtn");
    const rec = document.getElementById("rec");
    const enterd = document.getElementById("dateinput");
    const selcat = document.getElementById("selectcat");
    const searchInput = document.querySelector(".inputsearch");
    const searchBtn = document.querySelector(".searchbtn");

    addbtn.addEventListener('click',()=>{
        const task = input1.value;
        const enterdate = enterd.value;
        const selecat = selcat.value;
        if(!task){
            alert("please add some task");
            return;
        }
        const main2 = document.createElement("div");
        main2.classList.add("main2");
        
        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.addEventListener('click' ,()=>{
            checkbox.classList.toggle("tickbox");
        })
        

        const outputbox = document.createElement("input");
        outputbox.classList.add("outputbox");
        outputbox.type ="text";
        outputbox.value = task;
        outputbox.setAttribute("readonly","readonly");


        const editbtn = document.createElement("button");
        editbtn.classList.add("editbtn");
        editbtn.innerHTML="Edit";

        const dateh = document.createElement("h4");
        dateh.classList.add("outdate");
        dateh.innerHTML=enterdate;

        const cath = document.createElement("h4");
        cath.classList.add("outca");
        cath.innerHTML=selecat;


        const delbtn = document.createElement("button");
        delbtn.classList.add("addbtn");
        delbtn.innerHTML="Delete";


        main2.appendChild(checkbox);
        main2.appendChild(outputbox);
        main2.appendChild(editbtn);
        main2.appendChild(dateh);
        main2.appendChild(cath);
        main2.appendChild(delbtn);
        rec.appendChild(main2);
        input1.value = "";

        searchBtn.addEventListener('click', () => {
            const searchText = searchInput.value.toLowerCase();
    
            const tasks = document.querySelectorAll('.main2'); 
            tasks.forEach(task => {
                const taskText = task.querySelector('.outputbox').value.toLowerCase();
    
                if (taskText.includes(searchText)) {
                    task.style.display = 'flex'; 
                } else {
                    task.style.display = 'none'; 
                }
               
            }); 
        });

        editbtn.addEventListener('click', () =>{
            if(editbtn.innerText.toLocaleLowerCase() == "edit"){
                outputbox.removeAttribute("readonly");
                outputbox.focus();
                editbtn.innerText="Save";
            }
            else{
                outputbox.setAttribute("readonly","readonly");
                editbtn.innerText="Edit";
            }

        });
        delbtn.addEventListener('click',()=>{
            rec.removeChild(main2);
        })
        
    });
});
