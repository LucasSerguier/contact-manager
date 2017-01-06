'use strict';

angular.module('app')
  .controller('ContactCtrl', function ($location, $state, Contact, Groupe, $timeout) {
    var vm = this;

    if($state.params.id){
        Contact.get({ id: $state.params.id }, function(data) {
          vm.contact = data;
        });
    }

    function getGroupes() {
      Groupe.query(function(data) {
        console.log('groupe', data);
        vm.groupes = data;
      });
    };

    vm.showInput = function() {
        vm.show_input = true;
    }

    vm.saveContact = function(contact) {
        if($state.params.id){

        Contact.update({ id: contact.id }, contact);

        $timeout(function () {
            $state.go('contact-list');
        }, 100);

        }else{

            Contact.save(contact);
             $timeout(function () {
              $state.go('contact-list');
            }, 100);

           };
     }

     vm.addGroup = function(groupe) {
       Groupe.save(groupe);
       vm.groupe = null;
       vm.show_input = false;
       $timeout(function () {
         getGroupes();
      }, 100);
     }

     var init = function() {
       getGroupes();
     }

     init();


  });
