// RadiSys Corporation Form JavaScript

//Form validation
$(document).ready(function(){
    $(".basic").validate();
});

$(document).ready(function(){
    $("#basic").validate();
});

//On Focus commands
$(document).ready(function() {
   $('input[type="text"]').addClass("idleField");
	$('input[type="text"]').focus(function() {
		$(this).removeClass("idleField").addClass("focusField");
        if (this.value == this.defaultValue){
        	this.value = '';
    	}
        if(this.value != this.defaultValue){
	    	this.select();
        }
    });
    $('input[type="text"]').blur(function() {
    	$(this).removeClass("focusField").addClass("idleField");
        if ($.trim(this.value == '')){
        	this.value = (this.defaultValue ? this.defaultValue : '');
    	}
    });
});

// When the checkbox All is checked, ALL the product line checkboxes get checked; 
// this only works if you want all the checkboxes on the entire form to be checked; otherwise, target them indvidually like so:
// $('input[name=product_atca]').attr('checked', true);
$(document).ready(function(){
	$('input[name="all_checkboxes"]').click(function(){
		// are you checked already? if so, set all checkboxes to be off
		if ($('input[name="all_checkboxes"]:checked').val() == undefined) {
			$('input[type=checkbox]').attr('checked', false);
		} else {											 
			$('input[type=checkbox]').attr('checked', true);											 
		}
	});
});