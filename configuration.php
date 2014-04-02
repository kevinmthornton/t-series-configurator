<?php 
# get the URL pass and parse it out to see which datasheets we need to show
# how many blades where passed?
$pp81Blades = $_REQUEST['pp81Blades'] ? $_REQUEST['pp81Blades'] : 0;
$xe100Blades = $_REQUEST['xe100Blades'] ? $_REQUEST['xe100Blades'] : 0;
$z4648Blades = $_REQUEST['7240Blades'] ? $_REQUEST['7240Blades'] : 0;
$a7240Blades = $_REQUEST['4648Blades'] ? $_REQUEST['4648Blades'] : 0;
$optionalSoftware1 = $_REQUEST['optionalSoftware1'] ? $_REQUEST['4648Blades'] : 0;
$a7240Blades = $_REQUEST['4648Blades'] ? $_REQUEST['4648Blades'] : 0;

# put all URL vars into a form that also has a drop down of region
# form has name, email, phone number
# submit form to internal sales for them to parse out
# display datasheets of those blades that were passed

?>
<link rel="stylesheet" href="/z_includes/t-series-configurator/css/configurator.css" />

<div id="mainContainer">
<div id="dataSheetBox">
		<h1>View the Datasheets<br />for your configuration</h1>
		<div id="dataSheetBoxList">
			<?php
# iterate over the blades and put in hidden fields to show numbers/types
if($pp81Blades) {
	echo "<a href='http://www.radisys.com/products/atca/packet-processing/atca-pp81-npu-mezzanine/'>PP81 Blade Information</a> <br/>";
}

if($xe100Blades) {
	echo "<a href='http://www.radisys.com/products/atca/compute/atca-xe100/'>XE100 Blade Information</a> <br/>";
}

if($z4648Blades) {
	echo "<a href='http://www.radisys.com/products/atca/compute/atca-4600/'>4648 Blade Information</a> <br/>";
}

if($a7240Blades) {
	echo "<a href='http://www.radisys.com/products/atca/packet-processing/atca-7240/'>7240 Blade Information</a> <br/>";
}
?>
		</div>
	</div>
    
<div id="submissionFormBox">
		<h1>Send your configuration<br />to our Sales Team</h1>
		<br clear="all" />
        
        <form action="/z_includes/t-series-configurator/sendInfo.php" method="post" id="sendForm" name="sendForm">
        <p class="formLabel">Name</p><br clear="all"><span class="required">*required</span><input class="text required formField" type="text" name="customerName" maxlength="50" /><br clear="all">
        <p class="formLabel">Email</p><br clear="all"><span class="required">*required</span><input class="text required formField" type="text" name="customerEmail" maxlength="50" /><br clear="all">
        <p class="formLabel">Phone</p><br clear="all"><input type="text" class="formField" name="customerPhone" maxlength="50" /><br clear="all">
        <p class="formLabel">Location</p><br clear="all">
        <select id="customerLocation" name="customerLocation">
        	<option value="Americas">Americas</option>
        	<option value="Europe and India">Europe and India</option>
        	<option value="Asia Pacific">Asia Pacific</option>
        </select>
        <br clear="all">
        
        <input id="sendButton" type="image" src="/z_includes/t-series-configurator/images/btn-send.png" name="submit" width="152" height="47" />
 <?php
# iterate over the blades and put in hidden fields to show numbers/types
if($pp81Blades) {
	echo "<input type='hidden' id='pp81Blades' name='pp81Blades' value='$pp81Blades'>";
}

if($xe100Blades) {
	echo "<input type='hidden' id='xe100Blades' name='xe100Blades' value='$xe100Blades'>";
}

if($z4648Blades) {
	echo "<input type='hidden' id='4648Blades' name='4648Blades' value='$z4648Blades'>";
}

if($a7240Blades) {
	echo "<input type='hidden' id='7240Blades' name='7240Blades' value='$a7240Blades'>";
}

if($optionalSoftware1) {
	echo "<input type='hidden' id='optionalSoftware1' name='optionalSoftware1' value='Yes'>";
}

if($optionalSoftware2) {
	echo "<input type='hidden' id='optionalSoftware2' name='optionalSoftware2' value='Yes'>";
}

?>
</form>
       
	</div>
</div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
<script type="text/javascript" src="/z_includes/t-series-configurator/js/jquery.validate.js"></script>
<script type="text/javascript" src="/z_includes/t-series-configurator/js/forms.js"></script>
<script type="text/javascript"> 
$(document).ready(function(){
    $("#sendForm").validate();
});
</script>
