export default () => {
    const viewNetchange = `
    
     
    <section class="newshome">
    <div>
    <a href="https://gestion.pe/opinion/pregunta-de-hoy/esta-de-acuerdo-con-que-las-afp-inviertan-en-criptomonedas-noticia/">
    <img src="https://gestion.pe/resizer/LY6smnt9J2RLjsE3J0MEw7oMw14=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZOAWY2DMRVAM5DLAIAXFDGCQIM.jpg" alt="foto" /><h2>¿Esta de acuerdo con que las AFP inviertan en criptomonedas?</h2>
      </a>
    </div>

    <div>
    <a href="https://www.france24.com/es/minuto-a-minuto/20220118-espa%C3%B1a-reforzar%C3%A1-el-control-sobre-la-publicidad-de-criptomonedas">
    <img src="https://s.france24.com/media/display/b366c66a-408b-11ec-92e5-005056bf30b7/w:1024/p:16x9/ae9eda9cc263c010e0c51019f43a24e8fc9619a5.webp" alt="foto"><p>España reforzará el control sobre la publicidad de criptomonedas</p>
    </a>
 </div>
  
     <div>
       <a href="https://elcomercio.pe/tecnologia/actualidad/la-pregunta-del-dia-cuales-son-las-claves-para-entender-el-boom-de-las-criptomonedas-noticia/">
    <img src="https://elcomercio.pe/resizer/Ov8TlEcfS1fMYoiLvRGEReppKZc=/580x326/smart/filters:format(jpeg):quality(75)/cdn.jwplayer.com/v2/media/o1dqoZeX/poster.jpg" alt="foto" /><p>La pregunta del día: ¿Cuáles son las claves para entender el boom de las criptomonedas?.</p>
       </a>
    </div>
     <div>
       <a href="https://es.cointelegraph.com/news/breaking-bear-market-in-bitcoin-demand-will-spark-next-btc-price-surge-analysts">
    <img src="https://images.cointelegraph.com/images/717_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDEvZDkzMTZmNmYtNmQ4MC00NjBmLWEwZmMtMjM4MTljM2I5YjA2LmpwZw==.jpg" alt="foto" /><p>La ruptura del "mercado bajista" de la demanda de bitcoin provocará su próxima subida de precio, según analistas</p>
         </a>
    </div>
    <div>
    <a href="https://www.nytimes.com/es/2021/09/07/espanol/criptomoneda-explicacion.html">
    <img src="https://static01.nyt.com/images/2021/08/27/us/politics/07dc-cryptoexplainer-ESP-00/merlin_193631907_a90f6be4-7e4f-4a54-9572-92886cebeaa0-jumbo.jpg?quality=75&auto=webp" alt="foto" /><p>Criptomonedas y finanzas descentralizadas para principiantes.</p>
    </a>
    </div>

</section>`;

    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNetchange')
    divElemt.innerHTML = viewNetchange;
    return divElemt;
};