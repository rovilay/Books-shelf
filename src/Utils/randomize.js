const randomize = (myArr) => {
    const newArr = [...myArr];    
    let arrLength = newArr.length;
    while (arrLength > 0) {  
       const index = Math.floor(Math.random() * arrLength); 
       arrLength -= 1; 
       const temp = newArr[arrLength];          
       newArr[arrLength] = newArr[index];          
       newArr[index] = temp;      
    }    
    return newArr;
} 

export default randomize;
