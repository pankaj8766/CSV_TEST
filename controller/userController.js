let User = require('../model/User');
let CSV = require('csvtojson');

const imoprtUser = async(req,res)=>
{
  try {
    let userData =[];
    CSV().fromFile(req.file.path).then(async(response)=>
    {
      for(let x=0;x<response.length;x++)
      {
         userData.push({
          name:response[x].name,
          Lang:response[x].Lang,
         })
      }
        console.log(response);

        // insert data to database here
      
       await User.insertMany(userData);
        console.log('Data inserted successfully');

        
    })
    
    res.send({status:200, success:true,msg:'Running'});
   
  } catch (error) {
    
    res.send({status:400, success:false,msg:error.message});  }
}
module.exports = 
{
    imoprtUser
}