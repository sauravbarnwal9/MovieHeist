exports.signup=(req,res)=>{
    const data = req.body;
    //  console.log(data)
    let password = data.password;
    let email = data.email;

    try {

        bcrypt.hash(password, 6).then(function (hash) {
            data.password = hash;
            
            const user = new UserModel(data);
             user.save();
            const token = jwt.sign({ email: email }, SECRET_CODE);
            res.status(200).send({ "signup": "successfully", "token": token });
          })
        } catch (error) {
          res
          .status(404)
          .json({
            status: "something is missing",
          })
          .send({ msg: "something is missing" }); 
        }

}


exports.login = async (req, res) => {
    let data = req.body;
  
  console.log(data)
  
  
      try {
      const { email, password } = data;
      let user = await User.findOne({email: email });
      let hash = user.password;
  
      bcrypt.compare(password, hash, function (err, result) {
      
        if (result) {
          const token = jwt.sign({ email: email }, SECRET_CODE);
          res.status(200).send({ "sign in": "successfully", "token": token });
        } 
        else{
          res.status(304).send("Password is Invalid")
        }
       
        });
      } catch (error) {
        res
        .status(404)
        .json({
          status: "something is missing",
        })
        .send({ msg: "something is missing" });
      }
      
    
  
  };