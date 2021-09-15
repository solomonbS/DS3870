var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getEmployeesByAPIKey.php?APIKey=Mickey2021!", function(result){
        console.log(result);
        arrEmployees= result;
        buildEmployeeCard()
        $. each(result,function(i,person){
                console.log(person.FirstName);
                console.log(person.FirstName + ' ' + person.LastName);
                $('#txtEmail').Val(person.Email);

        })
})

function buildEmployeeCard(){
        $. each(result,function(i,person){
                let strHTML='<div class="card mt-5 col-6 offset-3">';
                strHTML += '<h3 class="text-center mt-3"><a href="mailto: syubahwe@tntech.edu">'+ person.FirstName + ' ' + person.LastName + ' </a></h3>';
                strHTML += '<h4 class="text-center"> Systems Analyst 2 </h4>';
                strHTML += '<h4 class="mt-3"> Profile Details </h4>';
                strHTML += '<p> Phone: (931) 372-9999 </p>';
                strHTML += '<p> Address: 596 Southern Lane, Cookeville, TN 38505 </p>';
                strHTML += '<p> Assigment: Clent Hall </p>';
                strHTML += '<div class="form-group">';
                strHTML += '<label for= "txtPayRate">Pay Rate</label>';
                strHTML += '<input id="txtPayRate">';
                strHTML += '</div>';
                strHTML += '</div>';
        });

}

$('#btnTest').click(function(){
        const decTaxRate = .0925;
        let decHours = $('#txtHours').Val();
        let decRate = $('#txtPayRate').Val();
        console.log(decHours * decRate);

});