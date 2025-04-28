let greate_row=document.querySelectorAll(".greate .row")

let val=true
let arr=[]
greate_row.forEach((row, index)=>{
  row.addEventListener("click", function(){
    my_Func(row,index)
  })
})







function my_Func(row, index){
    if(row.innerHTML.length< 1){
    if(val){
        row.innerHTML+="X"
        val=false
        arr[index+1]="X"

        console.log(arr)

      
    }
    else{
        row.innerHTML+="O" 
        val=true
       arr[index+1]="O"
   
        console.log(arr) 
  
    }
    console.log(arr[1])

    if(arr[1]=="X" && arr[2]=="X" && arr[3]=="X" ||
        arr[4]=="X" && arr[5]=="X" && arr[6]=="X" ||
        arr[7]=="X" && arr[8]=="X" && arr[9]=="X" ||
        arr[1]=="X" && arr[3]=="X" && arr[7]=="X" ||
        arr[2]=="X" && arr[4]=="X" && arr[8]=="X" ||
        arr[3]=="X" && arr[6]=="X" && arr[9]=="X" ||
        arr[1]=="X" && arr[5]=="X" && arr[9]=="X" ||
        arr[3]=="X" && arr[5]=="X" && arr[7]=="X" )

     {
        greate_row.forEach((row) => {
            row.style.display = "none";
          });
        alert("Haxtec X-@")
    }
    else if(arr[1]=="O" && arr[2]=="O" && arr[3]=="O" ||
        arr[4]=="O" && arr[5]=="O" && arr[6]=="O" ||
        arr[7]=="O" && arr[8]=="O" && arr[9]=="O" ||
        arr[1]=="O" && arr[3]=="O" && arr[7]=="O" ||
        arr[2]=="O" && arr[4]=="O" && arr[8]=="O" ||
        arr[3]=="O" && arr[6]=="O" && arr[9]=="O" ||
        arr[1]=="O" && arr[5]=="O" && arr[9]=="O" ||
        arr[3]=="O" && arr[5]=="O" && arr[7]=="O")

    {
        greate_row.forEach((row) => {
            row.style.display = "none";
          });
            alert("Haxtec O-@")
        }
       

    
}
}
