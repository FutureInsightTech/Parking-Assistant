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
    res.send("Form is Submitted");
}