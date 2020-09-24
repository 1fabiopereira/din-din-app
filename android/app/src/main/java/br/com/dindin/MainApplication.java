package br.com.dindin;

import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;

import java.util.List;

public class MainApplication extends NavigationApplication {

  private final ReactNativeHost mReactNativeHost = new NavigationReactNativeHost(this) {
            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            };

            @Override
            protected List<ReactPackage> getPackages() {
              List<ReactPackage> packages = new PackageList(this).getPackages();
              return packages;
            };

            @Override
            protected String getJSMainModuleName() {
                return "index";
            };
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  };

  @Override
  public void onCreate() {
      super.onCreate();
      SoLoader.init(this, false);
  }
}
