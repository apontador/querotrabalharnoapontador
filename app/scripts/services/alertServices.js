/*global services, $*/

'use strict';

services.factory('Alert', function(){
  var messages = [];
  var alert = {};

  alert.addMessage = function(title, msg, type, alternativeMsg, notAnimate) {
    // messages = [];
    messages.push({
      title: title,
      msg: msg,
      type: type,
      alternative: alternativeMsg
    });
    alert.classe = messages[0].type;
    if(!notAnimate){
      $('body, html, body > .modal').animate({
        scrollTop: 0
      }, 800);
    }
  };

  alert.addMessageSucess = function(title, msg, alternativeMsg, notAnimate) {
    alert.addMessage(title, msg, 'success', alternativeMsg, notAnimate);
  };

  alert.addMessageInfo = function(title, msg, alternativeMsg, notAnimate) {
    alert.addMessage(title, msg, 'info', alternativeMsg, notAnimate);
  };

  alert.addMessageError = function(title, msg, alternativeMsg, notAnimate) {
    alert.addMessage(title, msg, 'danger', alternativeMsg, notAnimate);
  };

  alert.addMessageWarn = function(title, msg, alternativeMsg, notAnimate) {
    alert.addMessage(title, msg, 'warning', alternativeMsg, notAnimate);
  };

  alert.allInfos = function() {
    return {classe: alert.classe, messages: messages};
  };

  alert.remove = function(info) {
    messages.splice(messages.indexOf(info), 1);
  };

  alert.clearMessage = function(){
    messages = [];
  };

  return alert;
});
