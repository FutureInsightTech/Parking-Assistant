//  ###############################################################################
//  #                                                                             #
//  #                      #### Mohammad Abdul Rafay   #####                      #
//  #                      #### 99marafay@gmail.com    #####                      #
//  #                      #### Github: rafay99-epic   #####                      #
//  #                      #### The Aruth File in the  #####                      #
//  #                      #### Controller Folder      #####                      #
//  #                                                                             #
//  ###############################################################################


exports.register =(req,res) => {
    console.log(req.body);

    const user_name = req.body.user_name;
    const user_email = req.body.user_email;
    const user_password = req.body.user_password;
    const user_DOB= req.body.DOB;



    res.send("Form is Submitted");
}