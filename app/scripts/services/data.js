(function() {
    'use strict';

    angular
        .module('app')
        .factory('Data', Data);

    Data.$inject = ['$resource', '$http'];

    /* @ngInject */
    function Data($resource, $http) {

        var baseUrl = 'http://localhost:8080/';

        var service = {

            getContacts: function() {
              return $http({
                    method: 'GET',
                    url: baseUrl + 'contact'
                  }).then(function (response) {
                    return response.data;
                  }, function (error) {
                    return error;
                  });
            },

            getGroupes: function() {
              return $http({
                    method: 'GET',
                    url: baseUrl + 'groupe'
                  }).then(function (response) {
                    return response.data;
                  }, function (error) {
                    return error;
                  });
            },

            getContact: function(id) {
              return $http({
                    method: 'GET',
                    url: baseUrl + 'contact/'+id
                  }).then(function (response) {
                    return response.data;
                  }, function (error) {
                    return error;
                  });
            },

            getGroupe: function(id) {
              return $http({
                    method: 'GET',
                    url: baseUrl + 'groupe/'+id
                  }).then(function (response) {
                    return response.data;
                  }, function (error) {
                    return error;
                  });
            },

            postContact: function(data) {
              return $http({
                    method: 'POST',
                    url: baseUrl + 'contact',
                    data: data
                  }).then(function (response) {
                    console.log('POST réussi', response);;
                  }, function (error) {
                    return error;
                  });
            },

            postGroupe: function(data) {
              return $http({
                    method: 'POST',
                    url: baseUrl + 'groupe',
                    data: data
                  }).then(function (response) {
                    console.log('POST réussi', response);;
                  }, function (error) {
                    return error;
                  });
            },

            putContact: function(id, data) {
              return $http({
                    method: 'PUT',
                    url: baseUrl + 'contact/'+id,
                    data: data
                  }).then(function (response) {
                    console.log('POST réussi', response);;
                  }, function (error) {
                    return error;
                  });
            },

            putGroupe: function(id, data) {
              return $http({
                    method: 'PUT',
                    url: baseUrl + 'groupe/'+id,
                    data: data
                  }).then(function (response) {
                    console.log('POST réussi', response);;
                  }, function (error) {
                    return error;
                  });
            },

            deleteContact: function(id) {
              return $http({
                    method: 'DELETE',
                    url: baseUrl + 'contact/'+id
                  }).then(function (response) {
                    console.log('DELETE réussi', response);;
                  }, function (error) {
                    return error;
                  });
            },

            deleteGroupe: function(id) {
              return $http({
                    method: 'DELETE',
                    url: baseUrl + 'groupe/'+id
                  }).then(function (response) {
                    console.log('DELETE réussi', response);;
                  }, function (error) {
                    return error;
                  });
            }

        }
    return service;
  }
})();
