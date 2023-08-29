import React, { useState } from 'react';
import Little from './Little';

const Skills = () => {
  const [selectedKind, setSelectedKind] = useState(null);

  const handleKindClick = (kind) => {
    setSelectedKind(kind);
  };

  return (
    <div id="Skills" style={{ height: "800px", padding: "7% 0" }}>
      <h1 className="new-h1">Kitaplığım</h1>

      <div className='little-div-pacet gap'>
        <div className='books' id="Rap" onClick={() => handleKindClick("Rap")}>
          <img src='rap.png' alt='alt' />
        </div>

     	<div className='books' id="Rock" onClick={() => handleKindClick("Rock")}>
          <img src='rock.png' alt='alt' />
        </div>

        <div className='books' id="R&B" onClick={() => handleKindClick("R&B")}>
          <img src='rb.png' alt='alt' />
        </div>

        <div className='books' id="Pop" onClick={() => handleKindClick("Pop")}>
          <img src='pop.png' alt='alt' />
        </div>

        {/* <div className='books' id="Caz" onClick={() => handleKindClick("Caz")}>
          <img src='caz.png' alt='alt' />
        </div> */}

     	<div className='books' id="ElektroDans" onClick={() => handleKindClick("ElektroDans")}>
          <img src='electrodance.png' alt='alt' />
        </div>

     	<div className='books' id="Alternatif" onClick={() => handleKindClick("Alternatif")}>
          <img src='alternatif.png' alt='alt' />
        </div>

     	<div className='books' id="Arabesk" onClick={() => handleKindClick("Arabesk")}>
          <img src='arabesk.png' alt='alt' />
        </div>
      </div>

      <div className='little-div-pacet'>
        {selectedKind === "Rap" && (
        <>
          <Little title="Blackway & Black Caviar" text="What's Up Danger?" id="Rap" music="blackway.mp3" image="https://i.discogs.com/U8yh1_RvxRKuj8jFkHCVCuFwPkH-DUrjFrkarI7c6_I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTQ2/Nzg0LTE1NDUwODg4/MDYtNDU4My5qcGVn.jpeg" />
          <Little title="KÖK$VL" text="Sen Mİ Ben Mİ?" id="Rap" music="senmibenmi.mp3" image="koksal.jpeg"/>
        </>
        )}

       {selectedKind === "Rock" && (
        <>
          <Little title="Blackway & Black Caviar" text="What's Up Danger?" id="Rock" music="blackway.mp3" image="https://i.discogs.com/U8yh1_RvxRKuj8jFkHCVCuFwPkH-DUrjFrkarI7c6_I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTQ2/Nzg0LTE1NDUwODg4/MDYtNDU4My5qcGVn.jpeg" />
          <Little title="KÖK$VL" text="Sen Mİ Ben Mİ?" id="Rock" music="senmibenmi.mp3" image="koksal.jpeg"/>
        </>
        )}

        {selectedKind === "Pop" && (
          <>
            <Little title="Carla Morrison" text="Disfruto" id="Pop" music="disfruto.mp3" image="https://i1.sndcdn.com/artworks-zFgejISeUBD2u9Xi-YRzsZQ-t500x500.jpg"/>
            <Little title="Cupido" text="Im Good (Blue)" id="Pop" music="good.mp3" image="https://images.genius.com/f4eacd64dc39815cf3b789fc21b3e3b2.1000x1000x1.png"/>
            {/* <Little title="Mild High Club" text="Homage" id="Pop" music="homega.mp3" image="https://i.ytimg.com/vi/oRGDhgITetc/sddefault.jpg"/>
      	    <Little title="Derya Uluğ" text="Nefes" id="Pop" music="nefes.mp3" image="https://radyoviva.com.tr/wp-content/uploads/2023/07/4-scaled.jpg"/>
            <Little title="Gökhan Türkmen" text="İhtimaller Perisi" id="Pop" music="ihtimaller.mp3" image="https://i.ytimg.com/vi/rDYFw_xW8MM/maxresdefault.jpg"/>
            <Little title="Emir Can İğrek" text="Beyaz" id="Pop" music="beyaz.mp3" image="https://cdn.powergroup.com.tr/image/0x0/powerturk/u/Contents/e/m/emir-745x465-1654843925.png"/>
            <Little title="Irmak Arıcı" text="Eften Püften" id="Pop" music="eftenpuften.mp3" image="https://www.sozmuzik.com/wp-content/uploads/2023/07/irmak_arici1-640x640.jpg"/>
            <Little title="Oğuzhan Koç" text="Yok Mu?" id="Pop" music="yokmu.mp3" image="https://www.sozmuzik.com/wp-content/uploads/2023/07/oguzhan_koc18-640x640.jpg"/>
            <Little title="Simge" text="Harcandıkça" id="Pop" music=".mp3" image="https://images.genius.com/f8370bf3162236595bc5bead5e53ab27.1000x1000x1.jpg"/>
            <Little title="Sıla Şahin" text="Yaz Kenara" id="Pop" music="yazkenara.mp3" image="https://i.ytimg.com/vi/0DbcsEILLYU/maxresdefault.jpg"/>
            <Little title="Mabel Matiz" text="Numaracı" id="Pop" music="numaracı.mp3" image="https://i.ytimg.com/vi/_7hNoxXoJTo/maxresdefault.jpg"/>
            <Little title="Semicenk" text="Geri Dönemedim" id="Pop" music="geridönemedim.mp3" image="https://ia.tmgrup.com.tr/ba5e54/1160/650/0/0/2048/1148?u=https://i.tmgrup.com.tr/rt/2023/05/08/semicenk-geri-donemedim-1683527940527.jpg"/>
            <Little title="Bilal Sonses" text="İki Kadeh" id="Pop" music="ikikadeh.mp3" image="https://images.genius.com/682e7d60a6e59541877b56569de4c432.1000x1000x1.jpg"/>
            <Little title="Özgün" text="İmtiyaz" id="Pop" music="imtiyaz.mp3" image="https://showradyo.com.tr/wp-content/uploads/2023/08/Ozgun-kapak.jpg"/>
            <Little title="Buray" text="Olmuşum Leyla" id="Pop" music="olmusumleyla.mp3" image="https://i1.sndcdn.com/artworks-j0IzobZsVMMI-0-t500x500.jpg" />
            <Little title="Murat Boz" text="Harbi Güzel" id="Pop" music="harbiguzel.mp3" image="https://i.scdn.co/image/ab67616d0000b27338d487a236c25e08f52464c9" />
            <Little title="Edis & Gülşen" text="Sor" id="Pop" music="sor.mp3" image="https://www.snobmagazin.com/images/haberler/2023/08/edis-ve-gulsen-sor-ile-dunya-listesinde-zKgYG.jpg"/>
            <Little title="Aleyna Tilki" text="Başıma Belasın" id="Pop" music="basimabelasin.mp3" image="https://tr.web.img4.acsta.net/pictures/20/12/28/09/07/1817655.jpg"/>
            <Little title="Hande Ünsal" text="Sen Yokken" id="Pop" music="senyokken.mp3" image="https://www.muzikhabercisi.com/image/upload/2022/10/14/p_795634990b0e7f41-600x400.jpg"/>
            <Little title="Çağan Şengül" text="Çok Yazık" id="Pop" music="cokyazik.mp3" image="https://yt3.googleusercontent.com/BB9ALVgBQLod540EUNAz75G9Cwvmw-iJAP6wu7Rqn5LJIAo5-lZH767kxinQ4aeUbj_KlTNkXw=s900-c-k-c0x00ffffff-no-rj"/>	  
	          <Little title="Beach House" text="Space Song" id="Pop" music="spacesong.mp3" image="https://i.ytimg.com/vi/RBtlPT23PTM/maxresdefault.jpg"/> */}
	      </>
        )}

        {selectedKind === "R&B" && (
          <>
	          <Little title="Amy Winehous" text="Back To Black" id="R&B" music="back.mp3" image="https://upload.wikimedia.org/wikipedia/tr/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png"/>
            <Little title="Mert Demir" text="İkimize Birden" id="R&B" music="ikimizebirden.mp3" image="https://mp3kutu.com/album/mert-demir-ikimize-birden.jpg" />
            {/* <Little title="Evdeki Saat" text="Uzunlar" id="R&B" music="uzunlar.mp3" image="https://www.dergy.com/wp-content/uploads/2020/02/evdeki-saat-2.png" />
            <Little title="The Chainsmokers" text="Something Just Like This" id="R&B" music="chainsmokers.mp3" image="https://upload.wikimedia.org/wikipedia/tr/5/57/Something_Just_Like_This.png" />
            <Little title="Tekir & Bedo" text="Benden Uzak Dur" id="R&B" music="bendenuzakdur.mp3" image="https://www.gulum.net/images/haberler/2023/07/bedo-ve-tekir-benden-uzak-dur-sarki-sozu-1090_1.jpg"/>
            <Little title="Kerim Araz & Sevgim Yılmaz" text="Dayanamıyorum" id="R&B" music="dayanamıyorum.mp3" image="https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/94/b3/9f/94b39fe4-f9b1-8ac1-3a84-e687e07a6c39/cover.jpg/600x600bf-60.jpg"/>
            <Little title="Burak Bulut" text="Gecelere Sor" id="R&B" music="geceleresor.mp3" image="https://64.media.tumblr.com/23bc6c20774eff9e215000c0658cdd04/07ecd153bda96385-1b/s540x810/9c579d6d90ba5cfbd14bb4460e2b4a77f426054d.jpg"/>
	          <Little title="Burak Bulut & Kurtuluş Kuş" text="Manolya" id="R&B" music="manolya.mp3" image="https://i1.sndcdn.com/artworks-iNzkpxtj8VNNRSDc-oG0rQg-t500x500.jpg"/>  */}
	      </>
        )}

        {selectedKind === "Alternatif" && (
          <>
            <Little title="Maroon 5" text="Maps" id="Alternatif" music="maroon.mp3" image="https://i1.sndcdn.com/artworks-000088420306-xdledh-t500x500.jpg"/>
          </>
        )}

        {selectedKind === "Arabesk" && (
          <>
            <Little title="Derya Bedavacı" text='Tövbe' id="Arabesk" music="tovbe.mp3" image="https://i.scdn.co/image/ab67616d0000b273a7e06ade75166a22e05c4c9b"/>
          </>
        )}

        {selectedKind === "ElektroDans" && (
          <>
            <Little title="Alan Walker" text="Not You" id="ElektroDans" music="notyou.mp3" image="https://images.genius.com/30c87c5a9e1af1321c5a5aed79b19ad3.899x899x1.jpg"/>
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
