<template>
  <div class="gathering-main-map">
    <div class="button-group">
      <button @click="changeSize(0)">Hide</button>
      <button @click="changeSize(600)">show</button>
      <button @click="displayMarker(markerPositions1)">marker set 1</button>
      <button @click="displayMarker(markerPositions2)">marker set 2</button>
      <button @click="displayMarker([])">marker set 3 (empty)</button>
      <button @click="displayInfoWindow">infowindow</button>
    </div>
    <div class="map_wrap">
      <div
        id="map"
        style="width: 100%; height: 100%; position: relative; overflow: hidden"
      ></div>

      <div id="menu_wrap" class="bg_white">
        <div class="option">
          <div>
            <!-- <form onsubmit="searchPlaces(); return false;"> -->
            키워드 :
            <input type="text" value="이태원 맛집" id="keyword" size="15" />
            <!-- <button type="submit">검색하기</button> -->
            <!-- </form> -->
            <button @click="searchPlaces()">검색하기</button>
          </div>
        </div>
        <hr />
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script src="./js/GatheringMainMap.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./scss/GatheringMainMap.scss";
</style>
