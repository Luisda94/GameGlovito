gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDFondoAObjects1= [];
gdjs.MenuCode.GDFondoAObjects2= [];
gdjs.MenuCode.GDinstruccionesObjects1= [];
gdjs.MenuCode.GDinstruccionesObjects2= [];
gdjs.MenuCode.GDFondoBObjects1= [];
gdjs.MenuCode.GDFondoBObjects2= [];
gdjs.MenuCode.GDBotonJugarObjects1= [];
gdjs.MenuCode.GDBotonJugarObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDMusicButtonObjects1= [];
gdjs.MenuCode.GDMusicButtonObjects2= [];
gdjs.MenuCode.GDSoundButtonObjects1= [];
gdjs.MenuCode.GDSoundButtonObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDinstruccionesObjects1Objects = Hashtable.newFrom({"instrucciones": gdjs.MenuCode.GDinstruccionesObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBotonJugarObjects1Objects = Hashtable.newFrom({"BotonJugar": gdjs.MenuCode.GDBotonJugarObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "funny-bgm-240795.mp3", true, 60, 1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptHeight");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("instrucciones"), gdjs.MenuCode.GDinstruccionesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDinstruccionesObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrucciones", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BotonJugar"), gdjs.MenuCode.GDBotonJugarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDBotonJugarObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jugar", false);
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.setGameResolutionResizeMode(runtimeScene, "adaptWidth");
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDFondoAObjects1.length = 0;
gdjs.MenuCode.GDFondoAObjects2.length = 0;
gdjs.MenuCode.GDinstruccionesObjects1.length = 0;
gdjs.MenuCode.GDinstruccionesObjects2.length = 0;
gdjs.MenuCode.GDFondoBObjects1.length = 0;
gdjs.MenuCode.GDFondoBObjects2.length = 0;
gdjs.MenuCode.GDBotonJugarObjects1.length = 0;
gdjs.MenuCode.GDBotonJugarObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MenuCode.GDSoundButtonObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDFondoAObjects1.length = 0;
gdjs.MenuCode.GDFondoAObjects2.length = 0;
gdjs.MenuCode.GDinstruccionesObjects1.length = 0;
gdjs.MenuCode.GDinstruccionesObjects2.length = 0;
gdjs.MenuCode.GDFondoBObjects1.length = 0;
gdjs.MenuCode.GDFondoBObjects2.length = 0;
gdjs.MenuCode.GDBotonJugarObjects1.length = 0;
gdjs.MenuCode.GDBotonJugarObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDMusicButtonObjects1.length = 0;
gdjs.MenuCode.GDMusicButtonObjects2.length = 0;
gdjs.MenuCode.GDSoundButtonObjects1.length = 0;
gdjs.MenuCode.GDSoundButtonObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
