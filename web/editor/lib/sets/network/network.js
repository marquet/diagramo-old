figureSets["network"] = [
    {figureFunction: "Person", image: "1_person.png"},
    {figureFunction: "Switch", image: "2_switch.png"},    
    {figureFunction: "Router", image: "3_router.png"},    
    {figureFunction: "Server", image: "5_server.png"},
    {figureFunction: "Desktop", image: "9_desktop.png"},
    {figureFunction: "Printer", image: "13_printer.png"}
]

function figure_Person(x, y)
{
    var f = new Figure("Person");
    f.style.fillStyle = figure_defaultFillStyle;
    f.style.strokeStyle = figure_defaultStrokeStyle;
    
    //Image
    var url = "/editor/lib/sets/network/1_person.svg";
    
    var ifig = new ImageFrame(url, x, y, true, 48, 48);
    ifig.debug = true;
    f.addPrimitive(ifig);    
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
    var t2 = new Text(figure_defaultFigureTextStr, x, y + 24, figure_defaultFigureTextFont, figure_defaultFigureTextSize);
    t2.style.fillStyle = figure_defaultFillTextStyle;
    f.addPrimitive(t2);
    
    //Connection Points
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + 24, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - 24, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - 24), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + 35), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}



function figure_Switch(x, y){
    /*As we do not know the size of the image (util it is loaded and is too late)
     * we need to specify the size of it*/
    var imageWidth = 48.75;
    var imageHeight = 32.375;
   
    
    var f = new Figure("Switch");
    f.style.fillStyle = figure_defaultFillStyle;
    f.style.strokeStyle = figure_defaultStrokeStyle;
    
    //Image
    var url = "/editor/lib/sets/network/2_switch.svg";
    
    var ifig = new ImageFrame(url, x, y, true, imageWidth, imageHeight);
    ifig.debug = true;
    f.addPrimitive(ifig);    
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
    var t2 = new Text(figure_defaultFigureTextStr, x, y + imageHeight/2 + 5, figure_defaultFigureTextFont, figure_defaultFigureTextSize);
    t2.style.fillStyle = figure_defaultFillTextStyle;
    f.addPrimitive(t2);
    
    //Connection Points
    
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - imageHeight/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + imageHeight/2 + 5 + 14 ), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}


function figure_Router(x, y){
    /*As we do not know the size of the image (util it is loaded and is too late)
     * we need to specify the size of it*/
    var imageWidth = 48.75;
    var imageHeight = 32.375;
   
    
    var f = new Figure("Router");
    f.style.fillStyle = figure_defaultFillStyle;
    f.style.strokeStyle = figure_defaultStrokeStyle;
    
    //Image
    var url = "/editor/lib/sets/network/3_router.svg";
    
    var ifig = new ImageFrame(url, x, y, true, imageWidth, imageHeight);
    ifig.debug = true;
    f.addPrimitive(ifig);    
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
    var t2 = new Text(figure_defaultFigureTextStr, x, y + imageHeight/2 + 5, figure_defaultFigureTextFont, figure_defaultFigureTextSize);
    t2.style.fillStyle = figure_defaultFillTextStyle;
    f.addPrimitive(t2);
    
    //Connection Points
    
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - imageHeight/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + imageHeight/2 + 5 + 14 ), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}

function figure_Server(x, y){
    /*As we do not know the size of the image (util it is loaded and is too late)
     * we need to specify the size of it*/
    var imageWidth = 37.59;
    var imageHeight = 60.125;
   
    
    var f = new Figure("Server");
    f.style.fillStyle = figure_defaultFillStyle;
    f.style.strokeStyle = figure_defaultStrokeStyle;
    
    //Image
    var url = "/editor/lib/sets/network/5_server.svg";
    
    var ifig = new ImageFrame(url, x, y, true, imageWidth, imageHeight);
    ifig.debug = true;
    f.addPrimitive(ifig);    
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
    var t2 = new Text(figure_defaultFigureTextStr, x, y + imageHeight/2 + 5, figure_defaultFigureTextFont, figure_defaultFigureTextSize);
    t2.style.fillStyle = figure_defaultFillTextStyle;
    f.addPrimitive(t2);
    
    //Connection Points
    
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - imageHeight/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + imageHeight/2 + 5 + 14 ), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}





function figure_Desktop(x, y){
    /*As we do not know the size of the image (util it is loaded and is too late)
     * we need to specify the size of it*/
    var imageWidth = 48;
    var imageHeight = 48;
   
    
    var f = new Figure("Server");
    f.style.fillStyle = figure_defaultFillStyle;
    f.style.strokeStyle = figure_defaultStrokeStyle;
    
    //Image
    var url = "/editor/lib/sets/network/9_desktop.svg";
    
    var ifig = new ImageFrame(url, x, y, true, imageWidth, imageHeight);
    ifig.debug = true;
    f.addPrimitive(ifig);    
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
    var t2 = new Text(figure_defaultFigureTextStr, x, y + imageHeight/2 + 5, figure_defaultFigureTextFont, figure_defaultFigureTextSize);
    t2.style.fillStyle = figure_defaultFillTextStyle;
    f.addPrimitive(t2);
    
    //Connection Points
    
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - imageHeight/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + imageHeight/2 + 5 + 14 ), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}


function figure_Printer(x, y){
    /*As we do not know the size of the image (util it is loaded and is too late)
     * we need to specify the size of it*/
    var imageWidth = 48;
    var imageHeight = 48;
   
    
    var f = new Figure("Printer");
    f.style.fillStyle = figure_defaultFillStyle;
    f.style.strokeStyle = figure_defaultStrokeStyle;
    
    //Image
    var url = "/editor/lib/sets/network/13_printer.svg";
    
    var ifig = new ImageFrame(url, x, y, true, imageWidth, imageHeight);
    ifig.debug = true;
    f.addPrimitive(ifig);    
    
    //Text
    f.properties.push(new BuilderProperty('Text', 'primitives.1.str', BuilderProperty.TYPE_TEXT));
    f.properties.push(new BuilderProperty('Text Size', 'primitives.1.size', BuilderProperty.TYPE_TEXT_FONT_SIZE));
    f.properties.push(new BuilderProperty('Font', 'primitives.1.font', BuilderProperty.TYPE_TEXT_FONT_FAMILY));
    f.properties.push(new BuilderProperty('Alignment', 'primitives.1.align', BuilderProperty.TYPE_TEXT_FONT_ALIGNMENT));
    f.properties.push(new BuilderProperty('Text Color', 'primitives.1.style.fillStyle', BuilderProperty.TYPE_COLOR));
    
    var t2 = new Text(figure_defaultFigureTextStr, x, y + imageHeight/2 + 5, figure_defaultFigureTextFont, figure_defaultFigureTextSize);
    t2.style.fillStyle = figure_defaultFillTextStyle;
    f.addPrimitive(t2);
    
    //Connection Points
    
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x + imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x - imageWidth/2, y), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y - imageHeight/2), ConnectionPoint.TYPE_FIGURE);
    CONNECTOR_MANAGER.connectionPointCreate(f.id, new Point(x, y + imageHeight/2 + 5 + 14 ), ConnectionPoint.TYPE_FIGURE);
    
    f.finalise();
    return f;
}
