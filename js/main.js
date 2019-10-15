"use strict";
  function init0map() {
    // html表示場所の宣言
    var map0target = document.getElementById('map0box');
      
    var lat0lng = {lat: 35.667519, lng: 139.714093};

    var map0 = new google.maps.Map(map0target, {center: lat0lng, zoom: 16});
      
    var marker0 = new google.maps.Marker({
      position: lat0lng, 
      map: map0, 
      title: "チーズアカデミー",
      animation: google.maps.Animation.BOUNCE,
      icon: {url: 'img/c.png', scaledSize: new google.maps.Size(24, 24)},
      optimized: false 
    })
  }