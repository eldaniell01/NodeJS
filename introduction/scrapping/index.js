const scrapping = require('puppeteer');

(async()=>{
    console.log('lanzamos navegador')
    const browser = await scrapping.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://wiki.archlinux.org/');

    var titulo1 = await page.evaluate(()=>{
        const h1 = document.querySelector('h1');
        console.log(h1.innerHTML);
        return h1.innerHTML
    })
    console.log(titulo1)
    console.log('cerrando');
    //browser.close();
    console.log('cerrado')
})();