import React from 'react';
import Little from './Little';

const numberCount = 6; // Toplamda kaç farklı number değeri olacağını belirtin

const numberValues = Array.from({ length: numberCount }, (_, numberCount) => numberCount.toString());

const Skills = () => {

  return (
    <div id="Skills" style={{height: "800px", padding: "7% 0" }}>
      <h1 className="new-h1">Choices</h1>
      <div className='little-div-pacet'>
        <Little title="Mert Demir" text="İkimize Birden" number={numberValues} music="ikimizebirden.mp3" image="https://mp3kutu.com/album/mert-demir-ikimize-birden.jpg"/>

        <Little title="Buray" text="Olmuşum Leyla" number={numberValues} music="olmusumleyla.mp3" image="https://i1.sndcdn.com/artworks-j0IzobZsVMMI-0-t500x500.jpg"/>

        <Little title="Murat Boz" text="Harbi Güzel" number={numberValues} music="harbiguzel.mp3" image="https://i.scdn.co/image/ab67616d0000b27338d487a236c25e08f52464c9"/>

        <Little title="Evdeki Saat" text="Uzunlar" number={numberValues} music="uzunlar.mp3" image="https://www.dergy.com/wp-content/uploads/2020/02/evdeki-saat-2.png"/>

        <Little title="The Chainsmokers" text="Something Just Like This" number={numberValues} music="chainsmokers.mp3" image="https://upload.wikimedia.org/wikipedia/tr/5/57/Something_Just_Like_This.png"/>
 
        <Little title="Blackway & Black Caviar" text="What's Up Danger?" number={numberValues} music="blackway.mp3" image="https://i.discogs.com/U8yh1_RvxRKuj8jFkHCVCuFwPkH-DUrjFrkarI7c6_I/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyOTQ2/Nzg0LTE1NDUwODg4/MDYtNDU4My5qcGVn.jpeg"/>

        <Little title="Alan Walker" text="Not You" number={numberValues} music="notyou.mp3" image="https://images.genius.com/30c87c5a9e1af1321c5a5aed79b19ad3.899x899x1.jpg"/>

        <Little title="Maroon 5" text="Maps" number={numberValues} music="maroon.mp3" image="https://i1.sndcdn.com/artworks-000088420306-xdledh-t500x500.jpg"/>
 
        <Little title="Edis & Gülşen" text="Sor" number={numberValues} music="sor.mp3" image="https://www.snobmagazin.com/images/haberler/2023/08/edis-ve-gulsen-sor-ile-dunya-listesinde-zKgYG.jpg"/>

        <Little title="Aleyna Tilki" text="Başıma Belasın" number={numberValues} music="basimabelasin.mp3" image="https://tr.web.img4.acsta.net/pictures/20/12/28/09/07/1817655.jpg"/>

        <Little title="KÖK$VL" text="Sen Mİ Ben Mİ?" number={numberValues} music="senmibenmi.mp3" image="data:image/jpeg;base64,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"/>

        <Little title="Özgün" text="İmtiyaz" number={numberValues} music="imtiyaz.mp3" image="https://showradyo.com.tr/wp-content/uploads/2023/08/Ozgun-kapak.jpg"/>

        <Little title="Bilal Sonses" text="İki Kadeh" number={numberValues} music="ikikadeh.mp3" image="https://images.genius.com/682e7d60a6e59541877b56569de4c432.1000x1000x1.jpg"/>

        <Little title="Semicenk" text="Geri Dönemedim" number={numberValues} music="geridönemedim.mp3" image="https://ia.tmgrup.com.tr/ba5e54/1160/650/0/0/2048/1148?u=https://i.tmgrup.com.tr/rt/2023/05/08/semicenk-geri-donemedim-1683527940527.jpg"/>

        <Little title="Mabel Matiz" text="Numaracı" number={numberValues} music="numaracı.mp3" image="https://i.ytimg.com/vi/_7hNoxXoJTo/maxresdefault.jpg"/>

        <Little title="Sıla Şahin" text="Yaz Kenara" number={numberValues} music="yazkenara.mp3" image="https://i.ytimg.com/vi/0DbcsEILLYU/maxresdefault.jpg"/>

        <Little title="Simge" text="Harcandıkça" number={numberValues} music=".mp3" image="https://images.genius.com/f8370bf3162236595bc5bead5e53ab27.1000x1000x1.jpg"/>

        <Little title="Irmak Arıcı" text="Eften Püften" number={numberValues} music="eftenpuften.mp3" image="https://www.sozmuzik.com/wp-content/uploads/2023/07/irmak_arici1-640x640.jpg"/>
 
        <Little title="Oğuzhan Koç" text="Yok Mu?" number={numberValues} music="yokmu.mp3" image="https://www.sozmuzik.com/wp-content/uploads/2023/07/oguzhan_koc18-640x640.jpg"/>

        <Little title="Derya Bedavacı" text='Tövbe' number={numberValues} music="tovbe.mp3" image="https://i.scdn.co/image/ab67616d0000b273a7e06ade75166a22e05c4c9b"/>

        <Little title="Tekir & Bedo" text="Benden Uzak Dur" number={numberValues} music="bendenuzakdur.mp3" image="https://www.gulum.net/images/haberler/2023/07/bedo-ve-tekir-benden-uzak-dur-sarki-sozu-1090_1.jpg"/>

        <Little title="Kerim Araz & Sevgim Yılmaz" text="Dayanamıyorum" number={numberValues} music="dayanamıyorum.mp3" image="https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/94/b3/9f/94b39fe4-f9b1-8ac1-3a84-e687e07a6c39/cover.jpg/600x600bf-60.jpg"/>

        <Little title="Burak Bulut" text="Gecelere Sor" number={numberValues} music="geceleresor.mp3" image="https://64.media.tumblr.com/23bc6c20774eff9e215000c0658cdd04/07ecd153bda96385-1b/s540x810/9c579d6d90ba5cfbd14bb4460e2b4a77f426054d.jpg"/>

        <Little title="Hande Ünsal" text="Sen Yokken" number={numberValues} music="senyokken.mp3" image="https://www.muzikhabercisi.com/image/upload/2022/10/14/p_795634990b0e7f41-600x400.jpg"/>

        <Little title="Çağan Şengül" text="Çok Yazık" number={numberValues} music="cokyazik.mp3" image="https://yt3.googleusercontent.com/BB9ALVgBQLod540EUNAz75G9Cwvmw-iJAP6wu7Rqn5LJIAo5-lZH767kxinQ4aeUbj_KlTNkXw=s900-c-k-c0x00ffffff-no-rj"/>

        <Little title="Burak Bulut & Kurtuluş Kuş" text="Manolya" number={numberValues} music="manolya.mp3" image="https://i1.sndcdn.com/artworks-iNzkpxtj8VNNRSDc-oG0rQg-t500x500.jpg"/>

        <Little title="Derya Uluğ" text="Nefes" number={numberValues} music="nefes.mp3" image="https://radyoviva.com.tr/wp-content/uploads/2023/07/4-scaled.jpg"/>

        <Little title="Gökhan Türkmen" text="İhtimaller Perisi" number={numberValues} music="ihtimaller.mp3" image="https://i.ytimg.com/vi/rDYFw_xW8MM/maxresdefault.jpg"/>

        <Little title="Emir Can İğrek" text="Beyaz" number={numberValues} music="beyaz.mp3" image="https://cdn.powergroup.com.tr/image/0x0/powerturk/u/Contents/e/m/emir-745x465-1654843925.png"/>

        <Little title="Beach House" text="Space Song" number={numberValues} music="spacesong.mp3" image="https://i.ytimg.com/vi/RBtlPT23PTM/maxresdefault.jpg"/>
    
        <Little title="Amy Winehous" text="Back To Black" number={numberValues} music="back.mp3" image="https://upload.wikimedia.org/wikipedia/tr/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png"/>

        <Little title="Mild High Club" text="Homage" number={numberValues} music="homega.mp3" image="https://i.ytimg.com/vi/oRGDhgITetc/sddefault.jpg"/>

        <Little title="Cupido" text="Im Good (Blue)" number={numberValues} music="good.mp3" image="https://images.genius.com/f4eacd64dc39815cf3b789fc21b3e3b2.1000x1000x1.png"/>

        <Little title="Sapientdream" text="Past Lives" number={numberValues} music="pastlives.mp3" image="data:image/jpeg;base64,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"/>

        <Little title="Carla Morrison" text="Disfruto" number={numberValues} music="disfruto.mp3" image="https://i1.sndcdn.com/artworks-zFgejISeUBD2u9Xi-YRzsZQ-t500x500.jpg"/>

    </div>
    </div>
  );
};

export default Skills;
