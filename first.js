function sort(arr){
    // for loop until the last index no
    for (i=1;i<arr.length;i++){
        let key=arr[i]
        let j=i-1
        // this condition shift the left postioned value to right postion if the condition is true
        while(j>=0 && arr[j]>key){
             arr[j+1]=arr[j]
             j=j-1
        }
        //the above condition is false it leaves unchnaged
        arr[j+1]=key

    }
    // this retuns the arr
    return arr
}
//consoling the function or you assign the function since it retuns array
console.log(sort([12,11,13,5,6]))