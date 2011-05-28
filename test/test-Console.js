var TestConsole = require("Console").Console;
var testRunner, remaininTests;

exports.test_log_array = function(test) {
    testRunner = test;
    var status = "OK!", default_status = status;
    //define an  array
    var jarray = ['baba','kaka', 'tete'];
    try {
        TestConsole.log(jarray);
    }
    catch(e) {
        status = e.toString();
    }
    test.assertEqual(default_status, status);
}

exports.test_log_string = function(test) {
    //define a string
    var status = "OK!", default_status = status;
    var jstring = "I love Open Web!"; 
    
    //write a line of text
    try {
        TestConsole.log(jstring);    
    }
    catch(e) {
        status = e.toString();
    }
    test.assertEqual(default_status, status);
}

