$(function(){
        $('#btnTest').click(function(){
                $('#divEmployeeCards').slideToggle();
                $('#divEmployeeTable').slideToggle();
        });
});

var arrEmployee;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
        console.log(result);
        arrEmployee= result;
        buildEmployeeCard();
        
})

function buildEmployeeCard(){
        $. each(arrEmployee,function(i,person){
                let strHTML='<div class="card mt-5 col-3 ">';
                strHTML += '<img src="images/profile.png" alt="Profile Image" style="margin:auto; max-width:100%;">';
                strHTML += '<h3 class="text-center mt-3"> ' + person.FirstName + ' ' + person.LastName +'</a></h3>';
                strHTML += '<h4 class="text-center">' + person.Title +' </h4>';
                strHTML += '<h5 class="mt-3"> Contact Details </h5>';
                strHTML += '<p class="mt-0 mb-0"> phone Number: '+ person.HomePhone + '</p>';
                strHTML += '<p class="mt-0 mb-0"> Email:'+ person.Email + '</p>';
                strHTML += '<h5 class="mt-3"> Address </h5>';
                strHTML += '<p class="mt-0 mb-0"> '+ person.StreetAddress1 + '</p>'; 
                strHTML += '<h5 class="mt-3"> Pay Details</h5>';
                strHTML += '<p class="mt-0 mb-0">Pay Rate: '+ person.HourlyWage + '</p>';
                strHTML += '<p class="mt-0 mb-0">Hours Worked: '+ person.Hours + '</p>';
                strHTML += '<p class="mt-0 mb-0">Tax Rate: '+ person.TaxRate + '</p>';
                strHTML += '<div class="form-group">';
                strHTML += '<label class= "mr-2">Hours</label>';
                strHTML += '<input class="txtHours" disabled>';
                strHTML += '<input type="number" class="form-control" id="txtPayGoal" placeholder="Pay Goal">';
                strHTML +=  '</div>';
                strHTML += '<button class="btn btn-lg btn-primary mb-3 mt-3 btnFindGoal"> FIND HOURS FOR GOAL </button>'
               $('#divEmployeeCards').append(strHTML)
               $('#tblEmployess tbody').append('<tr><td>'+ person.FirstName +' </td><td>' + person.LastName +'</td><td>'+ person.Title +'</td></tr>');

        })
        $('#tblEmployess').DataTable();



}
$(document).on('click','.btnFindGoal', function(){
        let decHours = $(this).closest('.card').find('.txtPayGoal').val();
        console.log(decHours);
        //...
        
        }); 


