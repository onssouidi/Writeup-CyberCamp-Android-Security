# Task 2
 [Download APK File](./task2.apk)  
 As usual we open the apk file with jadx and go to AndroidManifest.xml
 ```
 <?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:versionCode="1" android:versionName="1.0" android:compileSdkVersion="34" android:compileSdkVersionCodename="14" package="org.firecrackers.task1" platformBuildVersionCode="34" platformBuildVersionName="14">
    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="34"/>
    <permission android:name="org.firecrackers.task1.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION" android:protectionLevel="signature"/>
    <uses-permission android:name="org.firecrackers.task1.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION"/>
    <application android:theme="@style/Theme.Task1" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:allowBackup="true" android:supportsRtl="true" android:extractNativeLibs="false" android:fullBackupContent="@xml/backup_rules" android:roundIcon="@mipmap/ic_launcher_round" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:dataExtractionRules="@xml/data_extraction_rules">
        <activity android:label="@string/app_name" android:name="org.firecrackers.task1.MainActivity" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <provider android:name="androidx.startup.InitializationProvider" android:exported="false" android:authorities="org.firecrackers.task1.androidx-startup">
            <meta-data android:name="androidx.emoji2.text.EmojiCompatInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.lifecycle.ProcessLifecycleInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.profileinstaller.ProfileInstallerInitializer" android:value="androidx.startup"/>
        </provider>
        <uses-library android:name="androidx.window.extensions" android:required="false"/>
        <uses-library android:name="androidx.window.sidecar" android:required="false"/>
        <receiver android:name="androidx.profileinstaller.ProfileInstallReceiver" android:permission="android.permission.DUMP" android:enabled="true" android:exported="true" android:directBootAware="false">
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.INSTALL_PROFILE"/>
            </intent-filter>
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.SKIP_FILE"/>
            </intent-filter>
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.SAVE_PROFILE"/>
            </intent-filter>
            <intent-filter>
                <action android:name="androidx.profileinstaller.action.BENCHMARK_OPERATION"/>
            </intent-filter>
        </receiver>
    </application>
</manifest>
```
We double click on the MainActivity and we find this functions
``` java
    public static final void onCreate$lambda$0(EditText editText, MainActivity this$0, View view) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (Intrinsics.areEqual(editText.getText().toString(), this$0.checkPassword())) {
            this$0.startActivity(AdminActivity.Companion.newIntent(this$0, "Welcome Admin"));
        } else {
            Toast.makeText(this$0, "Wrong password!", 0).show();
        }
    }
```
We find here that it's comparing our input string to a string returned by the function checkPassword() but what's interesting is this line in the code 
``` java
 private final native String checkPassword();
 ```
 The checkPassword function is from a native library (so it's is loaded during runtime) Here I thought about two solutions ,the first one is that I export the library.iso file and decompile it using ghidra to get the checkPassword function code and the second thing is that I use frida to get the return value of the checkPassword function. Honestly I decided to go with the second solution
 I installed the app on my genymotion emulator and activated frida server
 You can watch this video to learn how to work with frida 
 [Watch Video](https://www.youtube.com/watch?v=RJXsvAjZl9U&t=1489s)
I checked the name of the package using the command frida-ps -Ua
 ```
 PID  Name       Identifier
----  ---------  ----------------------
2200  Messaging  com.android.messaging
1976  Phone      com.android.dialer
2555  task1      org.firecrackers.task1
 ```
 Then I wrote the script using hava script that would print the return value of the checkPassword function
 ``` javascript
 Java.perform(function () {
    const activity = Java.use("org.firecrackers.task1.MainActivity")
    activity.checkPassword.implementation= function(){
        send("Success")
        send(this.checkPassword())
                return this.checkPassword();
            }
    });
 ```
Final step is running this command  frida -U -f org.firecrackers.task1 -l script.js
 ![LOCAL IMAGE](Screenshot.png) 
