function breakOut(array, changeValue, stopValue){
  array.forEach((element,index)=>{
    if(element===stopValue){
      break
    }
    else{
      array[index]=changeValue
    }
  })
  return array
}
