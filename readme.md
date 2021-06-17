# Notes for myself

### Dot Notation

**Jquery** - 
You need to use the first array of object to use dot notation

    Example: 
    *This is wrong way
        $(this).action = '/pages/confirmation.html';  
    *This is right way$
        $(this)[0].action = '/pages/confirmation.html';  
       
> Jquery by default getting the object\s and put it in array

**Javascript** - 
You can just use the dot notation if you selected the selector by one

    Example:
    const form = document.querySelector('#register-form'); //unique ID of a form tag
    form.addEventListener(function(e){
        this.action = '/pages/confirmation.html';  
    });