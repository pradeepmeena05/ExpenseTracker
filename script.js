const expenseform=document.querySelector("#expenseform")
        const expenselist=document.querySelector("#expenselist")

        expenseform.addEventListener('submit',function(event){
            event.preventDefault();

            const description=document.getElementById("discription").value
            const category=document.getElementById("category").value
            const amount=document.getElementById("amount").value

            if(description && category && !isNaN(amount))
            {
                const newrow=document.createElement("tr")

                newrow.innerHTML=`<td>${description}</td> 
                                  <td>${category}</td>
                                  <td>${amount}</td>`

                                  expenselist.appendChild(newrow)
            }

            document.getElementById("discription").value=''
            document.getElementById("category").value=''
            document.getElementById("amount").value=''
        })