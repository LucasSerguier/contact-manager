(function() {
    'use strict';

    angular
        .module('app')
        .factory('Contact', Contact);

    Contact.$inject = ['$resource', '$http'];

    /* @ngInject */
    function Contact($resource, $http) {
        return $resource("http://localhost:8080/contact/:id", null,
            {
                'update': { method:'PUT' }
            });
    }

})();
