// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const print = function (msg) {
  chrome.extension.getBackgroundPage().console.log(msg);
}

chrome.runtime.onInstalled.addListener(function() {
  // Initial value for intensity
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
});

var normalDictionary = ['COVID', 'covid', 'COVID19', 'covid19', 'coronavirus', 'corona virus', 'Coronavirus', 'pandemic']

var aggressiveDictionary = ['corona', 'virus', 'crisis', 'distancing', 'apocalypse']

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // @TODO: Filter only for websites
  // @TODO: Search for keywords
  print(tabId);
  print(changeInfo);
  print(tab);
})
