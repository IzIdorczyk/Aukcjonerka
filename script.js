// ==UserScript==
// @name         Aukcjonerka
// @author       IzI
// @description  Dodatek do gry Margonem
// @version      0.1
// @match        *://*.margonem.pl/
// @match        *://*.margonem.com/
// @icon         https://micc.garmory-cdn.cloud/obrazki/npc/kob/npc42.gif
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {

    function find(item){
        window.Engine.auctions.getAuctionSort().callChangeSort(`1`);
        document.querySelector('.auction-search-item .first-column-bar-search .item-name-wrapper input').value = item;
        document.querySelector('.auction-search-item .third-column-bar-search .refresh-button-wrapper .button').click();
    }

    // struktura HTML
    $(".inventory_wrapper").append(`
      <div id="aukcjonerka_box">
      </div>
    `);

    $(document).ready(function () {
    $('#aukcjonerka_box').droppable({
    drop:function(event,ui){
      var name = $(ui.draggable).data('name');
        if (Engine.auctions){
            find(name);
        }
    }
  });
});

    // przypisz elementy do obiektu
    document.querySelector('#aukcjonerka_box')


    // style
    var stylesheet = document.createElement('style')
    stylesheet.appendChild(document.createTextNode(`
      #aukcjonerka_box {
        position: absolute !important;
        left: 76px;
        top: -48px;
        width: 32px;
        height: 48px;
      }

      #aukcjonerka_box:before {
        // Aukcjoner content:url(https://micc.garmory-cdn.cloud/obrazki/npc/mez/npc393.gif);
        content:url(https://micc.garmory-cdn.cloud/obrazki/npc/kob/npc42.gif);
      }

    `))
    document.body.appendChild(stylesheet)
  //}



})();
