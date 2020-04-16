var normalDictionary = ['COVID', 'covid', 'COVID-19', 'covid-19', 'Covid-19', 'coronavirus', 'Coronavirus', 'CORONAVIRUS', 'pandemic', 'Pandemic', 'PANDEMIC', 'lockdown', 'Lockdown', 'LOCKDOWN', 'virus', 'Virus', 'VIRUS', 'corona', 'Corona', 'CORONA']

var aggressiveDictionary = ['crisis', 'Crisis', 'CRISIS', 'distancing', 'apocalypse', 'Apocalypse', 'APOCALYPSE', 'emergency', 'Emergency', 'EMERGENCY']

var elements = [...document.body.getElementsByTagName('*')];

var modes = {
  NORMAL: 'NORMAL',
  AGGRESSIVE: 'AGGRESSIVE'
}

chrome.storage.sync.get("mode", (settings) => {
  var isDangerous = function (node) {
    var i;
    for (i = 0; i < normalDictionary.length; i++)
      if (node.nodeValue.search(normalDictionary[i]) >= 0)
        return true
    if (settings.mode === modes.AGGRESSIVE)
      for (i = 0; i < aggressiveDictionary.length; i++)
        if (node.nodeValue.search(aggressiveDictionary[i]) >= 0)
          return true
    return false
  }


  var hideNode = function (node) {
    node.classList.add('cf-hidden')
  }

  var e, c;
  for (e = 0; e < elements.length; ++e)
    for (c = 0; c < elements[e].childNodes.length; c++)
      if (elements[e].childNodes[c].nodeType === 3)
        if (isDangerous(elements[e].childNodes[c]))
          hideNode(elements[e])
})
