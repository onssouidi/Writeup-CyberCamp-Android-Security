Java.perform(function () {
    const activity = Java.use("org.firecrackers.task1.MainActivity")
    activity.checkPassword.implementation= function(){
        send("Success")
        send(this.checkPassword())
                return this.checkPassword();
            }
    });