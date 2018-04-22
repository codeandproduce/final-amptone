var socket = io();
$('#emailContactForm').on('submit', function(e){
  e.preventDefault();
  socket.emit('contact-form-submit',{
    name: $('[name=nameInputContact]').val(),
    email:$('[name=emailInputContact]').val(),
    subject: $('[name=subjectInputContact]').val(),
    message: $('[name=messageInputContact]').val()
  });

});

socket.on('contact-form-processing', function(){
  $('#submitContactFormButton').text('Processing...');
  $('#submitContactFormButton').css('color','#0D121C');
  $('#submitContactFormButton').css('background-color','white');
  $('#submitContactFormButton').css('border-color', '#0D121C');
  $('#submitContactFormButton').attr('disabled','disabled');
});
socket.on('contact-form-success', function(){
  $('#emailContactForm').css('display','none');
  $('.contact-empty').toggleClass('contact-done');
});
socket.on('contact-form-failure', function(doc){
  alert('Submission failed. Error message: '+doc.err);
  $('#submitContactFormButton').css('color','white');
  $('#submitContactFormButton').css('background-color','#0D121C');
  $('#submitContactFormButton').removeAttr('disabled');
  $('#submitContactFormButton').text('Submit');
});
