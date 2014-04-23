/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function signinCallback(authResult) {

    if (authResult['access_token']) {

        gapi.auth.setToken(authResult);
        gapi.client.load('plus', 'v1', function() {
            getName();
        });

        getEmail();
        $('#info').show().data('loggedInWith', 'g+').text('Sign Out');
        $('#signinButton').css('display', 'none');

    } else if (authResult[ 'error' ]) {
        console.log('Sign-in state: ' + authResult[ 'error' ]);
    }
}

function disconnectUser(access_token) {
    var revokeUrl = 'https://accounts.google.com/o/oauth2/revoke?token=' + access_token;

    $.ajax({
        type: 'GET',
        url: revokeUrl,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(nullResponse) {
            $('#info').hide();
            $('#signinButton').show();
            alert('This app has had its G+ access revoked');
        },
        error: function(e) {
            console.log(e);
        }
    });
}

function getName() {

    var request = gapi.client.plus.people.get({'userId': 'me'});
    request.execute(function(resp) {
        var username = String(resp.displayName).split(' ');
        $('#name').text('User: ' + username[0] + ' ' + username[1]);
    });
}

function getEmail() {
    gapi.client.load('oauth2', 'v2', function() {
        var request = gapi.client.oauth2.userinfo.get({'userId': 'me'});
        request.execute(function(resp) {
            $('#email').text('Email: ' + resp['email']);
        });
    });
}

$('#revoke').click(function() {
    if ($(this).data('loggedInWith') === 'g+') {
        disconnectUser(gapi.auth.getToken().access_token);
    }

    $('#name').text('Name: ');
    $('#email').text('Email: ');
});
