/**
 * Created by kavith on 7/31/14.
 */
var editorItemCounter = 0;
var count = 0;
var lastItem= null;

jsPlumb.bind("ready", function () {

    initJsPlumb($("#jsPlumbContainer"));

});

function initJsPlumb(container) {

    jsPlumb.setContainer(container);
//    jsPlumb.draggable($(".draggable"), {
//        containment:$("#jsPlumbContainer")
//    });
}

$(document).ready(function () {

    $(".draggableIcon").draggable({
        helper: 'clone',
        containment: 'jsPlumbContainer',
        cursor: 'move',
        zIndex: 1000,
        //When first dragged
        stop: function (ev, ui) {
//            var pos = $(ui.helper).offset();
//
//            var type = $(this).attr("id");
//            var objName = "#" + type + editorItemCounter;
//
//            $(objName).removeClass("draggableIcon");
//            $(objName).removeClass("ui-draggable");
//            $(objName).addClass("draggable")
//
//            $(objName).draggable({
//                containment: 'jsPlumbContainerWrapper',
//                stop: function (ev, ui) {
//                    var pos = $(ui.helper).offset();
//                    console.log($(this).attr("id"));
//                    console.log(pos.left);
//                    console.log(pos.top);
//                }
//            });
        }
    });
    //Make element droppable
    $("#jsPlumbContainer").droppable({
        drop: function (ev, ui) {


            if ($(ui.draggable).attr('id').search(/dragged/) == -1) {
                editorItemCounter++;

                var element = $(ui.draggable).clone();
                var type = element.attr('id');

                var objName = "dragged" + type + editorItemCounter;

                element.attr('id', objName);
                element.removeClass("draggableIcon");
                element.removeClass("ui-draggable");
                element.addClass("draggable");
                $(this).append(element);
                jsPlumb.draggable(objName, {
                    containment: $("#jsPlumbContainer")
                });
                if(lastItem == null){
                    lastItem = $("#"+objName);
                }else{
                    jsPlumb.connect({
                        source:lastItem,
                        target:$("#"+objName),
                        anchors:["Right", "Left" ]
                    });
                }
                lastItem = $("#"+objName);
            }
        }
    });

});