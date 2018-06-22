var MTFController = MTFController || {}; 

MTFController.constant = {
  qsMTFElement: "#mtf-container",

};



MTFController.initTemplate = function (pluginInstance) {
  MTFController.pluginInstance = pluginInstance;
};

MTFController.getQuestionContent = function(){
  return "<header class='mtf-header'>\
  <div class='question-image'>\
  <% if(question.data.question.image){ %> \
    <img class='mtf-question-image' onclick='MTFController.showImageModel(event)' src='<%= question.data.question.image %>' \> \
  <%}else{ %> \
  <% } %> \
  </div>\
  <% if(question.data.question.text.length<85){ %> \
    <span class='collapse-ques-text'><%= question.data.question.text %></span> \
  <%}else{ %> \
    <div id='question-text-mtf' class='collapse-ques-text' onclick='MTFController.expandQuestion(event)'><%= question.data.question.text %></div> \
  <% } %> \
  <% if(question.data.question.audio){ %> \
    <div class='mtf-question-audio'>\
      <img class='qc-question-audio-image' src='<%=MTFController.pluginInstance.getAudioIcon() %>'  onclick=MTFController.pluginInstance.playAudio('<%= question.data.question.audio %>') > \
    </div>\
  <% } %> \
</header>";
} 


MTFController.getHorizontalLayout =  function(){
    return "<div class='mtf-hori-container'>\
    <% _.each(question.data.option.optionsLHS,function(val,key){ %>\
      <div class='mtf-hori-option <%= MTFController.optionsWidth %>'>\
        <div class='mtf-hori-ques-option' >\
          <div class='mtf-hori-ques-text'>\
            <div  class='mtf-hori-ques-text-inner'>\
            <p onclick='MTFController.showImageModel(event, \"background-image\")' style=\"background-size:100% 100%; background-image:url(<%= val.image %>);\">\
              \<%= val.text %>\
              <% if(val.audio){ %> \
                <span class='mtf-hori-opt-audio-image' >\
                  <img src='<%=MTFController.pluginInstance.getAudioIcon() %>' onclick=MTFController.pluginInstance.playAudio('<%= val.audio %>') \>\
                </span>\
                <% } %>\
            </p>\
            </div>\
          </div>\
        </div>\
      </div>\
    <% });%>\
  </div>\
  <div class='mtf-hori-container panel panel-body' id='left'>\
    <% _.each(MTFController.selAns,function(val,key){ %>\
      <div class='mtf-hori-option <%= MTFController.optionsWidth %>'>\
        <div class='mtf-hori-ques-option'>\
          <div class='mtf-hori-ques-text'>\
            <div class='mtf-hori-ques-text-inner cont-dragula' id='left<%= (key+1) %>' leftindex='<%= val.index %>'><% if(val.selText.length > 0){ %> <p><%= val.selText  %> </p> <% }else{ %><%= val.selText %><% } %></div>\
          </div>\
        </div>\
      </div>\
    <% });%>\
  </div>\
  <div class='mtf-hori-container panel panel-body'>\
    <% _.each(question.data.option.optionsRHS,function(val,key){ %>\
      <div class='mtf-hori-option <%= MTFController.optionsWidth %>'>\
        <div class='mtf-hori-ques-option'>\
          <div class='mtf-hori-ques-text'>\
            <div class='mtf-hori-ques-text-inner cont-dragula' id='right<%= (key+1) %>' mapIndex='<%= val.mapIndex %>'><% if(MTFController.selAns[key].selText < 1){ %>\
              <p onclick='MTFController.showImageModel(event, \"background-image\")' style=\"background-size:100% 100%; background-image:url('<%= val.image %>');\">\
              <%= val.text %>\
              <% if(val.audio){ %> \
                <span class='mtf-hori-opt-audio-image' >\
                  <img  src='<%=MTFController.pluginInstance.getAudioIcon() %>' onclick=MTFController.pluginInstance.playAudio('<%= val.audio %>') \>\
                </span>\
                <% } %>\
              </p> \
              <% } %>\
            </div>\
          </div>\
        </div>\
      </div>\
    <% });%>\
  </div>";
} 



MTFController.getVerticalLayout = function(){
  return "<div class='mtf-vert-container' >\
            <% _.each(question.data.option.optionsLHS,function(val,key){ %>\
              <div class='mtf-vert-option <%= MTFController.optionsHeight %>'>\
                <div class='mtf-vert-ques-option'>\
                  <div class='mtf-vert-ques-text'>\
                    <div class='mtf-vert-ques-text-inner' >\
                      <p onclick='MTFController.showImageModel(event, \"background-image\")' style=\"background-size:100% 100%; background-image:url(<%= val.image %>);\">\
                        \<%= val.text %>\
                        <% if(val.audio){ %> \
                          <span class='mtf-vert-opt-audio-image' >\
                            <img src='<%=MTFController.pluginInstance.getAudioIcon() %>' onclick=MTFController.pluginInstance.playAudio('<%= val.audio %>') \>\
                          </span>\
                        <% } %>\
                      </p>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            <% });%>\
          </div>\
          <div class='mtf-vert-container panel panel-body' id='left'>\
            <% _.each(MTFController.selAns,function(val,key){ %>\
              <div class='mtf-vert-option <%= MTFController.optionsHeight %>'>\
                <div class='mtf-vert-ques-option'>\
                  <div class='mtf-vert-ques-text'>\
                    <div class='mtf-vert-ques-text-inner cont-dragula' id='left<%= (key+1) %>' leftindex='<%= val.index %>'><% if(val.selText.length > 0){ %> <p><%= val.selText  %> </p> <% }else{ %><%= val.selText %><% } %></div>\
                  </div>\
                </div>\
              </div>\
            <% });%>\
          </div>\
          <div class='mtf-vert-container panel panel-body'>\
            <% _.each(question.data.option.optionsRHS,function(val,key){ %>\
              <div class='mtf-vert-option <%= MTFController.optionsHeight %>'>\
                <div class='mtf-vert-ques-option'>\
                  <div class='mtf-vert-ques-text'>\
                    <div class='mtf-vert-ques-text-inner cont-dragula' id='right<%= (key+1) %>' mapIndex='<%= val.mapIndex %>'><% if(MTFController.selAns[key].selText < 1){ %>\
                      <p onclick='MTFController.showImageModel(event, \"background-image\")' style=\"background-size:100% 100%; background-image:url('<%= val.image %>');\">\
                        <% if(val.audio){ %> \
                          <span class='mtf-vert-opt-audio-image' >\
                            <img  src='<%=MTFController.pluginInstance.getAudioIcon() %>' onclick=MTFController.pluginInstance.playAudio('<%= val.audio %>') \>\
                          </span>\
                        <% } %>\
                        <%= val.text %>\
                      </p> \
                      <% } %>\
                    </div>\
                  </div>\
                </div>\
              </div>\
            <% });%>\
          </div>";
}

/**
   * image will be shown in popup
   * @memberof org.ekstep.questionunit.mcq.template_controller
   */
  MTFController.showImageModel = function (event, imageSrcType) {
    var eventData;
    if(imageSrcType == "background-image") {
      eventData  = event.target.style.backgroundImage.slice(4, -1).replace(/"/g, "");
      if(!eventData) return false;//when there is no image option
    }else{
      eventData  = event.target.src;
    }
    var modelTemplate = "<div class='popup' id='image-model-popup' onclick='MTFController.hideImageModel()'><div class='popup-overlay' onclick='MTFController.hideImageModel()'></div> \
    <div class='popup-full-body'> \
    <div class='font-lato assess-popup assess-goodjob-popup'> \
     <img class='qc-question-fullimage' src=<%= src %> /> \
      <div onclick='MTFController.hideImageModel()' class='qc-popup-close-button'>X</div> \
      <div  class='qc-popup-close-button'>X</div> \
    </div></div>";
    var template = _.template(modelTemplate);
    var templateData = template({
      src: eventData
    })
    $(MTFController.constant.qsMTFElement).append(templateData);
  },
  /**
   * onclick overlay or X button the popup will be hide
   * @memberof org.ekstep.questionunit.mcq.template_controller
   */
  MTFController.hideImageModel = function () {
    $("#image-model-popup").remove();
  },
  /**
   * question text if long then handle using ellipse
   * @memberof org.ekstep.questionunit.mcq.template_controller
   * @param {Object} event from question set.
   */

MTFController.expandQuestion = function (event) {
  if ($(event.target.parentElement).hasClass('collapse-ques-text')) {
    $(event.target.parentElement).removeClass("collapse-ques-text");
    $(event.target.parentElement).addClass("qc-expand-ques-text");
    $("#mtf-header").css('height', '65vh');
  } else {
    $(event.target.parentElement).addClass("collapse-ques-text");
    $(event.target.parentElement).removeClass("qc-expand-ques-text");
    $("#mtf-header").css('height', '17.7vh');
  }
};
  


//# sourceURL=MTFController.js