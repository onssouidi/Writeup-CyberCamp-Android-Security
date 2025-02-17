Java.perform(function () {
    const activity = Java.use("io.hextree.privacyfriendly2048.activities.GameActivity")
    activity.generateNumber.implementation= function(){
        send("Success")
                return 2048;
            }
    });