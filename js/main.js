  for(const song of playlist){
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="p-3 bg-light rounded-3 border mb-3">
        <div class="row">
          <div class="col-md-4 col-lg-6 align-middle">
            <div class="text-center">
              <h2 class="display-10 fw-medium mb-0 mt-1">${song['name']}</h2>
            </div>
          </div>
          <div class="col-md-8 col-lg-6">
              <div class="player float-start">
                <audio src="${song['link']}">
                </audio>
              </div>
          </div>
        </div>
      </div>
   `;
    document.getElementById("sl").appendChild(div);
  }

  GreenAudioPlayer.init({
      selector: '.player', // inits Green Audio Player on each audio container that has class "player"
      stopOthersOnPlay: true
  });

  $(document).ready(function(){
      let allmusic = $("audio")
      let current_audio = null;
      $("#shuffle").on("click", function(){
        GreenAudioPlayer.stopOtherPlayers()
        $("audio").on("ended", function(){
          GreenAudioPlayer.stopOtherPlayers()
          do {
            next = allmusic[Math.floor(Math.random() * allmusic.length)];
          } while(next==this)
          GreenAudioPlayer.playPlayer(next);
        })
        GreenAudioPlayer.playPlayer(allmusic[Math.floor(Math.random() * allmusic.length)]);
      })
  })
  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
