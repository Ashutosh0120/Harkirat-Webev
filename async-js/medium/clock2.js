// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function time(){
    // console.clear();
    var t=new Date();
    var hour=t.getHours();
    var min=t.getMinutes();
    var sec=t.getSeconds();
    var k="PM";
    if(hour<=12) k="AM";
    console.log(hour+":"+min+":"+sec+" "+k);
}

setInterval(time,1000);