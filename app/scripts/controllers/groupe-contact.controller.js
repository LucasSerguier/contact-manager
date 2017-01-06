'use strict';

angular.module('app')
  .controller('GroupeContactCtrl', function ($location, $state, Groupe, $timeout) {
    var vm = this;

    if($state.params.id){
      Groupe.get({ id: $state.params.id }, function(data) {
        vm.groupe = data;
      });
    }

    vm.saveGroupe = function(groupe) {
        if($state.params.id){
          Groupe.update({ id: groupe.id }, groupe);

          $timeout(function () {
              $state.go('liste');
          }, 100);
        }else{
          Groupe.save(groupe);

           $timeout(function () {
            $state.go('liste');
          }, 100);

        };
     }
  });
