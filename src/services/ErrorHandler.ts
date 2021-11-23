class ErrorHandler{
    theresResponse(res){
        if(res){
            return {data: res}
        }else{
            return {msg: "There was an error accessing the external API please try again later!"};
        }
    }
}
export{ErrorHandler};