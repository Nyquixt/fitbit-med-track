import { settingsStorage } from "settings";
import { outbox } from "file-transfer";
import * as cbor from "cbor";

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

settingsStorage.onchange = function (this, e) {
    sendItemsToDevice(this);
};

//when mobile app starts up
sendItemsToDevice(settingsStorage);

function sendItemsToDevice(storage) {
    var items;
    var date = new Date();
    var dayOfWeek = days[date.getDay()];
    console.log(dayOfWeek);
    switch (dayOfWeek) {
        case 'Sunday':
            {
                items = storage.getItem('sunday-list');
                break;
            }
        case 'Monday':
            {
                items = storage.getItem('monday-list');
                break;
            }
        case 'Tuesday':
            {
                items = storage.getItem('tuesday-list');
                break;
            }
        case 'Wednesday':
            {
                items = storage.getItem('wednesday-list');
                break;
            }
        case 'Thursday':
            {
                items = storage.getItem('thursday-list');
                break;
            }
        case 'Friday':
            {
                items = storage.getItem('friday-list');
                break;
            }
        case 'Saturday':
            {
                items = storage.getItem('saturday-list');
                break;
            }
    }
    // console.log(items);

    if (items) {
        try {
            items = {
                "items": JSON.parse(items)
            };
            
            outbox.enqueue('items.cbor', cbor.encode(items))
                .then(ft => {/*console.log('sent to device')*/})
                .catch(err => {/*console.log(err)*/});
        } catch (e) {
            //console.log('error', e);
        }
    } else {
        try {
            outbox.enqueue('message.txt', 'please add items')
            .then(ft => {/*console.log('sent to device')*/})
            .catch(err => {/*console.log(err)*/});
        } catch (e) {
            //console.log('error', e);
        }
    }
}