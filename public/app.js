var app = angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

app.controller('myCtrl', function($scope){

  $scope.irregularVerbs = [
    {
      base:[ 'awake'],
      pastSimple:[ 'awoke'],
      pastParticiple:[ 'awoken']
    },
    {
      base:[ 'be'],
      pastSimple:[ 'was, were'],
      pastParticiple:[ 'been']
    },
    {
      base:[ 'beat'],
      pastSimple:[ 'beat'],
      pastParticiple:[ 'beaten']
    },
    {
      base:[ 'become'],
      pastSimple:[ 'became'],
      pastParticiple:[ 'become']
    },
    {
      base:[ 'begin'],
      pastSimple:[ 'began'],
      pastParticiple:[ 'begun']
    },
    {
      base:[ 'bend'],
      pastSimple:[ 'bent'],
      pastParticiple:[ 'bent']
    },
    {
      base:[ 'bet'],
      pastSimple:[ 'bet'],
      pastParticiple:[ 'bet']
    },
    {
      base:[ 'bid'],
      pastSimple:[ 'bid'],
      pastParticiple:[ 'bid']
    },
    {
      base:[ 'bite'],
      pastSimple:[ 'bit'],
      pastParticiple:[ 'bitten']
    },
    {
      base:[ 'blow'],
      pastSimple:[ 'blew'],
      pastParticiple:[ 'blown']
    },
    {
      base:[ 'break'],
      pastSimple:[ 'broke'],
      pastParticiple:[ 'broken']
    },
    {
      base:[ 'bring'],
      pastSimple:[ 'brought'],
      pastParticiple:[ 'brought']
    },
    {
      base:[ 'broadcast'],
      pastSimple:[ 'broadcast'],
      pastParticiple:[ 'broadcast']
    },
    {
      base:[ 'build'],
      pastSimple:[ 'built'],
      pastParticiple:[ 'built']
    },
    {
      base:[ 'burn'],
      pastSimple:[ 'burned ',' burnt'],
      pastParticiple:[ 'burned ',' burnt']
    },
    {
      base:[ 'buy'],
      pastSimple:[ 'bought'],
      pastParticiple:[ 'bought']
    },
    {
      base:[ 'catch'],
      pastSimple:[ 'caught'],
      pastParticiple:[ 'caught']
    },
    {
      base:[ 'choose'],
      pastSimple:[ 'chose'],
      pastParticiple:[ 'chosen']
    },
    {
      base:[ 'come'],
      pastSimple:[ 'came'],
      pastParticiple:[ 'come']
    },
    {
      base:[ 'cost'],
      pastSimple:[ 'cost'],
      pastParticiple:[ 'cost']
    },
    {
      base:[ 'cut'],
      pastSimple:[ 'cut'],
      pastParticiple:[ 'cut']
    },
    {
      base:[ 'dig'],
      pastSimple:[ 'dug'],
      pastParticiple:[ 'dug']
    },
    {
      base:[ 'do'],
      pastSimple:[ 'did'],
      pastParticiple:[ 'done']
    },
    {
      base:[ 'draw'],
      pastSimple:[ 'drew'],
      pastParticiple:[ 'drawn']
    },
    {
      base:[ 'dream'],
      pastSimple:[ 'dreamed ',' dreamt'],
      pastParticiple:[ 'dreamed ',' dreamt']
    },
    {
      base:[ 'drive'],
      pastSimple:[ 'drove'],
      pastParticiple:[ 'driven']
    },
    {
      base:[ 'drink'],
      pastSimple:[ 'drank'],
      pastParticiple:[ 'drunk']
    },
    {
      base:[ 'eat'],
      pastSimple:[ 'ate'],
      pastParticiple:[ 'eaten']
    },
    {
      base:[ 'fall'],
      pastSimple:[ 'fell'],
      pastParticiple:[ 'fallen']
    },
    {
      base:[ 'feel'],
      pastSimple:[ 'felt'],
      pastParticiple:[ 'felt']
    },
    {
      base:[ 'fight'],
      pastSimple:[ 'fought'],
      pastParticiple:[ 'fought']
    },
    {
      base:[ 'find'],
      pastSimple:[ 'found'],
      pastParticiple:[ 'found']
    },
    {
      base:[ 'fly'],
      pastSimple:[ 'flew'],
      pastParticiple:[ 'flown']
    },
    {
      base:[ 'forget'],
      pastSimple:[ 'forgot'],
      pastParticiple:[ 'forgotten']
    },
    {
      base:[ 'forgive'],
      pastSimple:[ 'forgave'],
      pastParticiple:[ 'forgiven']
    },
    {
      base:[ 'freeze'],
      pastSimple:[ 'froze'],
      pastParticiple:[ 'frozen']
    },
    {
      base:[ 'get'],
      pastSimple:[ 'got'],
      pastParticiple:[ 'got']
    },
    {
      base:[ 'give'],
      pastSimple:[ 'gave'],
      pastParticiple:[ 'given']
    },
    {
      base:[ 'go'],
      pastSimple:[ 'went'],
      pastParticiple:[ 'gone']
    },
    {
      base:[ 'grow'],
      pastSimple:[ 'grew'],
      pastParticiple:[ 'grown']
    },
    {
      base:[ 'hang'],
      pastSimple:[ 'hung'],
      pastParticiple:[ 'hung']
    },
    {
      base:[ 'have'],
      pastSimple:[ 'had'],
      pastParticiple:[ 'had']
    },
    {
      base:[ 'hear'],
      pastSimple:[ 'heard'],
      pastParticiple:[ 'heard']
    },
    {
      base:[ 'hide'],
      pastSimple:[ 'hid'],
      pastParticiple:[ 'hidden']
    },
    {
      base:[ 'hit'],
      pastSimple:[ 'hit'],
      pastParticiple:[ 'hit']
    },
    {
      base:[ 'hold'],
      pastSimple:[ 'held'],
      pastParticiple:[ 'held']
    },
    {
      base:[ 'hurt'],
      pastSimple:[ 'hurt'],
      pastParticiple:[ 'hurt']
    },
    {
      base:[ 'keep'],
      pastSimple:[ 'kept'],
      pastParticiple: ['kept']
    },
    {
      base:[ 'know'],
      pastSimple:[ 'knew'],
      pastParticiple:[ 'known']
    },
    {
      base:[ 'lay'],
      pastSimple:[ 'laid'],
      pastParticiple:[ 'laid']
    },
    {
      base:[ 'lead'],
      pastSimple:[ 'led'],
      pastParticiple:[ 'led']
    },
    {
      base:[ 'learn'],
      pastSimple:[ 'learned ',' learnt'],
      pastParticiple:[ 'learned ',' learnt']
    },
    {
      base:[ 'leave'],
      pastSimple:[ 'left'],
      pastParticiple:[ 'left']
    },
    {
      base:[ 'lend'],
      pastSimple:[ 'lent'],
      pastParticiple:[ 'lent']
    },
    {
      base:[ 'let'],
      pastSimple:[ 'let'],
      pastParticiple:[ 'let']
    },
    {
      base:[ 'lie'],
      pastSimple:[ 'lay'],
      pastParticiple:[ 'lain']
    },
    {
      base:[ 'lose'],
      pastSimple:[ 'lost'],
      pastParticiple:[ 'lost']
    },
    {
      base:[ 'make'],
      pastSimple:[ 'made'],
      pastParticiple:[ 'made']
    },
    {
      base:[ 'mean'],
      pastSimple:[ 'meant'],
      pastParticiple:[ 'meant']
    },
    {
      base:[ 'meet'],
      pastSimple:[ 'met'],
      pastParticiple:[ 'met']
    },
    {
      base:[ 'pay'],
      pastSimple:[ 'paid'],
      pastParticiple:[ 'paid']
    },
    {
      base:[ 'put'],
      pastSimple:[ 'put'],
      pastParticiple:[ 'put']
    },
    {
      base:[ 'read'],
      pastSimple:[ 'read'],
      pastParticiple:[ 'read']
    },
    {
      base:[ 'ride'],
      pastSimple:[ 'rode'],
      pastParticiple:[ 'ridden']
    },
    {
      base:[ 'ring'],
      pastSimple:[ 'rang'],
      pastParticiple:[ 'rung']
    },
    {
      base:[ 'rise'],
      pastSimple:[ 'rose'],
      pastParticiple:[ 'risen']
    },
    {
      base:[ 'run'],
      pastSimple:[ 'ran'],
      pastParticiple:[ 'run']
    },
    {
      base:[ 'say'],
      pastSimple:[ 'said'],
      pastParticiple:[ 'said']
    },
    {
      base:[ 'see'],
      pastSimple:[ 'saw'],
      pastParticiple:[ 'seen']
    },
    {
      base:[ 'sell'],
      pastSimple:[ 'sold'],
      pastParticiple:[ 'sold']
    },
    {
      base:[ 'send'],
      pastSimple:[ 'sent'],
      pastParticiple:[ 'sent']
    },
    {
      base:[ 'show'],
      pastSimple:[ 'showed'],
      pastParticiple:[ 'showed','shown']
    },
    {
      base:[ 'shut'],
      pastSimple:[ 'shut'],
      pastParticiple:[ 'shut']
    },
    {
      base:[ 'sing'],
      pastSimple:[ 'sang'],
      pastParticiple:[ 'sung']
    },
    {
      base:[ 'sit'],
      pastSimple:[ 'sat'],
      pastParticiple:[ 'sat']
    },
    {
      base:[ 'sleep'],
      pastSimple:[ 'slept'],
      pastParticiple:[ 'slept']
    },
    {
      base:[ 'speak'],
      pastSimple:[ 'spoke'],
      pastParticiple:[ 'spoken']
    },
    {
      base:[ 'spend'],
      pastSimple:[ 'spent'],
      pastParticiple:[ 'spent']
    },
    {
      base:[ 'stand'],
      pastSimple:[ 'stood'],
      pastParticiple:[ 'stood']
    },
    {
      base:[ 'swim'],
      pastSimple:[ 'swam'],
      pastParticiple:[ 'swum']
    },
    {
      base:[ 'take'],
      pastSimple:[ 'took'],
      pastParticiple:[ 'taken']
    },
    {
      base:[ 'teach'],
      pastSimple:[ 'taught'],
      pastParticiple:[ 'taught']
    },
    {
      base:[ 'tear'],
      pastSimple:[ 'tore'],
      pastParticiple:[ 'torn']
    },
    {
      base:[ 'tell'],
      pastSimple:[ 'told'],
      pastParticiple:[ 'told']
    },
    {
      base:[ 'think'],
      pastSimple:[ 'thought'],
      pastParticiple:[ 'thought']
    },
    {
      base:[ 'throw'],
      pastSimple:[ 'threw'],
      pastParticiple:[ 'thrown']
    },
    {
      base:[ 'understand'],
      pastSimple:[ 'understood'],
      pastParticiple:[ 'understood']
    },
    {
      base:[ 'wake'],
      pastSimple:[ 'woke'],
      pastParticiple:[ 'woken']
    },
    {
      base:[ 'wear'],
      pastSimple:[ 'wore'],
      pastParticiple:[ 'worn']
    },
    {
      base:[ 'win'],
      pastSimple:[ 'won'],
      pastParticiple:[ 'won']
    },
    {
      base:[ 'write'],
      pastSimple:[ 'wrote'],
      pastParticiple:[ 'written']
    }
  ];

  $scope.sortedWords = [];


  $scope.correction = function(obj){
    if(obj.writed.trim().length >= obj.correct.trim().length){
      if(obj.writed.trim().toLowerCase() == obj.correct.trim().toLowerCase()){
        obj.status = true;
      } else {
        obj.status = false;
      }
    }
  };

  $scope.sortVerbs = function(){
    var max = $scope.irregularVerbs.length;
    var times = 0.2 * max;

    var sorted = [];
    var words = [];

    for(var i=0;i<times;i++){
      sorted.push(getRandomInt(0,max));
    }

    angular.forEach(sorted, function(value, key){
      var obj = $scope.irregularVerbs[value];
      var sort = getRandomInt(0,2);

      var word = '';

      switch(sort){
        case 0:
        word = obj.base[0];
        obj.base = {writed: '', correct: word, status: false};
        break;
        case 1:
        word = obj.pastSimple[0];
        obj.pastSimple = {writed: '', correct: word, status: false};
        break;
        case 2:
        word = obj.pastParticiple[0];
        obj.pastParticiple = {writed: '', correct: word, status: false};
        break;
      }

      if(word !== undefined){
        words.push({text: word});
      }

    });

    $scope.sortedWords = words;
  };


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

});
