var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function ($scope) {
    $scope.gridOptions = {
        data: 'myData',
        enablePinning: true,
        columnDefs: [{ field: "Id", width: 120, pinned: true },
        { field: "FirstName", width: 120 },
        { field: "LastName", width: 120 },
        { field: "Email", width: 200 },
        { field: "PhoneNumber", width: 120 },
        { field: "AmountDue", width: 120 },
        { field: "PaymentDueDate", width: 200 },
        { field: "AccountStatusId", width: 130 }]
};
$scope.myData = [{ "Id": 1, "FirstName": "Emma", "LastName": "Smith", "Email": "emma.smith@email.com", "PhoneNumber": "555-555-9483", "AmountDue": "$84.22", "PaymentDueDate": "07/07/2020", "AccountStatusId": 0 },
    { "Id": 2, "FirstName": "Noah", "LastName": "Johnson", "Email": "noah.johnson@email.com", "PhoneNumber": "555-555-7383", "AmountDue": "$123.76", "PaymentDueDate": "07/22/2020", "AccountStatusId": 0 },
    { "Id": 3, "FirstName": "Abigail", "LastName": "Williams", "Email": "abigail.williams@email.com", "PhoneNumber": "555-555-3928", "AmountDue": "$42.45", "PaymentDueDate": "07/19/2020", "AccountStatusId": 0 },
    { "Id": 4, "FirstName": "Mason", "LastName": "Brown", "Email": "mason.brown@email.com", "PhoneNumber": "555-555-0394", "AmountDue": "$0.0", "PaymentDueDate": null, "AccountStatusId": 1 },
    { "Id": 5, "FirstName": "Emily", "LastName": "Miller", "Email": "emily.miller@email.com", "PhoneNumber": "555-555-6958", "AmountDue": "$355.67", "PaymentDueDate": "07/07/2016", "AccountStatusId": 2 },
    { "Id": 6, "FirstName": "Michael", "LastName": "Davis", "Email": "michael.davis@email.com", "PhoneNumber": "555-555-0394", "AmountDue": "$0.0", "PaymentDueDate": null, "AccountStatusId": 1 },
    { "Id": 7, "FirstName": "Joshua", "LastName": "Garcia", "Email": "joshua.garcia@email.com", "PhoneNumber": "555-555-9283", "AmountDue": "$98.35", "PaymentDueDate": "06/24/2020", "AccountStatusId": 2 },
    { "Id": 8, "FirstName": "Dana", "LastName": "Mills", "Email": "dana.mills@email.com", "PhoneNumber": "555-555-6958", "AmountDue": "$299.67", "PaymentDueDate": "09/11/2020", "AccountStatusId": 2 },
    { "Id": 9, "FirstName": "Mark", "LastName": "Davies", "Email": "mark.davies@email.com", "PhoneNumber": "555-555-0394", "AmountDue": "$0.0", "PaymentDueDate": null, "AccountStatusId": 1 },
    { "Id": 10, "FirstName": "George", "LastName": "Washington", "Email": "george.washington@email.com", "PhoneNumber": "555-555-9283", "AmountDue": "$98.35", "PaymentDueDate": "07/07/2020", "AccountStatusId": 2 }];
});