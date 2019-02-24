import document from "document";
import { inbox } from "file-transfer";
import * as fs from "fs";
import * as cbor from "cbor";
import { vibration } from "haptics";


let VTList = document.getElementById("my-list");
let emptyListNoti = document.getElementById("empty-list-noti");

var list;

var color = ["limegreen", "firebrick", "white", "deepskyblue", "fb-orange", "fb-violet"];

inbox.addEventListener("newfile", processAllFiles);
processAllFiles();

function processAllFiles() {
    let fileName;
    while(fileName = inbox.nextFile()){
        // console.log('received', fileName);
        if(fileName == 'items.cbor'){
            try {
                let file = fs.readFileSync(fileName, 'cbor');
                // console.log('Length:', file.items.length);
                // console.log(file.items[0]["name"]);
                list = file.items;
                buildList(list);
            } catch (e) {
                //console.log('err', e);
            }
        }
    }
}

function buildList (list){
    if(list.length == 0){
        emptyListNoti.style.display = "inline";
    } else {
        emptyListNoti.style.display = "none";
    }

    let NUM_ELEMS = list.length;
    VTList.delegate = {
        getTileInfo: function (index) {
            return {
                type: "my-pool",
                value: "",
                index: index
            };
        },
        configureTile: function (tile, info) {
            if (info.type == "my-pool") {
                tile.getElementById("text").text = list[info.index]["name"];
                tile.getElementById("text").style.fill = color[info.index];
                tile.getElementById("tile-divider-bottom").style.fill = color[info.index];
            }
        }
    };
    
    // VTList.length must be set AFTER VTList.delegate
    VTList.length = NUM_ELEMS;
}