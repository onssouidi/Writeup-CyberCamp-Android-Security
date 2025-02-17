# Task 1
 [Download APK File](./Task1.apk)  
As usual I opened the apk file using jadx and opened AndroidManifest.xml
```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:versionCode="1" android:versionName="1.0" android:compileSdkVersion="34" android:compileSdkVersionCodename="14" package="org.firecrackers.taskzero" platformBuildVersionCode="34" platformBuildVersionName="14">
    <uses-sdk android:minSdkVersion="24" android:targetSdkVersion="34"/>
    <permission android:name="org.firecrackers.taskzero.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION" android:protectionLevel="signature"/>
    <uses-permission android:name="org.firecrackers.taskzero.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION"/>
    <application android:theme="@style/Theme.Taskzero" android:label="@string/app_name" android:icon="@mipmap/ic_launcher" android:allowBackup="true" android:supportsRtl="true" android:extractNativeLibs="false" android:fullBackupContent="@xml/backup_rules" android:roundIcon="@mipmap/ic_launcher_round" android:appComponentFactory="androidx.core.app.CoreComponentFactory" android:dataExtractionRules="@xml/data_extraction_rules">
        <activity android:name="org.firecrackers.taskzero.MainActivity" android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>
                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
        <activity android:name="org.firecrackers.taskzero.AdminActivity" android:exported="false"/>
        <provider android:name="androidx.startup.InitializationProvider" android:exported="false" android:authorities="org.firecrackers.taskzero.androidx-startup">
            <meta-data android:name="androidx.emoji2.text.EmojiCompatInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.lifecycle.ProcessLifecycleInitializer" android:value="androidx.startup"/>
            <meta-data android:name="androidx.profileinstaller.ProfileInstallerInitializer" android:value="androidx.startup"/>
        </provider>
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
Here I found the MainActivity which is the Launcher Activity so I double click on it
``` java
   public static final void onCreate$lambda$1(EditText editText, MainActivity this$0, View view) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        String obj = editText.getText().toString();
        String string = this$0.getString(R.string.encrypted_password);
        Intrinsics.checkNotNullExpressionValue(string, "getString(...)");
        String string2 = this$0.getString(R.string.app_key);
        Intrinsics.checkNotNullExpressionValue(string2, "getString(...)");
        String decrypt = this$0.decrypt(string, string2);
        if (Intrinsics.areEqual(obj, decrypt)) {
            Intent intent = new Intent(this$0, AdminActivity.class);
            intent.putExtra("FLAG", decrypt);
            this$0.startActivity(intent);
            return;
        }
        Toast.makeText(this$0, "Incorrect password!", 0).show();
    }
```
Here we found a function that would take the two following strings encrypted_password and app_key and then would it as arguments to the function decrypt and then it would compare it to our input string 
So if we get the app_key ,the encrypted_password and pass it to the decrypt function we would get our flag  
we just have to look for the value of the two strings in res/values/strings.xml file.
```
 <string name="app_key">11c27bb22129bb93bd8449f9b541e5474da2a4b8b6cea803f1c6a0446a8fb245</string>
  <string name="encrypted_password">jFavxcoa8FjpfffeZOmoW0j0/+acwCLZm38BXqNKFhxb3U6DSaaygo7PmIEQvxuR</string>
```
Now if we take a look at the decrypt function
``` java
private final String decrypt(String encrypted, String app_key) {
        try {
            byte[] bytes = app_key.getBytes(Charsets.UTF_8);
            Intrinsics.checkNotNullExpressionValue(bytes, "getBytes(...)");
            byte[] copyOf = Arrays.copyOf(bytes, 16);
            Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
            SecretKeySpec secretKeySpec = new SecretKeySpec(copyOf, "AES");
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
            cipher.init(2, secretKeySpec, new IvParameterSpec(new byte[16]));
            byte[] doFinal = cipher.doFinal(Base64.decode(encrypted, 0));
            Intrinsics.checkNotNullExpressionValue(doFinal, "doFinal(...)");
            return new String(doFinal, Charsets.UTF_8);
        } catch (Exception unused) {
            return null;
        }
    }
```
As we see it first takes the encrypted_password , decodes it in the base64 , and then applies AES Algorithm in the CBC Mode with an IV vector=16 null bytes and the key is the first 16 bytes of the app_key string.
You can use Cyberchef to get the flag 
![Local Image](decode.png)