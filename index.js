// get status default

 


// check status when click toggle button

$("#switch").click(function () {

  let toggleClickStatus = $(":checkbox").is(":checked");
  console.log('toggleClickStatus',toggleClickStatus);

  if (toggleClickStatus === true) {
    $(".pricing-pro").text(`$24.99`);
    $(".pricing-master").text(`$39.99`);
    $(".pricing-basic").text(`$19.99`);

  } else {
    $(".pricing-pro").text(`$249.99`);
    $(".pricing-master").text(`$399.99`);
    $(".pricing-basic").text(`$199.99`);
  }
});


