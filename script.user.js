// ==UserScript==
// @name         Aukcjonerka
// @author       IzI
// @description  Dodatek do gry Margonem
// @version      0.3
// @match        *://*.margonem.pl/
// @match        *://*.margonem.com/
// @icon         https://micc.garmory-cdn.cloud/obrazki/npc/kob/npc42.gif
// @run-at       document-idle
// @namespace    https://github.com/IzIdorczyk/Aukcjonerka/raw/master/script.user.js
// ==/UserScript==

(function() {

    function find(item){
        document.querySelector('.auction-window .cards-header-wrapper .cards-header .card ').click();
        document.querySelector('.auction-search-item .first-column-bar-search .item-name-wrapper input').value = item;
        document.querySelector('.auction-search-item .third-column-bar-search .refresh-button-wrapper .button').click();
        var str = window.Engine.auctions.getAuctionSearchItems().getFilterString();
        var n = str.lastIndexOf('|');
        var result = str.substring(n + 1);
        window._g(`ah&cat=0&filter=||||||0|4|0|1|${result}&sort=3|1`);
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
