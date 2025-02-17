# Task3
[Download apk file](2048.apk)  
This app is the famous 2048 app We will try to make us win in no time so we go and open AndroidMAnifest.xml file
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:versionCode="7" android:versionName="1.3.1" android:compileSdkVersion="34" android:compileSdkVersionCodename="14" package="io.hextree.privacyfriendly2048" platformBuildVersionCode="34" platformBuildVersionName="14">
    <uses-sdk android:minSdkVersion="21" android:targetSdkVersion="34"/>
    <supports-screens android:anyDensity="true" android:smallScreens="true" android:normalScreens="true" android:largeScreens="true" android:resizeable="true" android:xlargeScreens="true"/>
    <permission android:name="io.hextree.privacyfriendly2048.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION" android:protectionLevel="signature"/>
    <uses-permission android:name="io.hextree.privacyfriendly2048.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION"/>
    <application android:theme="@style/AppTheme" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:name="io.hextree.privacyfriendly2048.PF2048" android:debuggable="true" android:allowBackup="true" android:supportsRtl="true" android:extractNativeLibs="true" android:appComponentFactory="androidx.core.app.CoreComponentFactory">
        <activity android:theme="@style/SplashTheme" android:name="io.hextree.privacyfriendly2048.activities.SplashActivity" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <activity android:theme="@style/AppTheme.NoActionBar" android:name="io.hextree.privacyfriendly2048.activities.TutorialActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        </activity>
        <activity android:theme="@style/AppTheme.NoActionBar" android:label="@string/app_name" android:name="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        <activity android:label="@string/about" android:name="io.hextree.privacyfriendly2048.activities.AboutActivity" android:parentActivityName="io.hextree.privacyfriendly2048.activities.MainActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        </activity>
        <activity android:theme="@style/AppTheme.NoActionBar" android:label="@string/help" android:name="io.hextree.privacyfriendly2048.activities.HelpActivity" android:parentActivityName="io.hextree.privacyfriendly2048.activities.MainActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        </activity>
        <activity android:theme="@style/AppTheme.NoActionBar" android:name="io.hextree.privacyfriendly2048.activities.StatsActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        </activity>
        <activity android:theme="@style/AppTheme.NoActionBar" android:label="@string/settings_name" android:name="io.hextree.privacyfriendly2048.activities.SettingsActivity" android:parentActivityName="io.hextree.privacyfriendly2048.activities.MainActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        </activity>
        <activity android:label="@string/title_activity_game" android:name="io.hextree.privacyfriendly2048.activities.GameActivity" android:parentActivityName="io.hextree.privacyfriendly2048.activities.MainActivity">
            <meta-data android:name="android.support.PARENT_ACTIVITY" android:value="io.hextree.privacyfriendly2048.activities.MainActivity"/>
        </activity>
        <service android:name="androidx.work.impl.background.systemalarm.SystemAlarmService" android:enabled="@bool/enable_system_alarm_service_default" android:exported="false" android:directBootAware="false"/>
        <service android:name="androidx.work.impl.background.systemjob.SystemJobService" android:permission="android.permission.BIND_JOB_SERVICE" android:enabled="@bool/enable_system_job_service_default" android:exported="true" android:directBootAware="false"/>
        <service android:name="androidx.work.impl.foreground.SystemForegroundService" android:enabled="@bool/enable_system_foreground_service_default" android:exported="false" android:directBootAware="false"/>
        <receiver android:name="androidx.work.impl.utils.ForceStopRunnable.BroadcastReceiver" android:enabled="true" android:exported="false" android:directBootAware="false"/>
        <receiver android:name="androidx.work.impl.background.systemalarm.ConstraintProxy.BatteryChargingProxy" android:enabled="false" android:exported="false" android:directBootAware="false">
            <intent-filter>
                <action android:name="android.intent.action.ACTION_POWER_CONNECTED"/>
                <action android:name="android.intent.action.ACTION_POWER_DISCONNECTED"/>
            </intent-filter>
        </receiver>
        <receiver android:name="androidx.work.impl.background.systemalarm.ConstraintProxy.BatteryNotLowProxy" android:enabled="false" android:exported="false" android:directBootAware="false">
            <intent-filter>
                <action android:name="android.intent.action.BATTERY_OKAY"/>
                <action android:name="android.intent.action.BATTERY_LOW"/>
            </intent-filter>
        </receiver>
        <receiver android:name="androidx.work.impl.background.systemalarm.ConstraintProxy.StorageNotLowProxy" android:enabled="false" android:exported="false" android:directBootAware="false">
            <intent-filter>
                <action android:name="android.intent.action.DEVICE_STORAGE_LOW"/>
                <action android:name="android.intent.action.DEVICE_STORAGE_OK"/>
            </intent-filter>
        </receiver>
        <receiver android:name="androidx.work.impl.background.systemalarm.ConstraintProxy.NetworkStateProxy" android:enabled="false" android:exported="false" android:directBootAware="false">
            <intent-filter>
                <action android:name="android.net.conn.CONNECTIVITY_CHANGE"/>
            </intent-filter>
        </receiver>
        <receiver android:name="androidx.work.impl.background.systemalarm.RescheduleReceiver" android:enabled="false" android:exported="false" android:directBootAware="false">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED"/>
                <action android:name="android.intent.action.TIME_SET"/>
                <action android:name="android.intent.action.TIMEZONE_CHANGED"/>
            </intent-filter>
        </receiver>
        <receiver android:name="androidx.work.impl.background.systemalarm.ConstraintProxyUpdateReceiver" android:enabled="@bool/enable_system_alarm_service_default" android:exported="false" android:directBootAware="false">
            <intent-filter>
                <action android:name="androidx.work.impl.background.systemalarm.UpdateProxies"/>
            </intent-filter>
        </receiver>
        <receiver android:name="androidx.work.impl.diagnostics.DiagnosticsReceiver" android:permission="android.permission.DUMP" android:enabled="true" android:exported="true" android:directBootAware="false">
            <intent-filter>
                <action android:name="androidx.work.diagnostics.REQUEST_DIAGNOSTICS"/>
            </intent-filter>
        </receiver>
        <service android:name="androidx.room.MultiInstanceInvalidationService" android:exported="false" android:directBootAware="true"/>
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
After diving in the different activites we found the activity that handles the game logic which is the GameActivity and there I found the function that generates either 2 or 4 to the box 
``` java
public int generateNumber() {
        if (Math.random() <= 0.9d) {
            return 2;
        }
        return 4;
    }
```
So I decided to hook this method using frida so it would return directly 2048  
This is the javascript code
``` javascript
Java.perform(function () {
    const activity = Java.use("io.hextree.privacyfriendly2048.activities.GameActivity")
    activity.generateNumber.implementation= function(){
        send("Success")
                return 2048;
            }
    });
```
Here it is  
![LOCAL IMAGE](flag.png)
