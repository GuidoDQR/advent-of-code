let table = document.getElementById("table");
let resultado = document.getElementById("resultado");
let elf = [[1000,2000,3000],[4000],[5000,6000],[7000,8000,9000],[10000]];

table.style.width = '100px';
table.style.border = '1px solid black';

function createTable(){
    let elfo;
    let calorias = 0;
    let total;
    let tr;
    let td;
    for(let i=0; i<elf.length;i++){    
        total = 0;  
        for(let j=0; j<elf[i].length;j++){
            tr = table.insertRow();
            td = tr.insertCell();
            td.style.border = '1px solid black';
            td.appendChild(document.createTextNode(i.toString()));
            td = tr.insertCell();
            td.style.border = '1px solid black';
            td.appendChild(document.createTextNode(elf[i][j].toString()));
            
            total += elf[i][j];
            td = tr.insertCell();
            td.style.border = '1px solid black';
            if(j+1<elf[i].length){
                td.appendChild(document.createTextNode("----"));
            }else{
                if(calorias < total){
                    elfo = i;
                    calorias = total;
                }
                td.appendChild(document.createTextNode(total.toString()));
            }
            
        }
    }
    resultado.innerText = "El elfo con mayor comida es el "+(elfo+1)+" y tiene " + calorias + " calorias";
}

createTable();