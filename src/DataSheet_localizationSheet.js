import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "frontpage_textblock_928127";
    item['en'] = "Hi, this is me.";
    
    item = {};
    this.items.push(item);
    item['key'] = "storyofme_textblock_356422";
    item['en'] = "How I became me";
    
    item = {};
    this.items.push(item);
    item['key'] = "storyofme_text_424913";
    item['en'] = "Music has always been a big part of my life - I was born to a musical family, my father was an opera singer and mother a jazz musician. When I was younger, they used to drag me backstage and joke that music is practically embedded in my DNA!";
    
    item = {};
    this.items.push(item);
    item['key'] = "storyofme_textcopy_767796";
    item['en'] = "I have always been artistic. By the time I was 6, I was already playing the piano and writing my own songs. When I turned 17, I had already struck a record deal. The company found me on YouTube, where my trumpet covers blew them away.\n\nLately I’ve been working on my first single, which will be out in June. Stay tuned!";
    
    item = {};
    this.items.push(item);
    item['key'] = "tabbarbutton_title_398788";
    item['en'] = "Unselected";
    
    item = {};
    this.items.push(item);
    item['key'] = "tabbarbutton_title_266824";
    item['en'] = "Selected";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text_1010756";
    item['en'] = "Contact";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_text2_380494";
    item['en'] = "indieartist@example.com";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_button_815456";
    item['en'] = "Email me";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_textcopy_519705";
    item['en'] = "321 Hayes St\nSan Francisco, CA 94102\nUS";
    
    item = {};
    this.items.push(item);
    item['key'] = "contact_buttoncopy_845993";
    item['en'] = "Show on map";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
