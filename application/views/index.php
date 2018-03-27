<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Ninja Gold</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta Http-Equiv="Pragma" Content="no-cache">
        <meta Http-Equiv="Expires" Content="0">
        <meta Http-Equiv="Pragma-directive: no-cache">
        <meta Http-Equiv="Cache-directive: no-cache">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
    </head>
    <body>

        <div id="fadebg"></div>

        <div class="container">

            <audio id="music" loop autoplay>
              <source src="assets/mp3/ninjagoldmusic.mp3">
              Your browser does not support the audio tag.
            </audio>

            <audio id="gold_fx">
              <source src="assets/mp3/gold.mp3">
              Your browser does not support the audio tag.
            </audio>

            <audio id="swipe_fx">
              <source src="assets/mp3/swipe.mp3">
              Your browser does not support the audio tag.
            </audio>

            <div class="row" id="top_row">
                <div class="col-xs-12">
                    <img id="ninja_gold_title" src="assets/img/ninja_gold_title.png" alt="Ninja Gold">
                    <p id="activities" class="<?= $this->session->userdata('activities')[1] ?>"><?= $this->session->userdata('activities')[0] ?></p>
                    <h1 id="gold">Gold: <?= $this->session->userdata('gold') ?></h1>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-6 col-md-3 top_location_row">
                    <h2>Farm</h2>
                    <p>Earns 10-20 golds</p>
                    <button id="farm" type="button">Find Gold!</button>
                </div>
                <div class="col-xs-6 col-md-3 top_location_row">
                    <h2>Cave</h2>
                    <p>Earns 5-10 golds</p>
                    <button id="cave" type="button">Find Gold!</button>
                </div>
                <div class="col-xs-6 col-md-3">
                    <h2>House</h2>
                    <p>Earns 2-5 golds</p>
                    <button id="house" type="button">Find Gold!</button>
                </div>
                <div class="col-xs-6 col-md-3">
                    <h2>Casino</h2>
                    <p>Earns/Loses 0-50 golds</p>
                    <button id="casino" type="button">Find Gold!</button>
                </div>
            </div>

            <div class="row music_fx_row">
                <div class="col-xs-12">
                    <button id="music_button">Stop Music</button>
                    <button id="fx_button">Stop FX</button>
                </div>
            </div>

        </div>

        <script src="assets/js/ninja_gold.js"></script>

    </body>
</html>