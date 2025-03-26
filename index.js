// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  try{
    //find out what database the user id belongs to 
    const userLocation= await central(id);
    // console.log(userLocation);
    // call the db function corressponding to the users id
    const basicUserInfo= await dbs [userLocation](id)
    // console.log(basicUserInfo);
    //call the vault function to grab the remaining user data 
    const personalUserInfo= await vault (id);
    // console.log(personalUserInfo);
    //return the formatted data 
    const userData ={
        id, 
        ...basicUserInfo,
        ...personalUserInfo
    }
    return console.log(userData)
  
}catch{
  console.log("oh no! the number does not correspond to this database")
  }
}

(getUserData(1))
// (getUserData(2))
// (getUserData(3))
// (getUserData(4))
// (getUserData(5))
// (getUserData(6))
// (getUserData(7))
// (getUserData(8))
// (getUserData(9))
// (getUserData(10))