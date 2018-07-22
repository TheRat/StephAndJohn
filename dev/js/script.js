var safari = (navigator.userAgent.indexOf("Safari") != -1 && 
			  navigator.userAgent.indexOf("Chrome") == -1);

var ieOrEdge = (navigator.userAgent.indexOf('MSIE') != -1 || 
				navigator.appVersion.indexOf('Trident/') != -1 || 
				navigator.userAgent.indexOf('Edge') != -1);

var edge = (navigator.userAgent.indexOf('Edge') != -1);

var firefox = (navigator.userAgent.indexOf("Firefox") != -1 );

var code, name, multiples;

function clickOnEnter() {
    $('[name=code]').keypress(function(e) {
        if (e.which == 13) {
            $('#submitCode').click();
            $('#submitCode').prop("disabled", true);
            $('[name=code]').unbind("keypress");
        }
    });
}

function Submit(){
if ($('[name=names]').val() && $('[name=attendance]').val() && 
		((multiples && $('[name=number]').val()) || !multiples)) {
		var response = "";
		if (multiples) {
			if ($('[name=introAdjective]').val()) {
				response += "We are " + $('[name=introAdjective]').val() + " to hear about your upcoming nuptials!\n";
			}
			if ($('[name=adjective]').val()) {
				response += $('[name=names]').val() + " is/are " + $('[name=adjective]').val() + " to ";
			} else {
				response += $('[name=names]').val() + " is/are going to ";
			}
			response += $('[name=attendance]').val() + " the celebration. " +
				"There is/are " + $('[name=number]').val() + " attendee(s) in our party. ";
			if ($('[name=numberFood]').val() && $('[name=dietaryRestriction]').val()) {
				response += $('[name=numberFood]').val() + " of us can\'t eat " +
					$('[name=dietaryRestriction]').val() + ".\n";
			}
			if ($('[name=songRequest]').val()) {
				response += "Dancing will only happen if " + $('[name=songRequest]').val() + " is heard. ";
			}
			if ($('[name=shuttle]').val()) {
				response += "I/We " + $('[name=shuttle]').val() +
				" a seat on the shuttle from the King\'s Port Inn.";
			}
		} else {
			if ($('[name=introAdjective]').val()) {
				response += "I am " + $('[name=introAdjective]').val() + " to hear about your upcoming nuptials!\n";
			}
			if ($('[name=adjective]').val()) {
				response += $('[name=names]').val() + " is " + $('[name=adjective]').val() + " to ";
			} else {
				response += $('[name=names]').val() + " is going to ";
			}
			response += $('[name=attendance]').val() + " the celebration. ";
			if ($('[name=dietaryRestriction]').val()) {
				response += "I can\'t eat " + $('[name=dietaryRestriction]').val() + ".\n";
			}
			if ($('[name=songRequest]').val()) {
				response += "I will only dance if I hear " + $('[name=songRequest]').val() + ". ";
			}
			if ($('[name=shuttle]').val()) {
				response += "I " + $('[name=shuttle]').val() +
				" a seat on the shuttle to/from Ayr/Kilmarnock.";
			}
		}

		var thankText = "";
		
			thankText += '<svg width="253" height="75">';
			if (ieOrEdge) {
				thankText += '<text y="55" fill="#000033" font-size="50">';
			} else {
				thankText += '<text y="55" fill="none" stroke="#000033" stroke-width="1" font-size="50">';
			}
			thankText += 'Thank You!</text></svg>';
			 
		

		 oFormObject = document.forms['theForm'];
         oFormObject.elements["code"].value = code;
         oFormObject.elements["response"].value = response;
		 document.getElementById('theForm').submit();
		 

	} else {
		alert("Please fill out all required fields");
		$('#rsvpForm input, #rsvpForm select').css("box-shadow", "initial");
		if (!$('[name=names]').val()) {
			$('[name=names]').css("box-shadow", "0 0 3px 1px #CC0000");
		}
		if (!$('[name=attendance]').val()) {
			$('[name=attendance]').css("box-shadow", "0 0 3px 1px #CC0000");
		}
		if (!$('[name=number]').val()) {
			$('[name=number]').css("box-shadow", "0 0 3px 1px #CC0000");
		}
	}
}

function whichForm(numParty) {
	if (numParty == 1) {
		multiples = false;		
		return '<div id="rsvpForm">' +
					'<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>' +
					'<form method="post" action="https://docs.google.com/macros/exec?service=AKfycbz_2rbiyARw1rHmRPWywxR_pBopy8238aNBHdz2oCf7AHusLw" name="theForm" id="theForm" target="hidden_iframe" id="GoogleForm">' + 
					'Dear John and Steph,<br />' +
					'I am <input type="text" name="introAdjective" placeholder="Adjective"> to hear about your upcoming nuptials!<br />' +
					'<input type="text" name="names" placeholder="Your Name *" maxlength="500" required/> is ' +
					'<input type="text" name="adjective" placeholder="Adjective"> to ' +
					'<select name="attendance" required>' +
				 		'<option value="" disabled selected>Select *</option>' +
				 		'<option value="attend">attend</option>' +
						'<option value="miss">miss</option>' +
					'</select> the celebration. I can\'t eat ' +
					'<input type="text" name="dietaryRestriction" placeholder="Dietary Restrictions" maxlength="500">.<br />' +
					'I will only dance if I hear ' +
					'<input type="text" name="songRequest" placeholder="Song/Artist" maxlength="500">. I ' +
					'<select name="shuttle">' +
						'<option value="" disabled selected>Select</option>' +
						'<option value="would like">would like</option>' +
						'<option value="will not need">will not need</option>' +
					'</select> a seat on the bus home.<br />' +
					'Sincerely,<br />' + name + '<br />' +
					'<input type="hidden" name="code" value="">' +
					'<input type="hidden" name="response" value="">' +
					'<input type="button" value="Submit" class="submit"  onclick="Submit();"/>' +
					'</form>' +
				'</div>';
	} else {
		multiples = true;
		return '<div id="rsvpForm">' +
					'<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>' +
					'<form method="post" action="https://docs.google.com/macros/exec?service=AKfycbz_2rbiyARw1rHmRPWywxR_pBopy8238aNBHdz2oCf7AHusLw" name="theForm" id="theForm" target="hidden_iframe" id="GoogleForm">' +
					'Dear John and Steph,<br />' +
					'We are <input type="text" name="introAdjective" placeholder="Adjective"> to hear about your upcoming nuptials!<br />' +
					'<input type="text" name="names" placeholder="Your Names *" maxlength="500" required/> is/are ' +
					'<input type="text" name="adjective" placeholder="Adjective"> to ' +
					'<select name="attendance" required>' +
				 		'<option value="" disabled selected>Select *</option>' +
				 		'<option value="attend">attend</option>' +
						'<option value="miss">miss</option>' +
					'</select> the celebration. There is/are ' +
					'<input type="number" name="number" min="0" max="5" placeholder="# *" required/> attendee(s) in our party. ' +
					'<input type="number" name="numberFood" min="0" max="5" placeholder="#"> of us can\'t eat ' +
					'<input type="text" name="dietaryRestriction" placeholder="Dietary Restrictions" maxlength="500">.<br />' +
					'Dancing will only happen if ' +
					'<input type="text" name="songRequest" placeholder="Song/Artist" maxlength="500"> is heard. I/We ' +
					'<select name="shuttle">' +
						'<option value="" disabled selected>Select</option>' +
						'<option value="would like">would like</option>' +
						'<option value="will not need">will not need</option>' +
					'</select> a seat on the bus home.<br />' +
					'Sincerely,<br />' + name + '<br />' +				
                                        '<input type="hidden" name="code" value="">' +
                                        '<input type="hidden" name="response" value="">' +
					'<input type="button" value="Submit" class="submit"  onclick="postContactToGoogle();"/>' +
					'</form>' +
				'</div>';
	}
}

function checkCodeAndGetInvite() {
	$('#submitCode').prop("disabled", true);
	code = $('[name=code]').val();
	var valid = false;
	var rsvpd = false;
	var numInParty = 0;
	var guestSheet = 'https://spreadsheets.google.com/feeds/list/1Iyc7BBAluB1CHaR6DLWexZg1FZMgOsSpOu-LyDLQTzM/1/public/values?alt=json';
	$.getJSON(guestSheet).success(function(data) {
		var guests = data.feed.entry;
		for (var i = 0; i < guests.length; i++) {
			if (code.toUpperCase() == guests[i].gsx$code.$t.toUpperCase()) {
				valid = true;
				name = guests[i].gsx$name.$t;
				numInParty = guests[i].gsx$numberinparty.$t;
				break;
			}	
		}
		var responseSheet = 'https://spreadsheets.google.com/feeds/list/1Iyc7BBAluB1CHaR6DLWexZg1FZMgOsSpOu-LyDLQTzM/1/public/values?alt=json';
		$.getJSON(responseSheet).success(function(data) {
			var response = "";
			var responses = data.feed.entry;
			if (responses) {
				for (var j = 0; j < responses.length; j++) {
					if (code.toUpperCase() == responses[j].gsx$code.$t.toUpperCase() && responses[j].gsx$response.$t != "") {
						rsvpd = true;
						response = responses[j].gsx$response.$t;
						break;
					}	
				}
			}
			var invitedText = "";
				invitedText += '<h3>You\'re Invited!</h3>';

			var invite = 
					'<div id="invite">' +
						'<div id="upper_right"></div>' +
						'<div id="upper_left"></div>' +
						'<div id="lower_left"></div>' +
						'<div id="lower_right"></div>' +
						invitedText +
						'<p>Dear ' + name + ',</p>' +
						'<p>Stephanie Brennan &<br />' +
						'John Harte<br />' +
						'together with their families<br />' +
						'invite you to share and celebrate at their wedding</p>' +
						'<p>Saturday, the 20th of October 2018<br />' +
						'at two o\'clock in the afternoon</p>' +
						'<p>Sherbrooke Castle<br />' +
						'11 Sherbrooke Ave<br />' +
						'Glasgow, G41 4PG, Scotland</p>' +
						'<p>Dinner and dancing to follow<br />' +
					'</div>' +
					'<h3>Response Card</h3>' +
					'<p><b>Please respond by September 1, 2018</b></p><br />';
			if (valid && !rsvpd) {
				$('#codeEntry p').remove();
				$('#rsvp2 .content').html(invite + whichForm(numInParty) + 
											'<p><i>Fields with a * are required</i></p>'
										);
			} else if (valid && rsvpd) {
		        $('#codeEntry p').remove();
				$('#rsvp2 .content').html(invite +
					'<div id="rsvpForm">' +
						'<p style="text-align: center;"><b>You have already sent us your RSVP card, thank you! See below to review your response:</b></p>' +
						'<p>Dear John and Steph,</p>' +
						'<p>' + response + '</p>' +
						'<p>Sincerely,<br />' +
						name + '</p>' +
						'<p><i>Contact john@stephandjohn.co.uk if you need to make a change.</i></p>' +
					'</div>'
				);
				$('#submitCode').prop("disabled", false);
				clickOnEnter();
		    } else {
		    	$('#codeEntry p').remove();
				$('#codeEntry').append('<p>Sorry, that code is invalid</p>');
				$('#submitCode').prop("disabled", false);
				clickOnEnter();
		    }
		});
	});
}

function postContactToGoogle() {
	if ($('[name=names]').val() && $('[name=attendance]').val() && 
		((multiples && $('[name=number]').val()) || !multiples)) {
		var response = "";
		if (multiples) {
			if ($('[name=introAdjective]').val()) {
				response += "We are " + $('[name=introAdjective]').val() + " to hear about your upcoming nuptials!\n";
			}
			if ($('[name=adjective]').val()) {
				response += $('[name=names]').val() + " is/are " + $('[name=adjective]').val() + " to ";
			} else {
				response += $('[name=names]').val() + " is/are going to ";
			}
			response += $('[name=attendance]').val() + " the celebration. " +
				"There is/are " + $('[name=number]').val() + " attendee(s) in our party. ";
			if ($('[name=numberFood]').val() && $('[name=dietaryRestriction]').val()) {
				response += $('[name=numberFood]').val() + " of us can\'t eat " +
					$('[name=dietaryRestriction]').val() + ".\n";
			}
			if ($('[name=songRequest]').val()) {
				response += "Dancing will only happen if " + $('[name=songRequest]').val() + " is heard. ";
			}
			if ($('[name=shuttle]').val()) {
				response += "I/We " + $('[name=shuttle]').val() +
				" a seat on the shuttle from the King\'s Port Inn.";
			}
		} else {
			if ($('[name=introAdjective]').val()) {
				response += "I am " + $('[name=introAdjective]').val() + " to hear about your upcoming nuptials!\n";
			}
			if ($('[name=adjective]').val()) {
				response += $('[name=names]').val() + " is " + $('[name=adjective]').val() + " to ";
			} else {
				response += $('[name=names]').val() + " is going to ";
			}
			response += $('[name=attendance]').val() + " the celebration. ";
			if ($('[name=dietaryRestriction]').val()) {
				response += "I can\'t eat " + $('[name=dietaryRestriction]').val() + ".\n";
			}
			if ($('[name=songRequest]').val()) {
				response += "I will only dance if I hear " + $('[name=songRequest]').val() + ". ";
			}
			if ($('[name=shuttle]').val()) {
				response += "I " + $('[name=shuttle]').val() +
				" a seat on the shuttle to/from Ayr/Kilmarnock.";
			}
		}

		var thankText = "";
		
			thankText += '<svg width="253" height="75">';
			if (ieOrEdge) {
				thankText += '<text y="55" fill="#000033" font-size="50">';
			} else {
				thankText += '<text y="55" fill="none" stroke="#000033" stroke-width="1" font-size="50">';
			}
			thankText += 'Thank You!</text></svg>';
	
		 oFormObject = document.forms['theForm'];
         oFormObject.elements["code"].value = code;
         oFormObject.elements["response"].value = response;
	document.getElementById('theForm').submit();

		$('#rsvp2 .content p:last-child').remove();
		$('#rsvp2 .content #rsvpForm').html(
			thankText +
			'<p><b>Your response:</b></p>' +
			'<p>Dear John and Steph,</p>' +
			'<p>' + response + '</p>' +
			'<p>Sincerely,<br />' +
			name + '</p>' +
			'<p><b>You can review your response at any time by coming back and inputting your code.</b></p>' +
			'<p><i>Contact john@stephandjohn.co.uk if you need to make a change.</i></p>'
		);
	} else {
		alert("Please fill out all required fields");
		$('#rsvpForm input, #rsvpForm select').css("box-shadow", "initial");
		if (!$('[name=names]').val()) {
			$('[name=names]').css("box-shadow", "0 0 3px 1px #CC0000");
		}
		if (!$('[name=attendance]').val()) {
			$('[name=attendance]').css("box-shadow", "0 0 3px 1px #CC0000");
		}
		if (!$('[name=number]').val()) {
			$('[name=number]').css("box-shadow", "0 0 3px 1px #CC0000");
		}
	}
}
