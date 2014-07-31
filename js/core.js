/**
 * Created by kavith on 7/31/14.
 */

jsPlumb.bind("ready", function() {

    initJsPlumb($("#jsPlumbContainer"));

    jsPlumb.connect(
        {
            source: $("#item1"),
            target: $("#item2")
        }
    );

    jsPlumb.connect(
        {
            source: $("#item1"),
            target: $("#item3")
        }
    );

});

function initJsPlumb(container){

    jsPlumb.setContainer(container);

    jsPlumb.draggable($(".draggable"), {
        containment:"jsPlumbContainer"
    });

}
