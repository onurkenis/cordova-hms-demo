/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

package com.huawei.hms.cordova.location.helpers;

import android.util.Log;

import com.huawei.hms.cordova.location.utils.CordovaUtils;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;


public class HMSCordovaPlugin extends CordovaPlugin {

    private final static String TAG = HMSCordovaPlugin.class.getSimpleName();
    private boolean isInitCalled = false;

    @Override
    public void pluginInitialize() {
        super.pluginInitialize();
        init();
    }

    // Needs to be overridden
    public JSONObject getConstants() throws JSONException {
        return new JSONObject();
    }

    // Needs to be overridden
    public boolean executer(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        return false;
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("init".equals(action)) {
            init(callbackContext);
            return true;
        } else {
            return executer(action, args, callbackContext);
        }
    }

    private void init(final CallbackContext callbackContext)  {
        init();
        callbackContext.success();
    }

    private void init() {
        if (isInitCalled) {
            return;
        }

        try {
            CordovaUtils.runJS(cordova, webView, "hmsSetConstants('" + getServiceName() + "', " + getConstants().toString() + ")");
            isInitCalled = true;
        } catch (JSONException ex) {
            Log.e(TAG, "Error while exporting constants on " + getServiceName() + ". Details: " + ex.getMessage());
        }
    }

}
