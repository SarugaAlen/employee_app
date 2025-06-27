describe('EmployeeFactory', function() {
  var EmployeeFactory;
  var $httpBackend; 

  beforeEach(angular.mock.module('employeeFeature'));
  beforeEach(angular.mock.inject(function(_EmployeeFactory_, _$httpBackend_) {
    EmployeeFactory = _EmployeeFactory_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should retrieve a list of employees', function() {
    var expectedEmployees = [
      { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
      { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' }
    ];

    $httpBackend.expectGET('https://jsonplaceholder.typicode.com/users')
      .respond(200, expectedEmployees);

    var employees;
    EmployeeFactory.getEmployees().then(function(data) {
      employees = data;
    });

    $httpBackend.flush();
    expect(employees).toEqual(expectedEmployees);
  });

  it('should handle error when retrieving employees', function() {
    $httpBackend.expectGET('https://jsonplaceholder.typicode.com/users')
      .respond(500, { message: 'Server error' });

    var errorData;
    EmployeeFactory.getEmployees().catch(function(error) {
      errorData = error;
    });

    $httpBackend.flush();
    expect(errorData.status).toBe(500);
    expect(errorData.data.message).toBe('Server error');
  });


  it('should delete an employee by ID', function() {
    var employeeIdToDelete = 1;

    $httpBackend.expectDELETE('https://jsonplaceholder.typicode.com/users/' + employeeIdToDelete)
      .respond(200, {});

    var success = false;
    EmployeeFactory.deleteEmployee(employeeIdToDelete).then(function() {
      success = true;
    });

    $httpBackend.flush();
    expect(success).toBe(true);
  });

  it('should handle error when deleting an employee', function() {
    var employeeIdToDelete = 999; 

    $httpBackend.expectDELETE('https://jsonplaceholder.typicode.com/users/' + employeeIdToDelete)
      .respond(404, { message: 'Employee not found' });

    var errorData;
    EmployeeFactory.deleteEmployee(employeeIdToDelete).catch(function(error) {
      errorData = error;
    });

    $httpBackend.flush();
    expect(errorData.status).toBe(404);
    expect(errorData.data.message).toBe('Employee not found');
  });

});