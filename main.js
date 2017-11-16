$(document).ready(function(){
    
    //Add option input
    var maxAppend = 0;
    $('#option-btn').click(function(){
       if(maxAppend < 7){
           $('.options').append('<input type="text" class="form-control input-lg" id="optionVal" placeholder="Enter an option">');
           maxAppend++;
       }else{
           $('#option-btn').off('click');
       }
    });
    
    
    //Get answer
    $('#answer-btn').click(function(){
       
            
            //Get all the options and store their value
            var optionList = $('.options input').map(function(){
            
            //Check if options have been entered
            if($('.options input').val() === '' ){
                $(this).attr("placeholder", "Please enter a choice");
            
            } else{
                
            //capture question input value and add to page replacing input
            var question = $('#questionVal').val();
            $('.question').html(question);
            //Store the users options
            var enteredOptions = $(this).val();
                
            //Hide option inputs
            $('.options input').hide();
            $('.options h2').text("You should choose:");
            //Add options to page in a list
            $('.options').append("<ul id='options'><li>" + enteredOptions + "</li></ul>");
            
            //Select random li and highlight
            var selection = $('li').removeClass('selected');
            var randLi = selection[Math.floor(Math.random() * selection.length)];  
            $(randLi).addClass('selected');   
            
                
            //Hide answer button 
            $('#answer-btn').hide();
            $('#option-btn').hide();
            //Add Reset button
            $('#reset-btn').show();
            }
            
        }).get();
        
    });
    
    //Reload page
    $('#reset-btn').click(function(){
       location.reload(); 
    });
    
    
});