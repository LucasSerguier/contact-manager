(function() {
    'use strict';

    angular
        .module('app')
        .factory('Groupe', Groupe);

    Groupe.$inject = ['$resource'];

    /* @ngInject */
    function Groupe($resource) {
        return $resource("http://localhost:8080/groupe/:id", null,
            {
                'update': { method:'PUT' }
            });
    }

})();
