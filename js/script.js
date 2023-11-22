
const cell = document.querySelector(".cell")

    for (let box=1; box<=100; box++) {
        let text_cell
        if(box%15 == 0){
            text_cell = `<div class="bg-danger box d-flex justify-content-center align-items-center" >FizzBuzz</div>`;
             cell.innerHTML += text_cell}
             else if(box%5 == 0){
                text_cell = `<div class="box d-flex justify-content-center align-items-center bg-warning " >Buzz</div>`;
                cell.innerHTML += text_cell}
                else if(box%3 == 0){
                    text_cell = `<div class=" box d-flex justify-content-center align-items-center bg-dark text-white" >Fizz</div>`;
                    cell.innerHTML += text_cell}
                    else{ 
                        text_cell = `<div class=" box d-flex justify-content-center align-items-center" >${box}</div>`;
                    cell.innerHTML += text_cell}
                }
                    