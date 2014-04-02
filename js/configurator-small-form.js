// Main Functions
$(function() {
    // set up the vars to be used down the line
	// I have two DIV's($chassis and $chassis2 that sit over the main chassis to split them up around the middle blades that stay in place
    var $a2340 = $( "#a2340" ),
      $pp81 = $( "#pp81" ),
	  $xe100 = $( "#xe100" ),
	  $7240 = $("#a7240"),
	  $4648 = $("#z4648"),
      $chassis = $( "#chassis1" ),
	  $chassis2 = $( "#chassis2" ),
	  $chassisText = $( "#chassisText" ),
  	  $chassisPP81List = $( "#chassisPP81List"),
 	  $chassisa2340List = $( "#chassisa2340List"),
	  $chassisxe100List = $( "#chassisxe100List" ),
	  $chassis7240List = $( "#chassis7240List" ),
	  $chassis4648List = $( "#chassis4648List" ),
	  $optionalSoftware = $("#optionalSoftware"),
	  $chassisOptionalSoftwareList = $( "#optionalSoftwareTextList" ),
	  $chassisOptionalSoftware1List = $( "#chassisOptionalSoftware1List" ),
	  $chassisOptionalSoftware2List = $( "#chassisOptionalSoftware2List" )
	  ;


	// let the chassis be droppable, accepting any li items
	// OLD: accept: "#pp82 > li"
	// NEW: ANY li on the page
    $chassis.droppable({
      accept: "li",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        addBladeToChassis( ui.draggable );
      }
    });

	// same for chassis2
    $chassis2.droppable({
      accept: "li",
      activeClass: "ui-state-highlight",
      drop: function( event, ui ) {
        addBladeToChassis( ui.draggable );
      }
    });

	// ------------------
	/*
	all the draggable li classes for the blades on the left side
	*/
    // let the pp81 items be draggable
    $( "li", $a2340 ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
	  addClass: "stacking"
    });
	
	// let the a2340 be droppable as well, accepting items from the chassis
    $a2340.droppable({
      accept: "#chassis li",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
      removeBladeFromChassis( ui.draggable );
      }
    });

    // let the pp81 items be draggable
    $( "li", $pp81 ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
	  addClass: "stacking"
    });
	
	// let the pp81 be droppable as well, accepting items from the chassis
    $pp81.droppable({
      accept: "#chassis li",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
      removeBladeFromChassis( ui.draggable );
      }
    });

    // let the xe100 items be draggable
    $( "li", $xe100 ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
	  addClass: "stacking"
    });

	// let the x3100 be droppable as well, accepting items from the chassis
    $xe100.droppable({
      accept: "#chassis li",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
      removeBladeFromChassis( ui.draggable );
      }
    });

    // let the 7240 items be draggable
    $( "li", $7240 ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
	  addClass: "stacking"
    });
	
	// let the 7240 be droppable as well, accepting items from the chassis
    $7240.droppable({
      accept: "#chassis li",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
      removeBladeFromChassis( ui.draggable );
      }
    });

    // let the 4648 items be draggable
    $( "li", $4648 ).draggable({
      cancel: "a.ui-icon", // clicking an icon won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone",
      cursor: "move",
	  addClass: "stacking"
    });
	
	// let the 7240 be droppable as well, accepting items from the chassis
    $4648.droppable({
      accept: "#chassis li",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
      removeBladeFromChassis( ui.draggable );
      }
    });
	
	// let the optional software items be draggable
    $( "li", $optionalSoftware ).draggable({
      cursor: "move",
	  revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone"
      
    });

    // let the optional software be droppable as well, accepting items from the chassis
    $optionalSoftware.droppable({
      accept: "#chassis li",
      activeClass: "custom-state-active",
      drop: function( event, ui ) {
        removeOptionalSoftwareFromChassis( ui.draggable );
      }
    });

	/* -------------- mouse overs for the blades to show descriptions ----------*/
	// if you hover over the pp81, you show the description
	$( "ul.a2340 > li" ).mouseover(function() {
		$( "#a2340Description" ).css('visibility','visible');
	});

	$( "ul.a2340 > li" ).mouseout(function() {
		$( "#a2340Description" ).css('visibility','hidden');
	});

	$( "ul.pp81 > li" ).mouseover(function() {
		$( "#pp81Description" ).css('visibility','visible');
	});

	$( "ul.pp81 > li" ).mouseout(function() {
		$( "#pp81Description" ).css('visibility','hidden');
	});

$( "ul.xe100 > li" ).mouseover(function() {
		$( "#xe100Description" ).css('visibility','visible');
	});

	$( "ul.xe100 > li" ).mouseout(function() {
		$( "#xe100Description" ).css('visibility','hidden');
	});

	$( "ul.a7240 > li" ).mouseover(function() {
		$( "#a7240Description" ).css('visibility','visible');
	});

	$( "ul.a7240 > li" ).mouseout(function() {
		$( "#a7240Description" ).css('visibility','hidden');
	});

	$( "ul.z4648 > li" ).mouseover(function() {
		$( "#z4648Description" ).css('visibility','visible');
	});

	$( "ul.z4648 > li" ).mouseout(function() {
		$( "#z4648Description" ).css('visibility','hidden');
	});

    /* ----------- addBladeToChassis ---------------  */
	// this function will take the dragged or plussed(+) item and tack it onto the chassis DIV
	// if chassis already has 4 items on it, then head over to chassis2 and start to add to that
	// once we get to 12, you cannot add anymore so, alert them and return
    var minus_icon = "<a href='javascript:void()' title='Remove Blade' class='ui-icon ui-icon-minus'>Recycle image</a>";
    function addBladeToChassis( $item ) {	  
	  $item.fadeOut(function() {
		// $item[0].id will identify which type this is
		// for optional software, we don't want this in the main chassis list, it will be separatedout and listed below the blades
		if($item[0].id != "optionalSoftware1" && $item[0].id != "optionalSoftware2") {
			var $chassisNumber = $( "ul li", $chassis ).length + 1 ; //
			var $totalChassis = $chassisNumber + $( "ul li", $chassis2 ).length;
			if($totalChassis >  5) {
				alert("Sorry, you can only fill this configuration with 6 blades or less.");
				return false;
			}
			// do we already have 6 blades in the first section?
			if($chassisNumber > 6) {
				// if we have a length, we already have a ul on the chassis
				// if not, append a ul to the $chassis and append this li $item to it
				var 	$list = $( "ul", $chassis2 ).length ?
						$( "ul", $chassis2 ) :
						$( "<ul class='chassisBlades'/>" ).appendTo( $chassis2 );
	
				$item.find( "a.ui-icon-plus" ).remove();
				$item.removeClass("stacking");
				$item.addClass("nostack");
				// this does a lot in one line: append the minus_icon to the item and then append that to the ul list on the chassis
				$item.append( minus_icon ).appendTo( $list ).fadeIn();
			} else {
				// if we have a length, we already have a ul on the chassis
				// if not, append a ul to the $chassis and append this item to it
				var 	$list = $( "ul", $chassis ).length ?
						$( "ul", $chassis ) :
						$( "<ul class='chassisBlades'/>" ).appendTo( $chassis );
				
				$item.find( "a.ui-icon-plus" ).remove();
				$item.removeClass("stacking");
				$item.addClass("nostack");
				// this does a lot in one line: append the minus_icon to the item and then append that to the ul list on the chassis
				$item.append( minus_icon ).appendTo( $list ).fadeIn();
			} // else from length > 6
		} else {
			// for optional software
			$item.append( minus_icon ).appendTo( "#optionalSoftwareChassisList" ).fadeIn();			
		}
		// put this in the listing for textual display
		writeToChassisText();
      }); // start from fadeout
	  
    }// function  addBladeToChassis

	// ---------- writeToChassisText  ------------------------
	// now textually display this by writing to the chassisText div
	function writeToChassisText() {
		// iterate over what we have in the list of chassic blades and create the counts based on that
		var $a2340Blades=0, $pp81Blades=0, $xe100Blades=0, $7240Blades=0, $4648Blades=0;
		var $optionalSoftware1=0, $optionalSoftware2=0;
		var $bladesInChassis = $(".chassisBlades > li");
		// alert($bladesInChassis.length);
		for (var i=0;i<$bladesInChassis.length;i++) { 
			//alert($bladesInChassis[i].id);
			if($bladesInChassis[i].id == "a2340ID") {
				$a2340Blades++;	
			} else if($bladesInChassis[i].id == "pp81ID") {
				$pp81Blades++;	
			} else if($bladesInChassis[i].id == "xe100ID") {
				$xe100Blades++;	
			} else if($bladesInChassis[i].id == "a7240ID") {
				$7240Blades++;	
			} else if($bladesInChassis[i].id == "z4648ID") {
				$4648Blades++;	
			}
		} // for loop
		
		// remove all of these first.  I tried other versions but, this works best.
		$("li", $chassisa2340List).remove();
		$("li", $chassisPP81List).remove();
		$("li", $chassisxe100List).remove();
		$("li", $chassis7240List).remove();
		$("li", $chassis4648List).remove();
		$("li", $chassisOptionalSoftware1List).remove();
		$("li", $chassisOptionalSoftware2List).remove();
		
		// for optional software
		var $optionalSoftwareInChassis = $("#optionalSoftwareChassisList > li");	
		for (var j=0;j<$optionalSoftwareInChassis.length;j++) { 
			if($optionalSoftwareInChassis[j].id == "optionalSoftware1" && $("#chassisOptionalSoftware1List > li").length == 0) {
				$optionalSoftware1++;	
			}  else if($optionalSoftwareInChassis[j].id == "optionalSoftware2" && $("#chassisOptionalSoftware2List > li").length == 0) {
				$optionalSoftware2++;	
			} 
		} // for loop
		
		//$itemType = $item[0].id;
		// ICK! This is long windded but, the DIV didn't like appentTo or replaceWith so, went this route
		if($a2340Blades) {
			var $lineText = "<li> " + $a2340Blades + " PP81 </li>";
			$chassisa2340List.append($lineText);
		} 
		
		if($pp81Blades) {
			var $lineText = "<li> " + $pp81Blades + " PP81 </li>";
			$chassisPP81List.append($lineText);
		} 
		
		if ($xe100Blades) {
			var $lineText = "<li> " + $xe100Blades + " xe100 </li>";
			$chassisxe100List.append($lineText);
		}
		if ($7240Blades) {
			var $lineText = "<li> " + $7240Blades + " 7240 </li>";
			$chassis7240List.append($lineText);
		}
		if ($4648Blades) {
			var $lineText = "<li> " + $4648Blades + " 4648 </li>";
			$chassis4648List.append($lineText);
		}
		if ($optionalSoftware1) {
			var $lineText = "<li> Statistical Load Balancing </li>";
			$chassisOptionalSoftware1List.append($lineText);
		}
		if ($optionalSoftware2) {
			var $lineText = "<li> Backplance Redundancy </li>";
			$chassisOptionalSoftware2List.append($lineText);
		}

	} // write to chassis text
	
	/*---------------- a2340 functions ------------------------ */ 
	// resolve the icons behavior with event delegation
	// the ul.a2340 li is "this"
	// you are adding "this" li "item" to the ul of the chassis
    $( "ul.a2340 > li" ).click(function( event ) { 
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plus" ) ) {
        addBladeToChassis( $item );
      } else if ( $target.is( "a.ui-icon-minus" ) ) {
        removea2340FromChassis( $item );
      }
 
      return false;
    });

    // blade recycle function
    var x_icon = "<a href='void()' title='Delete this image' class='ui-icon ui-icon-plus'>Remove Blade</a>";
    /* -- 12/10/13 - KT took out: .css( "width", "30px") and .css( "height", "320px" ) */
    function removea2340FromChassis( $item ) {
	  	$item.removeClass("nostack");
		$item.addClass("stacking");
      	$item.fadeOut(function() {
        $item
          .find( "a.ui-icon-minus" )
          .remove()
          .end()
          .append( x_icon )
          .find( "img" )
          .end()
          .appendTo( $a2340 )
          .fadeIn();
		writeToChassisText();  
      });
	  
    }

	/*---------------- pp81 functions ------------------------ */ 
	// resolve the icons behavior with event delegation
	// the ul.pp81 li is "this"
	// you are adding "this" li "item" to the ul of the chassis
    $( "ul.pp81 > li" ).click(function( event ) { 
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plus" ) ) {
        addBladeToChassis( $item );
      } else if ( $target.is( "a.ui-icon-minus" ) ) {
        removepp81FromChassis( $item );
      }
 
      return false;
    });

    // blade recycle function
    var x_icon = "<a href='void()' title='Delete this image' class='ui-icon ui-icon-plus'>Remove Blade</a>";
    /* -- 12/10/13 - KT took out: .css( "width", "30px") and .css( "height", "320px" ) */
    function removepp81FromChassis( $item ) {
	  	$item.removeClass("nostack");
		$item.addClass("stacking");
      	$item.fadeOut(function() {
        $item
          .find( "a.ui-icon-minus" )
          .remove()
          .end()
          .append( x_icon )
          .find( "img" )
          .end()
          .appendTo( $pp81 )
          .fadeIn();
		writeToChassisText();  
      });
	  
    }
    

	/*---------------- xe100 functions ------------------------ */ 
	// watch the li under the xe100 list for clicks and drags
    $( "ul.xe100 > li" ).click(function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plus" ) ) {
        addBladeToChassis( $item );
      } else if ( $target.is( "a.ui-icon-minus" ) ) {
        removexe100FromChassis( $item );
      }
 
      return false;
    });

	// remove from the chassis and append back to the xe100 list
    function removexe100FromChassis( $item ) {
	  	$item.removeClass("nostack");
		$item.addClass("stacking");
      	$item.fadeOut(function() {
        $item
          .find( "a.ui-icon-minus" )
          .remove()
          .end()
          .append( x_icon )
          .find( "img" )
          .end()
          .appendTo( $xe100 )
          .fadeIn();
		// once that huge line is over, now write the type out to the text view
		writeToChassisText();  
      });	
	} // xe100 

	/*---------------- 7240 functions ------------------------ */ 
	// watch the li under the 7240 list for clicks and drags
    $( "ul.a7240 > li" ).click(function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plus" ) ) {
        addBladeToChassis( $item );
      } else if ( $target.is( "a.ui-icon-minus" ) ) {
        remove7240FromChassis( $item );
      }
 
      return false;
    });

	// remove from the chassis and append back to the 7240 list
    function remove7240FromChassis( $item ) {
	  	$item.removeClass("nostack");
		$item.addClass("stacking");
      	$item.fadeOut(function() {
        $item
          .find( "a.ui-icon-minus" )
          .remove()
          .end()
          .append( x_icon )
          .find( "img" )
          .end()
          .appendTo( $7240 )
          .fadeIn();
		// once that huge line is over, now write the type out to the text view
		writeToChassisText();  
      });	
	} // 7240 
	
	/*---------------- 4648 functions ------------------------ */ 
	// watch the li under the 4648 list for clicks and drags
    $( "ul.z4648 > li" ).click(function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plus" ) ) {
        addBladeToChassis( $item );
      } else if ( $target.is( "a.ui-icon-minus" ) ) {
        remove4648FromChassis( $item );
      }
      return false;
    });

	// remove from the chassis and append back to the 7240 list
    function remove4648FromChassis( $item ) {
	  	$item.removeClass("nostack");
		$item.addClass("stacking");
      	$item.fadeOut(function() {
        $item
          .find( "a.ui-icon-minus" )
          .remove()
          .end()
          .append( x_icon )
          .find( "img" )
          .end()
          .appendTo( $4648 )
          .fadeIn();
		// once that huge line is over, now write the type out to the text view
		writeToChassisText();  
      });	
	} // 7240 
	
	/*---------------- optionalSoftware functions ------------------------ */ 
	// watch the li under the xe100 list for clicks and drags
    $( "ul.optionalSoftware > li" ).click(function( event ) {
      var $item = $( this ),
        $target = $( event.target );
 
      if ( $target.is( "a.ui-icon-plus" ) ) {
		// add optional software to a seperate list so it does not get lumped in with blades
        addBladeToChassis( $item );	
      } else if ( $target.is( "a.ui-icon-minus" ) ) {
        removeOptionalSoftwareFromChassis( $item );
      }
 
      return false;
    });

// remove from the chassis and append back to the xe100 list
    function removeOptionalSoftwareFromChassis( $item ) {
      	$item.fadeOut(function() {
        $item
          .find( "a.ui-icon-minus" )
          .remove()
          .end()
          .appendTo( $optionalSoftware )
          .fadeIn();
		// once that huge line is over, now write the type out to the text view
		writeToChassisText();  
      });
		
    }






	// build out a GET URI from the list of blades on the chassis
	$("#submitConfig").click(function(){
		var $bladesInChassis = $(".chassisBlades > li");
		var $pp81Blades=0, $xe100Blades=0, $7240Blades=0, $4648Blades=0;
		var $optionalSoftware1=0, $optionalSoftware2=0;
		var $configURL = "";
		
		for (var i=0;i<$bladesInChassis.length;i++) { 
			// if/else for type of blade or software; tack onto the url
			if($bladesInChassis[i].id == "pp81ID") {
				$pp81Blades++;	
			} else if($bladesInChassis[i].id == "xe100ID") {
				$xe100Blades++;	
			} else if($bladesInChassis[i].id == "a7240ID") {
				$7240Blades++;	
			} else if($bladesInChassis[i].id == "z4648ID") {
				$4648Blades++;	
			}
		}
		
		// for optional software
		var $optionalSoftwareInChassis = $("#optionalSoftwareChassisList > li");	
		for (var j=0;j<$optionalSoftwareInChassis.length;j++) { 
			if($optionalSoftwareInChassis[j].id == "optionalSoftware1") {
				$optionalSoftware1++;	
			}  else if($optionalSoftwareInChassis[j].id == "optionalSoftware2") {
				$optionalSoftware2++;	
			} 
		} // for loop
		
		if($pp81Blades) {
			var $pp81Bladelist = "&pp81Blades=" + $pp81Blades;
			$configURL += $pp81Bladelist;
		} 
		
		if ($xe100Blades) {
			var $xe100Bladelist = "&xe100Blades=" + $xe100Blades;
			$configURL += $xe100Bladelist;
		}
		
		if ($7240Blades) {
			var $7240Bladelist = "&7240Blades=" + $7240Blades;
			$configURL += $7240Bladelist;
		}
		
		if ($4648Blades) {
			var $4648Bladelist = "&4648Blades=" + $4648Blades;
			$configURL += $4648Bladelist;
		}
		if ($optionalSoftware1) {
			var $optionalSoftware1list = "&optionalSoftware1=" + $optionalSoftware1;
			$configURL += $optionalSoftware1list;
		}
	
		if ($optionalSoftware2) {
			var $optionalSoftware2list = "&optionalSoftware2=" + $optionalSoftware2;
			$configURL += $optionalSoftware2list;
		}
		if (!$optionalSoftware1 && !$optionalSoftware2) {	
			if (confirm('You have not chosen any Optional Software. Click OK to continue on and Cancel to stay on this page.')) { 
			 	// No, I don't wantt any optional software so, continue on
				window.location.href = "submitConfig.php?" + $configURL;
			} else {
				// go back to page and choose software
				return false;
			}
		}
		//alert($configURL);
		// this is the real PHP file --> window.location.href = "submitConfig.php?" + $configURL;
		// this is the Wordpress file
		window.location.href = "/t-series-configurator/configuration/?" + $configURL;
		return false;
	 });
	
	 // ---- PRECONFIGURED OPTIONS -----
	 // for getting the passed preconfigured variable
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
			vars[key] = value;
		});
		return vars;
	}
	
	// get the preconfiguration passed, if any
	var $preConfigured = getUrlVars()["preconfigured"];
	//alert($preConfigured);
	if($preConfigured != "") {
		// dpi config: 6 pp81's and 6 4648's
		if($preConfigured 	== "dpi" ) {
		  $("ul.pp81 > li > a")[0].click();
		  $("ul.pp81 > li > a")[1].click();
		  $("ul.pp81 > li > a")[2].click();
		  $("ul.pp81 > li > a")[3].click();
		  $("ul.pp81 > li > a")[4].click();
		  $("ul.pp81 > li > a")[5].click();
		  $("ul.z4648 > li > a")[0].click();
		  $("ul.z4648 > li > a")[1].click();
		  $("ul.z4648 > li > a")[2].click();
		  $("ul.z4648 > li > a")[3].click();
		  $("ul.z4648 > li > a")[4].click();
		  $("ul.z4648 > li > a")[5].click();
		}
		// wireless config: 2 4648's and 10 7240's
		if($preConfigured 	== "wireless" ) {
		  $("ul.z4648 > li > a")[0].click();
		  $("ul.z4648 > li > a")[1].click();
		  $("ul.a7240 > li > a")[0].click();
		  $("ul.a7240 > li > a")[1].click();
		  $("ul.a7240 > li > a")[2].click();
		  $("ul.a7240 > li > a")[3].click();
		  $("ul.a7240 > li > a")[4].click();
		  $("ul.a7240 > li > a")[5].click();
		  $("ul.a7240 > li > a")[6].click();
		  $("ul.a7240 > li > a")[7].click();
		  $("ul.a7240 > li > a")[8].click();
		  $("ul.a7240 > li > a")[9].click();
		}
		// telecom config: 6 4648's and 6 xe100's
		if($preConfigured 	== "telecom" ) {
		  $("ul.z4648 > li > a")[0].click();
		  $("ul.z4648 > li > a")[1].click();
		  $("ul.z4648 > li > a")[2].click();
		  $("ul.z4648 > li > a")[3].click();
		  $("ul.z4648 > li > a")[4].click();
		  $("ul.z4648 > li > a")[5].click();
		  $("ul.xe100 > li > a")[0].click();
		  $("ul.xe100 > li > a")[1].click();
		  $("ul.xe100 > li > a")[2].click();
		  $("ul.xe100 > li > a")[3].click();
		  $("ul.xe100 > li > a")[4].click();
		  $("ul.xe100 > li > a")[5].click();
		}
		// datacenter config: don't know yet so, just left this in
		if($preConfigured 	== "datacenter" ) {
		  $("ul.z4648 > li > a")[0].click();
		  $("ul.z4648 > li > a")[1].click();
		  $("ul.z4648 > li > a")[2].click();
		  $("ul.z4648 > li > a")[3].click();
		  $("ul.z4648 > li > a")[4].click();
		  $("ul.z4648 > li > a")[5].click();
		  $("ul.xe100 > li > a")[0].click();
		  $("ul.xe100 > li > a")[1].click();
		  $("ul.xe100 > li > a")[2].click();
		  $("ul.xe100 > li > a")[3].click();
		  $("ul.xe100 > li > a")[4].click();
		  $("ul.xe100 > li > a")[5].click();
		}
		
	}



}); // close off the function from the very start

