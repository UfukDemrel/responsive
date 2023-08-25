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

        <Little title="KÖK$VL" text="Sen Mİ Ben Mİ?" number={numberValues} music="ikimizebirden.mp3" image="data:image/jpeg;base64,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"/>

        <Little title="Özgün" text="İmtiyaz" number={numberValues} music="ikimizebirden.mp3" image="https://showradyo.com.tr/wp-content/uploads/2023/08/Ozgun-kapak.jpg"/>

        <Little title="Bilal Sonses" text="İki Kadeh" number={numberValues} music="ikimizebirden.mp3" image="https://images.genius.com/682e7d60a6e59541877b56569de4c432.1000x1000x1.jpg"/>

        <Little title="Semicenk" text="Geri Dönemedim" number={numberValues} music="ikimizebirden.mp3" image="https://ia.tmgrup.com.tr/ba5e54/1160/650/0/0/2048/1148?u=https://i.tmgrup.com.tr/rt/2023/05/08/semicenk-geri-donemedim-1683527940527.jpg"/>

        <Little title="Mabel Matiz" text="Numaracı" number={numberValues} music=".mp3" image="https://i.ytimg.com/vi/_7hNoxXoJTo/maxresdefault.jpg"/>

        <Little title="Sıla Şahin" text="Yaz Kenara" number={numberValues} music="ikimizebirden.mp3" image="https://i.ytimg.com/vi/0DbcsEILLYU/maxresdefault.jpg"/>

        <Little title="Simge" text="Harcandıkça" number={numberValues} music="ikimizebirden.mp3" image="https://images.genius.com/f8370bf3162236595bc5bead5e53ab27.1000x1000x1.jpg"/>

        <Little title="Irmak Arıcı" text="Eften Püften" number={numberValues} music="ikimizebirden.mp3" image="https://www.sozmuzik.com/wp-content/uploads/2023/07/irmak_arici1-640x640.jpg"/>
 
        <Little title="Oğuzhan Koç" text="Yok Mu?" number={numberValues} music="ikimizebirden.mp3" image="https://www.sozmuzik.com/wp-content/uploads/2023/07/oguzhan_koc18-640x640.jpg"/>

        <Little title="Derya Bedavacı" text='Tövbe' number={numberValues} music="ikimizebirden.mp3" image="https://i.scdn.co/image/ab67616d0000b273a7e06ade75166a22e05c4c9b"/>

        <Little title="Tekir & Bedo" text="İkimize Birden" number={numberValues} music="ikimizebirden.mp3" image="https://www.gulum.net/images/haberler/2023/07/bedo-ve-tekir-benden-uzak-dur-sarki-sozu-1090_1.jpg"/>

        <Little title="Kerim Araz & Sevgim Yılmaz" text="Dayanamıyorum" number={numberValues} music="ikimizebirden.mp3" image="https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/94/b3/9f/94b39fe4-f9b1-8ac1-3a84-e687e07a6c39/cover.jpg/600x600bf-60.jpg"/>

        <Little title="Burak Bulut" text="Gecelere Sor" number={numberValues} music="ikimizebirden.mp3" image="https://64.media.tumblr.com/23bc6c20774eff9e215000c0658cdd04/07ecd153bda96385-1b/s540x810/9c579d6d90ba5cfbd14bb4460e2b4a77f426054d.jpg"/>

        <Little title="Hande Ünsal" text="Sen Yokken" number={numberValues} music="ikimizebirden.mp3" image="https://www.muzikhabercisi.com/image/upload/2022/10/14/p_795634990b0e7f41-600x400.jpg"/>

        <Little title="Çağan Şengül" text="Çok Yazık" number={numberValues} music="ikimizebirden.mp3" image="https://yt3.googleusercontent.com/BB9ALVgBQLod540EUNAz75G9Cwvmw-iJAP6wu7Rqn5LJIAo5-lZH767kxinQ4aeUbj_KlTNkXw=s900-c-k-c0x00ffffff-no-rj"/>

        <Little title="Burak Bulut & Kurtuluş Kuş" text="Manolya" number={numberValues} music="ikimizebirden.mp3" image="https://i1.sndcdn.com/artworks-iNzkpxtj8VNNRSDc-oG0rQg-t500x500.jpg"/>

        <Little title="Derya Uluğ" text="Nefes" number={numberValues} music="ikimizebirden.mp3" image="https://radyoviva.com.tr/wp-content/uploads/2023/07/4-scaled.jpg"/>

        <Little title="Gökhan Türkmen" text="İhtimaller Perisi" number={numberValues} music="ikimizebirden.mp3" image="https://i.ytimg.com/vi/rDYFw_xW8MM/maxresdefault.jpg"/>

        <Little title="Emir Can İğrek" text="Beyaz" number={numberValues} music="ikimizebirden.mp3" image="https://cdn.powergroup.com.tr/image/0x0/powerturk/u/Contents/e/m/emir-745x465-1654843925.png"/>

        <Little title="Mabel Matiz" text="Müphem" number={numberValues} music="ikimizebirden.mp3" image="https://i.ytimg.com/vi/GRkG_x9gIV4/maxresdefault.jpg"/>
    </div>
    </div>
  );
};

export default Skills;
