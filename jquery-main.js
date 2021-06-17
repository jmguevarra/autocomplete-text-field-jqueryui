/**
 *  This is small test snippets of mine. I used this schools of array to populate and have autocomplete the school field.
 *  As part of this file I added small error handling to determined if given value from the user is listed in preferred Schools
 */

jQuery(document).ready(function(){
    const checkSchool = function(school){
        let flag = false;
        if(school === ''){ return false; } //return if empty

        //Do action here
        const schoolExistence = ausSchools.find(function(elem){
            return elem == school;
        });

        if(schoolExistence !== undefined){
            $('input[name="school"]').addClass('field_validated');
            $('input[name="school"]').removeClass('field_error');
            flag = true;
        }else{
            $('input[name="school"]').addClass('field_error');
            $('input[name="school"]').removeClass('field_validated');
        }
        return flag;
    };

    $('input[name="school"]').autocomplete({
        source: ausSchools, //asuSchools is in /js/shools-aus.js
    });
    
    // $('input[name="school"]').blur(function(e){
    //     checkSchool($(this).val());
    // });

    $('.register-form').submit(function(e){
        const schoolValue = $('input[name="school"]').val();
        const confirmationLink  = '/pages/confirmation.html';

        if(!checkSchool(schoolValue)){
            e.preventDefault();
            return false;
        }
        
        $(this)[0].action = confirmationLink; 

    });
});



