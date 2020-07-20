(function() {
  "use strict";

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {

    var buy=this;
    buy.items=ShoppingListCheckOffService.getitems();
    buy.purchaseIt=function (itemIndex) {
      ShoppingListCheckOffService.purchased(itemIndex);
      }


  }
  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought=this;
    bought.pur=ShoppingListCheckOffService.pur();

  }
  function ShoppingListCheckOffService() {
      var service=this;
      var item=[
        {
          name:"Cookies",
          quantity:"10"
        },
        {
          name:"Chips",
          quantity:"10"
        },
        {
          name:"Broonie",
          quantity:"10"
        },
        {
          name:"Cake",
          quantity:"5"
        },
        {
          name:"Pudding",
          quantity:"7"
        },
      ];
     
      var purchase=[];
      service.pur=function () {
        return purchase;
      };
      service.getitems=function () {
        return item;
      };
      service.purchased=function(itemIndex){
        var purchaseItem={
          name : item[itemIndex].name,
          quantity : item[itemIndex].quantity
        };
        purchase.push(purchaseItem);
        item.splice(itemIndex,1);
      }
  }

})();
