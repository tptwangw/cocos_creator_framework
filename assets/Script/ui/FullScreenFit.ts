const {ccclass, property} = cc._decorator;

@ccclass
export default class FullScreenFit extends cc.Component {

    onLoad() {
        let uiWidget = this.node.getChildByName("ui_root").getComponent(cc.Widget);
        let deviceSize = cc.view.getFrameSize();
        if (deviceSize.height / deviceSize.width > 18 / 9) {
            let designHeight = deviceSize.width * 18 / 9;
            let bottom = (deviceSize.height - designHeight) * 34 / (64 + 34);
            let top = deviceSize.height - designHeight - bottom;
            uiWidget.top = Math.min(64, top);
            uiWidget.bottom = Math.min(34, bottom);
        } else {
            uiWidget.top = 0;
            uiWidget.bottom = 0;
        }
    }
}