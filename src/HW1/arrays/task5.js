let arr=[1, 3,-9,56,562,506,45, 13, 22, 22];

function oddSum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(i%2==1){
            sum= sum+arr[i];
        }
    }console.log(sum);
}
oddSum(arr)