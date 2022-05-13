import"./modulepreload-polyfill.6874861d.js";import{D as u,r as d,p,l as v}from"./index.esm2017.be1eeb82.js";import{g as m,r as f,u as y}from"./index.5791bf0f.js";import{i as h,c as g}from"./fbinit.b2d12662.js";import"./logout.d167cd3f.js";const b=h(),r=u(),S=m(b),x=g(),E=document.querySelectorAll(".sections p"),s=document.querySelectorAll(".sections hr"),i=document.querySelector(".profile-content");let o=null;const c=document.querySelector(".display"),l=document.querySelector(".login"),q=document.querySelector(".profile-name");x.onAuthStateChanged(function(e){e?(c.style.display="grid",l.style.display="none",D(e.email)):(c.style.display="none",l.style.display="flex")});async function A(e){k();const a="gs://web-kompi.appspot.com/animals/"+o.name;await v(p(r,"animals"),{Nombre:e[0],Edad:e[1],Tamano:e[2],Microchip:e[3],Peso:e[4],Sexo:e[5],Color:e[6],Vacunacion:e[7],Especie:e[8],Raza:e[9],Pelo:e[10],Esterilizacion:e[11],Certificado_ppp:e[12],Descripcion:e[14],Imagen1:a})}function L(){const e=document.querySelectorAll(".formulario input"),a=document.querySelector(".formulario textarea"),t=[];e.forEach(n=>{t.push(n.value)}),t.push(a.value),console.log(t),A(t)}function k(){const e=f(S,"animals/"+o.name);y(e,o)}function M(){i.innerHTML=`
      <form class="formulario">
        <div class="name">
          <p>Nombre*</p>
          <input type="text" data-value="Edad" class="input">
        </div>
        <div  class="age">
          <p>Edad*</p>
          <input type="text" data-value="Edad" class="input">
        </div>
        <div class="weight">
        <p>Tama\xF1o*</p>
        <input type="text" data-value="Tama\xF1o" class="input">
        <!--<select name="Tamano" class="input">
          <option value="pequenio">Peque\xF1o</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>;
        </select>-->
      </div>
      <div class="microchip">
          <p>Microchip*</p>
          <input type="text" data-value="Microchip" class="input">
          <!--<select class="input">
            <option value="s\xED">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="location">
          <p>Peso*</p>
          <input type="text" data-value="Ubicacion" class="input">
        </div>
        <div class="gender">
          <p>Sexo*</p>
          <input type="text" data-value="Sexo" class="input">
          <!--<select class="input">
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>-->
        </div>
        <div class="color">
          <p>Color*</p>
          <input type="text" data-value="Color" class="input">
        </div>
        <div class="vaccination">
          <p>Vacunas*</p>
          <input type="text" data-value="Vacunas" class="input">
          <!--<select class="input">
            <option value="s\xED">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="species">
          <p>Especie*</p>
          <input type="text" data-value="Especie" class="input">
        </div>
        <div class="breed">
          <p>Raza*</p>
          <input type="text" data-value="Raza" class="input">
        </div>
        <div class="hair">
          <p>Pelo*</p>
          <input type="text" data-value="Pelo" class="input">
        </div>
        <div class="sterilized">
          <p>Esterilizaci\xF3n*</p>
          <input type="text" data-value="Esterilizacion" class="input">
          <!--<select class="input">
            <option value="s\xED">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="certificate">
          <p>Certificado ppp*</p>
          <input type="text" data-value="Esterilizacion" class="input">
          <!--<select class="input">
            <option value="s\xED">Si</option>
            <option value="no">No</option>
          </select>-->
        </div>
        <div class="description">
          <p>Descripci\xF3n*</p>
          <textarea name="" placeholder="Deja una descripci\xF3n." class="textarea"></textarea>
        </div>
        <div class="images">
          <p>Sube una foto*</p>
          <div class="uploadImages">
            <input class="fileinput" type="file" value="Subir Archivo" accept="image/*">
          </div>
        </div>
      </form>
      <div class="save">
          <button class="button">Guardar</button>
      </div>

    `,document.querySelector(".fileinput").addEventListener("change",t=>{t.preventDefault(),o=t.target.files[0]}),document.querySelector(".save").addEventListener("click",t=>{t.preventDefault(),console.log("hola"),L()})}function T(){i.innerHTML=`

    `}function w(){i.innerHTML=`

    `}function P(){i.innerHTML=`
    <p>Para poner en adopci\xF3n a un animal, pulsa el bot\xF3n 'A\xF1adir animal' y completa el formulario</p>


    <a href="#" class="button new-animal-link">A\xF1adir animal</a>

    `,document.querySelector(".new-animal-link").addEventListener("click",()=>M())}function z(){i.innerHTML=`

    `}function C(){i.innerHTML=`

    `}function N(e){switch(s.forEach(a=>{a.classList.remove("selected")}),s[e].classList.add("selected"),e){case 0:T();break;case 1:w();break;case 2:P();break;case 3:z();break;case 4:C();break}}E.forEach((e,a)=>{e.addEventListener("click",()=>N(a))});async function D(e){const a=await d(p(r,"usuarios"));let t="";a.forEach(n=>{n.id===e&&(t=n.data().name+" "+n.data().surname)}),t===""&&(t=e),q.textContent=t}
