var arrEmployee;
$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
        console.log(result);
        arrEmployee= result;
        buildEmployeeCard();
        
})

function buildEmployeeCard(){
        $. each(arrEmployee,function(i,person){
                let strHTML='<div class="card mt-5 col-6 offset-3">';
                strHTML += '<h3 class="text-center mt-3"><a href="mailto: '+ person.Email + '"> ' + person.FirstName + ' ' + person.LastName +'</a></h3>';
                strHTML += '<h4 class="text-center">' + person.person +' </h4>';
                strHTML += '<h4 class="mt-3"> Profile Details </h4>';
                strHTML += '<p> Hire Date: '+ person.HireDate + '</p>';
                strHTML += '<p  class = "txtHourlyRate" data-rate= " '+ person.HourlyRate +'">Hourly Rate: ' + person.HourlyRate + '</p>';
                strHTML += '<h4 class="mt-3">pay Calculations</h4>';
                strHTML += '<div class="form-group mb-0">';
                strHTML += '<label class="mr-2">Hours worked</label>';
                strHTML += '<input class="txtHours">';
                strHTML += '</div>';
                strHTML += '<div class = "form-group">';
                strHTML += '<label class= "mr-2">Total Pay</label>';
                strHTML += '<input class="txtTotalPay" disabled>';
                strHTML += '<button class="btn btn-primary btn-black btnCalculatePay">Calculate pay</button>'
                strHTML += '</div>';
                strHTML += '</div>';
                $('#divEmployeeCards').append(strHTML)

                
        });

}
$(document).on('click','.btnCalculatePay', function(){
let decHours = $(this).closest('.card').find('.txtHours').val();
console.log(decHours);
let decRate = $(this).closest('.card').find('.txtHourlyRate').val().split (': ')[1];
console.log(decRate);
$(this).closest('.card').find('.txtTotalPay').val(decHours * decRate);

});