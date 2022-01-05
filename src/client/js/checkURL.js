function validURL(url){

    const validURL = /^(ftp|http|https):\/\/[^ "]+$/;
    if (validURL.test(url)){
        return true
    }else {
        return false
    }


}


export {validURL}