function orderFromBoss() {
    return new Promise((resolve, reject) => {
      const isCodeDone = false;
      console.log("Finish the code, it's an order!");
      resolve(isCodeDone);
    });
  }
  
  function coding(isCodeDone) {
    return new Promise((resolve, reject) => {
        if (isCodeDone === false) {
          console.log("Working...");
          isCodeDone = true;
          resolve(isCodeDone);
        } else {
          reject("No instructions from boss yet.");
        }
    });
  }
  
  function performanceReview(isCodeDone){
      return new Promise((resolve,reject) => {
        if(isCodeDone === true){
          resolve("You kept your promise and finished the code. You're getting promoted!");
        }else{
          reject("You broke your promise, how can I trust you with bigger responsibilities?");
        }
      });
  }
  
  async function randomDayAtWork(){
    try{
    const instruction = await orderFromBoss();
    const work = await coding(instruction);
    const review = await performanceReview(work);
    console.log(review); 
    }
    catch (error){
      console.log(error);
    }
  }
  
  randomDayAtWork();