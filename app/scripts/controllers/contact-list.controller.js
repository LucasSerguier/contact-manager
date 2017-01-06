'use strict';

angular.module('app')
  .controller('ListeContactCtrl', function ($http, $state, Contact, Groupe, $timeout) {
    var vm = this;

      vm.getContacts = function() {
        Contact.query(function(data) {
          vm.contacts = data;
          vm.nbContacts = data.length;
        });
      };

      vm.getContactByGroupe = function (id) {
          $state.go('contact-list.groupe', {id: id});

          Contact.query(function(data) {
            var contacts = [];
            for(var i=0; i<data.length; i++){
              if(data[i].groupe == id){
                contacts.push(data[i]);
              }
            }
            vm.contacts = contacts;
            console.log('contact', contacts);
          });
      }

      vm.getGroupes = function() {
        Groupe.query(function(data) {
          vm.groupes = data;
        });
      };


       vm.deleteContact = function(id) {
         Contact.delete({ id: id });
         $timeout(function () {
          vm.getContacts();
        }, 300);
       };

        vm.deleteGroupe = function() {

          Groupe.delete({ id: $state.params.id });
          $timeout(function () {
           vm.getGroupes();
           $state.go("contact-list");
          }, 300);
         };


    vm.editerContact = function(contact) {
        $state.go("contact-add.editer", {id: contact.id});
    }


    var init = function () {
      vm.getContacts();
      vm.getGroupes();
    };

    init();



});
