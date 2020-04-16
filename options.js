// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var modes = {
  NORMAL: 'NORMAL',
  AGGRESSIVE: 'AGGRESSIVE'
}

let page = document.getElementById('buttons'); 

let normalButton = document.createElement('button');
normalButton.innerHTML = 'Normal Mode';
normalButton.addEventListener('click', function () {
  chrome.storage.sync.set({ mode: modes.NORMAL })
  normalButton.classList.add('active')
  aggressiveButton.classList.remove('active')
})

let aggressiveButton = document.createElement('button');
aggressiveButton.innerHTML = 'Agressive Mode';
aggressiveButton.addEventListener('click', function () {
  chrome.storage.sync.set({ mode: modes.AGGRESSIVE })
  aggressiveButton.classList.add('active')
  normalButton.classList.remove('active')
})

chrome.storage.sync.get("mode", function (obj) {
  if (obj.mode === modes.NORMAL) 
    normalButton.classList.add('active')
  else
    aggressiveButton.classList.add('active')
})

page.appendChild(normalButton);
page.appendChild(aggressiveButton)
