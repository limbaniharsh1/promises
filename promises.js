  function getdata() {
    setTimeout(() => {
      let roll = [1, 2, 3, 4, 5];
      console.log(roll);

      setTimeout(() => {
        let bio = {
          name: "harsh",
          age: 19,
        };
        console.log(`my roll no is ${roll[1]} hi my name is ${bio.name} , my age is ${bio.age}`);

        setTimeout(() => {
          bio.gender = "male" 
          console.log(`hello i'm ${bio.gender} my name is ${bio.name}`);
        }, 2000);
      }, 2000);
    }, 2000);
  }
  // getdata();

  let data = new Promise((resolve,reject)=>{
    setTimeout(() => {
      let roll = [1,2,3,4,5]
      resolve(roll[1])    //if data found then resolve send data 
      reject('data missing error') // if data not fond then reject send error
    }, 2000); // you can pass paameter like 2000 , roll
  })

  function chekdata(){
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(`hello my name is harsh`)
        reject('data not found')
    }, 2000);
    })
  }

  data.then((rollno)=>{
    console.log(rollno)
    chekdata().then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
  }).catch((err)=>{
    alert(err)
  })