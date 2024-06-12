// functionn to see if the user has selected the age
function validity_age(){
    if(document.getElementById("under").checked || document.getElementById("mid").checked || document.getElementById("over").checked){ //checking if any radio is selected
        document.getElementById("null_age").style.display="none";
        document.getElementById("age_field").style.border="none";
    }  
    else{
        document.getElementById("null_age").style.display="flex"; //changing the display to flex
        document.getElementById("age_field").style.border="solid 2px red";  //changing the border
        document.getElementById("null_age").scrollIntoView();  //scrolling to the question
        return false;
    }
}

//function to see if the user has selected a rating
function validity_rate(){
    if (document.getElementById("rate_0").checked || document.getElementById("rate_1").checked || document.getElementById("rate_2").checked ||document.getElementById("rate_3").checked || document.getElementById("rate_4").checked || document.getElementById("rate_5").checked ||document.getElementById("rate_6").checked || document.getElementById("rate_7").checked || document.getElementById("rate_8").checked || document.getElementById("rate_9").checked ||document.getElementById("rate_10").checked){
        document.getElementById("null_rate").style.display="none";
        document.getElementById("rate_field").style.border="none";
    }
    else{
        document.getElementById("null_rate").style.display="flex";  //changing the display to flex
        document.getElementById("rate_field").style.border="solid 2px red";   //changing the border
        document.getElementById("null_rate").scrollIntoView();  //scrolling to the question
        return false;
    }
}

//function to see if the user has filled the textarea for reason for the rating
function validity_reason(){
    var rate_reason=document.getElementById("reason").value;
    if(rate_reason==null|| rate_reason==""){
        document.getElementById("null_reason").style.display="flex"; //changing the display to flex
        document.getElementById("reason_field").style.border="solid 2px red";   //changing the border
        document.getElementById("null_reason").scrollIntoView();  //scrolling to the question
        return false;
    }         
}

//function to call other functions and to see if their return value is false
function valid_submit(){
    if(validity_age()==false || validity_rate()==false|| validity_reason()==false ){
        return false;
    }
    else{
        document.getElementById("comment_form").style.display="none";
        document.getElementById("thank").style.display="inherit";
        document.getElementById("body").style.background="white";
    }
}

    
