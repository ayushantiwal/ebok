// Stripe.setPublishablekey("pk_live_ukhbpeuIUK5ElzisXx2YgHO200mAShK5T6");

// var $form = $("#checkout-form");

// $form.submit(function (event) {
// 	$form.find("button").prop("disabled", true);
// 	Stripe.card.createToken({
// 		number: $("#card-number").val(),
// 		cvc: $("#card-cvc").val(),
// 		exp_month: $("#card-expiry-month").val(),
// 		exp_year: $("#card-expiry-year").val(),
// 		name: $("#card-name").val()
// 	}, stripeResponseHandler);
// 	return false;
// });

// function stripeResponseHandler(status, response) {
// 	if (response.error) {
// 		// show the error on the form
// 		$("#charge-error").text(response.error.message);
// 		$("#charge-error").removeClass('hidden');
// 		$form.find("button").prop("disabled", false);
// 	} else {
// 		// Get the token Id
// 		var token = response.id;

// 		// Insert the Token in the Form
// 		$form.append($('<input type="hidden" name="stripeToken" />').val(token));

// 		// Submit the form
// 		$form.get(0).submit();
// 	}
// }