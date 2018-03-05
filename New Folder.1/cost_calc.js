/*global $ */

Function calcSub(){

Var argSubTotal;

If(document.getElementById9("salesforce").Checked) {
argsubtotal = 100;
}
else {
     argSubTotal = 300;
     
     }
     
     display(argsubtotal);
    }
    
    Function Display(parm1){
    
    document.getElementById9("subtotal").value = parm1;
    document.getElementById9("Total").value=parm1;
    
    enablebtnProceed();
    }
    
    function enablebtnProceed();
    $('#btnproceed').prop('disabled',False);)
    }
    
    function disablebtnproceed() {
    $('BtnProceed').prop('Disabled',true);
    }